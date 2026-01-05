import { useState, useEffect, useRef, useCallback } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
  type DraggableProvided,
  type DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import { Eye, EyeOff, GripVertical, Trash2 } from "lucide-react";
import * as pdfjs from "pdfjs-dist";
import type { PDFDocumentProxy, PageViewport, RenderTask } from "pdfjs-dist";
import { useFileStore } from "../../src/file-store";
import {
  setField,
  setPdfToGifFileData,
  updatePdfToGifPages,
  createInitialGifData,
  DEFAULT_PAGE_DELAY,
  type GifPage,
  type ToolState,
} from "../../src/store";
import type { errors as _, edit_page } from "../../src/content";
import { Loader } from "./Loader";

// ============ TYPES ============
export interface PDFToGifFileCardProps {
  file: File;
  fileKey: string;
  errors: _;
  content: edit_page["pdfToGifFileCard"];
  themeColor?: string;
}

// ============ CONSTANTS ============
const THEME_COLOR_DEFAULT = "#636e72";

// ============ HELPER FUNCTIONS ============
async function getAllPagesAsImages(
  file: File,
  dispatch: ReturnType<typeof useDispatch>,
  errors: _,
  password?: string
): Promise<GifPage[]> {
  const fileUrl = URL.createObjectURL(file);
  const pages: GifPage[] = [];

  try {
    const loadingTask = pdfjs.getDocument({
      url: fileUrl,
      password: password || undefined,
    });

    const pdf: PDFDocumentProxy = await loadingTask.promise;
    const numPages = pdf.numPages;

    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const scale = 1.5;
      const viewport: PageViewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error("Canvas context not available.");
      }

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderTask: RenderTask = page.render({
        canvasContext: context,
        viewport: viewport,
      });

      await renderTask.promise;

      pages.push({
        page: i,
        imageUrl: canvas.toDataURL(),
        enabled: true,
        delay: DEFAULT_PAGE_DELAY,
      });
    }

    URL.revokeObjectURL(fileUrl);
    return pages;
  } catch (error: any) {
    URL.revokeObjectURL(fileUrl);

    if (error?.name === "PasswordException") {
      dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
      return [];
    }

    dispatch(
      setField({
        errorMessage: errors.FILE_CORRUPT?.message || "File is corrupt",
      })
    );
    return [];
  }
}

// ============ PAGE ITEM COMPONENT ============
interface PageItemProps {
  page: GifPage;
  index: number;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  onToggleEnabled: (pageNum: number) => void;
  onDelayChange: (pageNum: number, delay: number) => void;
  content: PDFToGifFileCardProps["content"];
  themeColor: string;
}

const PageItem = ({
  page,
  index,
  provided,
  snapshot,
  onToggleEnabled,
  onDelayChange,
  content,
  themeColor,
}: PageItemProps) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`relative rounded-lg border-2 transition-all cursor-grab active:cursor-grabbing ${
        snapshot.isDragging ? "shadow-lg z-10" : ""
      } ${page.enabled ? "bg-white" : "bg-gray-100"}`}
      style={{
        ...provided.draggableProps.style,
        borderColor: snapshot.isDragging
          ? themeColor
          : page.enabled
            ? "#e5e7eb"
            : "#d1d5db",
        opacity: page.enabled ? 1 : 0.5,
      }}
    >
      {/* Drag Handle Indicator */}
      <div
        className="absolute top-2 left-2 p-1 rounded bg-white/80 pointer-events-none"
        data-tooltip-id={`drag-tooltip-${page.page}`}
        data-tooltip-content={content.drag_to_reorder}
      >
        <GripVertical size={16} className="text-gray-400" />
        <Tooltip id={`drag-tooltip-${page.page}`} place="top" />
      </div>

      {/* Toggle Enable/Disable Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleEnabled(page.page);
        }}
        onMouseDown={(e) => e.stopPropagation()}
        className="absolute top-2 right-2 p-1.5 rounded bg-white/80 hover:bg-white transition-colors z-10"
        data-tooltip-id={`toggle-tooltip-${page.page}`}
        data-tooltip-content={
          page.enabled ? content.disable_page : content.enable_page
        }
      >
        {page.enabled ? (
          <Eye size={16} style={{ color: themeColor }} />
        ) : (
          <EyeOff size={16} className="text-gray-400" />
        )}
        <Tooltip id={`toggle-tooltip-${page.page}`} place="top" />
      </button>

      {/* Page Image */}
      <div className="p-3 pt-10">
        <img
          src={page.imageUrl}
          alt={`${content.page} ${page.page}`}
          className="w-full h-auto rounded shadow-sm object-contain"
          style={{ maxHeight: "180px" }}
          draggable={false}
        />
      </div>

      {/* Page Info & Delay Control */}
      <div className="px-3 pb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            {content.page} {page.page}
          </span>
          <span className="text-xs text-gray-400">#{index + 1}</span>
        </div>

        {/* Delay Input */}
        <div
          className="flex items-center gap-2"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <label className="text-xs text-gray-500 whitespace-nowrap">
            {content.delay}:
          </label>
          <input
            type="number"
            value={page.delay}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              if (!isNaN(val) && val >= 0) {
                onDelayChange(page.page, val);
              }
            }}
            min={0.1}
            max={10}
            step={0.1}
            disabled={!page.enabled}
            className="flex-1 px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 disabled:bg-gray-100 disabled:text-gray-400"
            onFocus={(e) => {
              e.target.style.borderColor = themeColor;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e5e7eb";
            }}
          />
          <span className="text-xs text-gray-500">{content.delay_seconds}</span>
        </div>
      </div>
    </div>
  );
};

// ============ MAIN COMPONENT ============
export const PDFToGifFileCard = ({
  file,
  fileKey,
  errors,
  content,
  themeColor = THEME_COLOR_DEFAULT,
}: PDFToGifFileCardProps) => {
  const dispatch = useDispatch();
  const { files, setFiles } = useFileStore();
  const [isLoading, setIsLoading] = useState(true);
  const isSubscribedRef = useRef(true);

  // Get this file's data from Redux (merged structure)
  const fileData = useSelector(
    (state: { tool: ToolState }) => state.tool.pdfToGifRecord[fileKey]
  );

  const pages = fileData?.pages || [];

  // Load pages on mount if not already loaded
  useEffect(() => {
    // If we already have pages, don't reload
    if (fileData?.pages?.length) {
      setIsLoading(false);
      return;
    }

    isSubscribedRef.current = true;

    const loadPages = async () => {
      setIsLoading(true);
      const extractedPages = await getAllPagesAsImages(file, dispatch, errors);

      if (isSubscribedRef.current && extractedPages.length > 0) {
        // Initialize with default settings and extracted pages
        dispatch(
          setPdfToGifFileData({
            fileKey,
            data: createInitialGifData(extractedPages),
          })
        );
        setIsLoading(false);
      }
    };

    loadPages();

    return () => {
      isSubscribedRef.current = false;
    };
  }, [file, fileKey, dispatch, errors, fileData?.pages?.length]);

  // Handle drag end
  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const sourceIndex = result.source.index;
      const destIndex = result.destination.index;

      if (sourceIndex === destIndex) return;

      const newPages = Array.from(pages);
      const [removed] = newPages.splice(sourceIndex, 1);
      newPages.splice(destIndex, 0, removed);

      dispatch(updatePdfToGifPages({ fileKey, pages: newPages }));
    },
    [pages, fileKey, dispatch]
  );

  // Toggle page enabled/disabled
  const handleToggleEnabled = useCallback(
    (pageNum: number) => {
      const newPages = pages.map((p) =>
        p.page === pageNum ? { ...p, enabled: !p.enabled } : p
      );
      dispatch(updatePdfToGifPages({ fileKey, pages: newPages }));
    },
    [pages, fileKey, dispatch]
  );

  // Update page delay
  const handleDelayChange = useCallback(
    (pageNum: number, delay: number) => {
      const newPages = pages.map((p) =>
        p.page === pageNum ? { ...p, delay } : p
      );
      dispatch(updatePdfToGifPages({ fileKey, pages: newPages }));
    },
    [pages, fileKey, dispatch]
  );

  // Remove file
  const handleRemoveFile = () => {
    const newFiles = files.filter((f) => f.name !== file.name);
    setFiles(newFiles);
  };

  // Check if all pages are disabled
  const allPagesDisabled = pages.length > 0 && pages.every((p) => !p.enabled);
  const enabledPagesCount = pages.filter((p) => p.enabled).length;

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <Loader loader_text={content.loading} />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-gray-800">
              {file.name.length > 30
                ? file.name.slice(0, 15) + "..." + file.name.slice(-12)
                : file.name}
            </h3>
            <span
              className="px-2 py-1 text-xs font-medium rounded-full"
              style={{
                backgroundColor: `${themeColor}15`,
                color: themeColor,
              }}
            >
              {enabledPagesCount} / {pages.length} {content.page}
              {pages.length !== 1 ? "s" : ""}
            </span>
          </div>
          {/* Remove File */}
          <button
            type="button"
            onClick={handleRemoveFile}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            data-tooltip-id="remove-file-tooltip"
            data-tooltip-content={content.remove_file}
          >
            <Trash2 size={20} />
            <Tooltip id="remove-file-tooltip" place="top" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Warning if all pages disabled */}
        {allPagesDisabled && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-700">
              ⚠️ {content.all_pages_disabled_warning}
            </p>
          </div>
        )}

        {/* Pages Grid with Drag and Drop */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable
            droppableId={`gif-pages-${fileKey}`}
            direction="horizontal"
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 rounded-lg transition-colors ${
                  snapshot.isDraggingOver ? "bg-gray-50" : ""
                }`}
              >
                {pages.map((page, index) => (
                  <Draggable
                    key={`${fileKey}-page-${page.page}`}
                    draggableId={`${fileKey}-page-${page.page}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <PageItem
                        page={page}
                        index={index}
                        provided={provided}
                        snapshot={snapshot}
                        onToggleEnabled={handleToggleEnabled}
                        onDelayChange={handleDelayChange}
                        content={content}
                        themeColor={themeColor}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default PDFToGifFileCard;
