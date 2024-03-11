import { Dispatch, SetStateAction, useEffect } from "react";
import type { errors as _ } from "../../content";
import ImageCard from "./ImageCard";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { isDraggableExtension } from "../../src/utils";
import { useRouter } from "next/router";
import { useFileStore } from "../../src/file-store";
import FileCard from "./FileCard";

type FileProps = {
  errors: _;
  extension: string;
  toolTipSizes: string[];
  setToolTipSizes: Dispatch<SetStateAction<string[]>>;
  loader_text: string;
  showSpinner: boolean;
  fileDetailProps: [string, string, string];
};
const Files = ({
  errors,
  extension,
  loader_text,
  fileDetailProps,
}: FileProps) => {
  // const store = useSelector((state: { tool: ToolState }) => state.tool);
  const { files, setFiles } = useFileStore();

  const router = useRouter();
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
              className={`display-file ${snapshot.isDraggingOver ? "dragging-over" : ""
                }`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {/* this is what cause the error instead of imageUrls i want to use the files array it's a File[] */}
              {files.map((file, index) => (
                <Draggable
                  key={file.name}
                  draggableId={file.name}
                  index={index}
                  isDragDisabled={!isDraggableExtension(extension, router)}
                >
                  {(provided, snapshot) => (
                    <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className={`drag-element ${snapshot.isDragging ? "dragging" : ""
                        }`}
                      style={{
                        ...provided.draggableProps.style,
                      }}
                    >
                      {extension === ".pdf" ?
                        (
                          <FileCard
                            extension={extension}
                            file={file}
                            index={index}
                            isDraggable={isDraggableExtension(extension, router)}
                            provided={provided}
                            snapshot={snapshot}
                            errors={errors}
                            loader_text={loader_text}
                            fileDetailProps={fileDetailProps}
                          />) : (
                          <ImageCard
                            index={index}
                            provided={provided}
                            extension={extension}
                            errors={errors}
                            fileDetailProps={fileDetailProps}
                            file={file}
                            loader_text={loader_text}
                          />)}
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
