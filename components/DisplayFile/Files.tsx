import { type Dispatch, type SetStateAction, useEffect } from "react";
import type { errors as _ } from "../../src/content";
import FileCard from "./FileCard";
import { useDropzone, type Accept } from "react-dropzone";
import { useFileStore } from "../../src/file-store";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubscriptionStatus } from "fetch-subscription-status";
import { setField, type ToolState } from "../../src/store";
import {
  ACCEPTED,
  filterNewFiles,
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
  drop_files: string;
};

const Files = ({
  errors,
  extension,
  loader_text,
  fileDetailProps,
  drop_files,
}: FileProps) => {
  const { files, setFiles } = useFileStore();
  const dispatch = useDispatch();
  const subscriptionStatus = useSelector(
    (state: { tool: ToolState }) => state.tool.subscriptionStatus
  );

  // useEffect(() => {
  //   let limitationMsg = "";
  //   (async () => {
  //     const isSubscribed =
  //       subscriptionStatus === null
  //         ? await fetchSubscriptionStatus()
  //         : subscriptionStatus;
  //     if (isSubscribed) {
  //       return;
  //     }
  //     // Check limitations
  //     if (files.length === 1 && files[0].size >= 100 * 1024 * 1024) {
  //       limitationMsg = errors.alerts.singleFileSize;
  //     }
  //     if (files.length >= 15) {
  //       limitationMsg = errors.alerts.maxFiles;
  //     } else if (files.some((file) => file.size > 50 * 1024 * 1024)) {
  //       limitationMsg = errors.alerts.fileSize;
  //     }
  //     // Dispatch the message
  //     dispatch(setField({ limitationMsg }));
  //   })();
  // }, [files]);

  const onDrop = (acceptedFiles: File[]) => {
    const { isValid } = validateFiles(
      acceptedFiles,
      dispatch,
      errors,
      SUPPORTED_IMAGE_MIME_TYPES
    );
    const newFiles = filterNewFiles(acceptedFiles, files, ACCEPTED);
    if (isValid) {
      setFiles([...files, ...newFiles]);
    }
  };

  const imageAccept: Accept = {
    "image/jpeg": [".jpeg", ".jpg"],
    "image/png": [".png"],
    "image/gif": [".gif"],
    "image/tiff": [".tiff", ".tif"],
    "image/bmp": [".bmp"],
    "image/svg+xml": [".svg"],
    "image/webp": [".webp"],
    "image/heif": [".heif", ".heic"], // some platforms use .heic
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: imageAccept,
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
    <div
      {...getRootProps()}
      className={`display-file ${isDragActive ? "dragging-over" : ""}`}
      style={{ position: "relative" }}
    >
      <input {...getInputProps()} />

      {isDragActive && <div className="overlay display-4">{drop_files}</div>}

      {files.map((file, index) => (
        <div key={file.name} className="drag-element">
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
                    <Draggable
                      key={file.name}
                      draggableId={file.name}
                      index={index}
                      isDragDisabled={true}
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
                          <ImageCard
                            index={index}
                            provided={provided}
                            extension={extension}
                            errors={errors}
                            fileDetailProps={fileDetailProps}
                            file={file}
                            loader_text={loader_text}
                          />
                        </div>
                      )}
                    </Draggable>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}
        </div>
      ))}
    </div>
  );
};

export default Files;
