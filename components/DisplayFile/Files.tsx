import { type Dispatch, type SetStateAction, useEffect } from "react";
import type { errors as _, Paths } from "../../src/content";
import FileCard from "./FileCard";
import { useDropzone, type Accept } from "react-dropzone";
import { useFileStore } from "../../src/file-store";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubscriptionStatus } from "fetch-subscription-status";
import { setField, type ToolState } from "../../src/store";
import {
  ACCEPTED,
  calculatePages,
  filterNewFiles,
  getAcceptFromPath,
  getMimeTypesFromPath,
  SUPPORTED_IMAGE_MIME_TYPES,
  validateFiles,
} from "../../src/utils";
import ImageCard from "./ImageCard";
import {
  DragDropContext,
  Draggable,
  Droppable,
  type DropResult,
} from "react-beautiful-dnd";

type FileProps = {
  errors: _;
  extension: string;
  toolTipSizes: string[];
  setToolTipSizes: Dispatch<SetStateAction<string[]>>;
  loader_text: string;
  fileDetailProps: [string, string, string];
  path: Paths;
};

type ValidationResult = string | "";

const MAX_IMAGES = 15;
const MAX_IMAGE_SIZE = 20 * 1024 * 1024; // 20MB
const MAX_TOTAL_SIZE = 100 * 1024 * 1024; // 100MB

export const validateImages = (files: File[], errors: _): ValidationResult => {
  // 1️⃣ Max images
  if (files.length > MAX_IMAGES) {
    return errors.MAX_IMAGES_EXCEEDED.message;
  }

  let totalSize = 0;

  for (const file of files) {
    totalSize += file.size;

    // 2️⃣ Image too large
    if (file.size > MAX_IMAGE_SIZE) {
      return errors.IMAGE_TOO_LARGE.message;
    }

    // 3️⃣ Total size exceeded (early exit)
    if (totalSize > MAX_TOTAL_SIZE) {
      return errors.TOTAL_SIZE_EXCEEDED.message;
    }
  }

  return "";
};

const MAX_PDF_FILES = 15;
const MAX_PDF_SIZE = 50 * 1024 * 1024; // 50MB
const MAX_PDF_PAGES = 50;

export const validatePdfs = async (
  files: File[],
  errors: _
): Promise<ValidationResult> => {
  // 1️⃣ Max files
  if (files.length > MAX_PDF_FILES) {
    return errors.MAX_FILES_EXCEEDED.message;
  }

  for (const file of files) {
    // 2️⃣ File size
    if (file.size > MAX_PDF_SIZE) {
      return errors.FILE_TOO_LARGE.message;
    }

    // 3️⃣ Page count (only when needed)
    if (file.type === "application/pdf") {
      const pages = await calculatePages(file);

      if (pages > MAX_PDF_PAGES) {
        return errors.MAX_PAGES_EXCEEDED.message;
      }
    }
  }

  return "";
};

const Files = ({
  errors,
  extension,
  loader_text,
  fileDetailProps,
  path,
}: FileProps) => {
  const { files, setFiles } = useFileStore();
  const dispatch = useDispatch();
  const subscriptionStatus = useSelector(
    (state: { tool: ToolState }) => state.tool.subscriptionStatus
  );
  useEffect(() => {
    (async () => {
      const isSubscribed =
        subscriptionStatus === null
          ? await fetchSubscriptionStatus()
          : subscriptionStatus;

      if (isSubscribed) {
        dispatch(setField({ limitationMsg: "" }));
        return;
      }

      const hasImages = path.includes("to-pdf");
      const hasPdfs = path.includes("pdf-to");

      let limitationMsg = "";

      if (hasImages) {
        limitationMsg = validateImages(files, errors);
      }

      if (!limitationMsg && hasPdfs) {
        limitationMsg = await validatePdfs(files, errors);
      }

      dispatch(setField({ limitationMsg }));
    })();
  }, [files]);

  const onDrop = (acceptedFiles: File[]) => {
    const mimeTypes = getMimeTypesFromPath(path);
    const { isValid } = validateFiles(
      acceptedFiles,
      dispatch,
      errors,
      mimeTypes
    );
    const newFiles = filterNewFiles(acceptedFiles, files, ACCEPTED);
    if (isValid) {
      setFiles([...files, ...newFiles]);
    }
  };

  useDropzone({
    onDrop,
    accept: getAcceptFromPath(path), // Dynamic based on path
    noClick: files.length > 0,
    noKeyboard: files.length > 0,
  });

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(files);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination!.index, 0, reorderedItem);
    setFiles(items);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="imageUrls" direction="horizontal">
          {(provided, snapshot) => (
            <div
              className={`display-file ${
                snapshot.isDraggingOver ? "dragging-over" : ""
              }`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {files.map((file, index) => (
                <Draggable
                  key={file.name}
                  draggableId={file.name}
                  index={index}
                  isDragDisabled={extension === ".pdf"}
                >
                  {(provided, snapshot) => (
                    <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className={`drag-element ${
                        snapshot.isDragging ? "dragging" : ""
                      }`}
                      style={{
                        ...provided.draggableProps.style,
                      }}
                    >
                      {extension === ".pdf" ? (
                        <FileCard
                          extension={extension}
                          file={file}
                          index={index}
                          isDraggable={false}
                          provided={null}
                          snapshot={null}
                          errors={errors}
                          loader_text={loader_text}
                          fileDetailProps={fileDetailProps}
                        />
                      ) : (
                        <ImageCard
                          index={index}
                          provided={provided}
                          extension={extension}
                          errors={errors}
                          fileDetailProps={fileDetailProps}
                          file={file}
                          loader_text={loader_text}
                        />
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Files;
