// this is the component that is responsible for rendering the image files
// i think GIF, HEIF/HEIC, SVG images require special case of handling
import React, { useCallback, useEffect, useState } from "react";
import { ActionDiv } from "./ActionDiv";
import { Tooltip } from "react-tooltip";
import { useDispatch } from "react-redux";
import { getFileDetailsTooltipContent, shortenFileName } from "../../src/utils";
import { Loader } from "./Loader";
import type { errors } from "../../src/content";
interface ImageCardProps {
  index: number;
  provided: any;
  extension: string;
  errors: errors;
  file: File;
  fileDetailProps: [string, string, string];
  loader_text: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  index,
  provided,
  extension,
  errors,
  file,
  fileDetailProps,
  loader_text,
}) => {
  const [showLoader, setShowLoader] = useState(true);
  const [showImg, setShowImg] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [tooltipSize, setToolTipSize] = useState("");
  const dispatch = useDispatch();
  let isSubscribed = true;
  const processFile = useCallback(async () => {
    if (extension) {
      try {
        setShowLoader(true);
        const reader = new FileReader();
        reader.onload = function (event: ProgressEvent<FileReader>) {
          const imageUrl = (event.target as FileReader).result as string;
          setImageUrl(imageUrl);
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.error("Error processing files:", error);
      } finally {
        setShowLoader(false);
      }
    }
  }, [extension, file]);
  useEffect(() => {
    let p = getFileDetailsTooltipContent(
      file,
      ...fileDetailProps,
      dispatch,
      errors
    );
    p.then((size) => {
      setToolTipSize(size);
    });
    processFile();
    return () => {
      isSubscribed = false;
    };
  }, []);
  return (
    <div
      className="drag-element-img"
      data-tooltip-id={`image_tooltip_${index}`}
      data-tooltip-html={tooltipSize}
      data-tooltip-place="top"
      {...provided.dragHandleProps}
      style={{
        height: showImg ? "auto" : "126px",
      }}
    >
      <ActionDiv extension={extension} fileName={file.name} />
      {showLoader ? <Loader loader_text={loader_text} /> : null}
      <bdi>
        <Tooltip id={`image_tooltip_${index}`} />
      </bdi>
      <div>
        <img
          className="img-fluid-custom object-fit-cover border rounded"
          src={imageUrl}
          alt={`Selected file ${index}`}
          draggable={false}
          style={{
            opacity: showImg ? "1" : "0",
          }}
          onError={() => setShowImg(false)}
          onLoad={() => {
            setShowLoader(false);
            setShowImg(true);
          }}
        />
      </div>
      <p className="text-center">{shortenFileName(file.name)}</p>
    </div>
  );
};

export default ImageCard;
