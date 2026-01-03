import { useState, useEffect, useRef, useCallback } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
  type DraggableProvided,
  type DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { Tooltip } from "react-tooltip";
import { Eye, EyeOff, GripVertical, Trash2 } from "lucide-react";
import * as pdfjs from "pdfjs-dist";
import type { PDFDocumentProxy, PageViewport, RenderTask } from "pdfjs-dist";
import { useFileStore } from "../../src/file-store";
import { setField } from "../../src/store";
import type { errors as _ } from "../../src/content";
import { Loader } from "./Loader";

// ============ TYPES ============
export interface GifPage {
  pageNumber: number;
  imageUrl: string;
  enabled: boolean;
  delay: number; // in seconds
}

export interface PDFToGifFileCardProps {
  file: File;
  fileKey: string; // sanitized key for this file
  errors: _;
  content: {
    loading: string;
    page: string;
    delay: string;
    delay_seconds: string;
    enable_page: string;
    disable_page: string;
    remove_file: string;
    drag_to_reorder: string;
    all_pages_disabled_warning: string;
  };
  themeColor?: string;
  initialPages?: GifPage[];
  onPagesUpdate?: (fileKey: string, pages: GifPage[]) => void;
}

// ============ CONSTANTS ============
const DEFAULT_DELAY = 0.5; // Default delay in seconds
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
        pageNumber: i,
        imageUrl: canvas.toDataURL(),
        enabled: true,
        delay: DEFAULT_DELAY,
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
  onToggleEnabled: (pageNumber: number) => void;
  onDelayChange: (pageNumber: number, delay: number) => void;
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
      {...provided.dragHandleProps} // Make entire card draggable
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
      {/* Drag Handle Indicator (visual only, whole card is draggable) */}
      <div
        className="absolute top-2 left-2 p-1 rounded bg-white/80 pointer-events-none"
        data-tooltip-id={`drag-tooltip-${page.pageNumber}`}
        data-tooltip-content={content.drag_to_reorder}
      >
        <GripVertical size={16} className="text-gray-400" />
        <Tooltip id={`drag-tooltip-${page.pageNumber}`} place="top" />
      </div>

      {/* Toggle Enable/Disable Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation(); // Prevent drag when clicking button
          onToggleEnabled(page.pageNumber);
        }}
        onMouseDown={(e) => e.stopPropagation()} // Prevent drag initiation
        className="absolute top-2 right-2 p-1.5 rounded bg-white/80 hover:bg-white transition-colors z-10"
        data-tooltip-id={`toggle-tooltip-${page.pageNumber}`}
        data-tooltip-content={
          page.enabled ? content.disable_page : content.enable_page
        }
      >
        {page.enabled ? (
          <Eye size={16} style={{ color: themeColor }} />
        ) : (
          <EyeOff size={16} className="text-gray-400" />
        )}
        <Tooltip id={`toggle-tooltip-${page.pageNumber}`} place="top" />
      </button>

      {/* Page Image */}
      <div className="p-3 pt-10">
        <img
          src={page.imageUrl}
          alt={`${content.page} ${page.pageNumber}`}
          className="w-full h-auto rounded shadow-sm object-contain"
          style={{ maxHeight: "180px" }}
          draggable={false}
        />
      </div>

      {/* Page Info & Delay Control */}
      <div className="px-3 pb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            {content.page} {page.pageNumber}
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
                onDelayChange(page.pageNumber, val);
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
  initialPages,
  onPagesUpdate,
}: PDFToGifFileCardProps) => {
  const dispatch = useDispatch();
  const { files, setFiles } = useFileStore();
  const [pages, setPages] = useState<GifPage[]>(initialPages || []);
  const [isLoading, setIsLoading] = useState(!initialPages?.length);
  const isSubscribedRef = useRef(true);

  // Track if pages were just initialized to avoid duplicate updates
  const initializedRef = useRef(false);
  const prevPagesRef = useRef<GifPage[]>(pages);

  // Notify parent of page updates - only when pages actually change
  useEffect(() => {
    // Skip if no pages yet or no callback
    if (pages.length === 0 || !onPagesUpdate) return;

    // Skip if this is initial mount with initialPages (already in parent state)
    if (!initializedRef.current && initialPages?.length) {
      initializedRef.current = true;
      prevPagesRef.current = pages;
      return;
    }

    // Skip if pages reference hasn't changed
    if (prevPagesRef.current === pages) return;

    prevPagesRef.current = pages;
    initializedRef.current = true;
    onPagesUpdate(fileKey, pages);
  }, [pages, fileKey, onPagesUpdate, initialPages]);

  // Load all pages on mount (only if no initial pages)
  useEffect(() => {
    if (initialPages?.length) {
      setPages(initialPages);
      setIsLoading(false);
      return;
    }

    isSubscribedRef.current = true;

    const loadPages = async () => {
      setIsLoading(true);
      const extractedPages = await getAllPagesAsImages(file, dispatch, errors);

      if (isSubscribedRef.current) {
        setPages(extractedPages);
        setIsLoading(false);
      }
    };

    loadPages();

    return () => {
      isSubscribedRef.current = false;
    };
    // Only depend on file identity, not initialPages changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file, dispatch, errors]);

  // Handle drag end
  const handleDragEnd = useCallback((result: DropResult) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;

    if (sourceIndex === destIndex) return;

    setPages((prevPages) => {
      const newPages = Array.from(prevPages);
      const [removed] = newPages.splice(sourceIndex, 1);
      newPages.splice(destIndex, 0, removed);
      return newPages;
    });
  }, []);

  // Toggle page enabled/disabled
  const handleToggleEnabled = useCallback((pageNumber: number) => {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.pageNumber === pageNumber
          ? { ...page, enabled: !page.enabled }
          : page
      )
    );
  }, []);

  // Update page delay
  const handleDelayChange = useCallback((pageNumber: number, delay: number) => {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.pageNumber === pageNumber ? { ...page, delay } : page
      )
    );
  }, []);

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
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
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
        <Droppable droppableId={`gif-pages-${fileKey}`} direction="horizontal">
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
                  key={`${fileKey}-page-${page.pageNumber}`}
                  draggableId={`${fileKey}-page-${page.pageNumber}`}
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
  );
};

export default PDFToGifFileCard;
