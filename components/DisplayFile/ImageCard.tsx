import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ActionDiv } from "./ActionDiv";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import {
  getFileDetailsTooltipContent,
  sanitizeKey,
  shortenFileName,
} from "../../src/utils";
import { Loader } from "./Loader";
import type { errors } from "../../src/content";
import type { ToolState, ImageToPDFSettings } from "../../src/store";

interface ImageCardProps {
  index: number;
  provided: any;
  extension: string;
  errors: errors;
  file: File;
  fileDetailProps: [string, string, string];
  loader_text: string;
}

// Margin values in pixels for preview
const MARGIN_VALUES: Record<ImageToPDFSettings["margins"], number> = {
  none: 0,
  small: 6,
  medium: 12,
  large: 20,
};

// Page aspect ratios (height/width for portrait mode)
const PAGE_ASPECT_RATIOS: Record<string, number> = {
  a0paper: 1189 / 841,
  a1paper: 841 / 594,
  a2paper: 594 / 420,
  a3paper: 420 / 297,
  a4paper: 297 / 210,
  a5paper: 210 / 148,
  a6paper: 148 / 105,
  b0paper: 1414 / 1000,
  b1paper: 1000 / 707,
  b2paper: 707 / 500,
  b3paper: 500 / 353,
  b4paper: 353 / 250,
  b5paper: 250 / 176,
  letterpaper: 279 / 216,
  legalpaper: 356 / 216,
  tabloidpaper: 432 / 279,
};

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

  const settings = useSelector(
    (state: { tool: ToolState }) => state.tool.imageToPDFSettings
  );

  const processFile = useCallback(async () => {
    if (extension) {
      try {
        setShowLoader(true);
        const reader = new FileReader();
        reader.onload = function (event: ProgressEvent<FileReader>) {
          const url = (event.target as FileReader).result as string;
          setImageUrl(url);
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
    let isSubscribed = true;
    getFileDetailsTooltipContent(
      file,
      ...fileDetailProps,
      dispatch,
      errors
    ).then((size) => {
      if (isSubscribed) setToolTipSize(size);
    });
    processFile();
    return () => {
      isSubscribed = false;
    };
  }, [file, fileDetailProps, dispatch, errors, processFile]);

  const sanitizedKey = useMemo(
    () => (file.name ? sanitizeKey(file.name.split(".")[0]) : null),
    [file.name]
  );

  const rotation = useSelector((state: { tool: ToolState }) => {
    if (!sanitizedKey) return null;
    return state.tool.rotations?.find((r) => r.k === sanitizedKey) || null;
  });

  // Calculate page preview styles based on settings
  const pagePreview = useMemo(() => {
    if (!settings) {
      return {
        aspectRatio: 297 / 210, // Default A4 portrait
        margin: 6,
        isLandscape: false,
        sizeLabel: "A4",
      };
    }

    const baseRatio =
      PAGE_ASPECT_RATIOS[settings.pageSize] || PAGE_ASPECT_RATIOS.a4paper;
    const isLandscape = settings.pageOrientation === "landscape";

    // For landscape, invert the aspect ratio
    const aspectRatio = isLandscape ? 1 / baseRatio : baseRatio;
    const margin = MARGIN_VALUES[settings.margins];
    const sizeLabel = settings.pageSize.replace("paper", "").toUpperCase();

    return { aspectRatio, margin, isLandscape, sizeLabel };
  }, [settings]);

  const imageTransform = useMemo(() => {
    if (!rotation) return undefined;
    const scale = rotation.r === 90 || rotation.r === 270 ? 0.75 : 1;
    return `rotate(${rotation.r}deg) scale(${scale})`;
  }, [rotation]);

  return (
    <div
      className="drag-element-img"
      data-tooltip-id={`image_tooltip_${index}`}
      data-tooltip-html={tooltipSize}
      data-tooltip-place="top"
      {...provided.dragHandleProps}
    >
      <ActionDiv extension={extension} fileName={file.name} />

      {showLoader && <Loader loader_text={loader_text} />}

      <bdi>
        <Tooltip id={`image_tooltip_${index}`} />
      </bdi>

      {/* Page Preview Wrapper - maintains card flow in grid */}
      <div className="page-preview-wrapper">
        {/* Page Preview - shows orientation & aspect ratio */}
        <div
          className="page-preview"
          style={{
            aspectRatio: pagePreview.aspectRatio,
            padding: pagePreview.margin,
          }}
        >
          {/* Margin indicator lines */}
          {pagePreview.margin > 0 && (
            <div
              className="margin-indicator"
              style={{
                inset: pagePreview.margin,
              }}
            />
          )}

          {/* Image container */}
          <div className="image-container">
            <img
              className={`preview-image ${showImg ? "loaded" : ""}`}
              src={imageUrl}
              alt={`Selected file ${index}`}
              draggable={false}
              style={{ transform: imageTransform }}
              onError={() => setShowImg(false)}
              onLoad={() => {
                setShowLoader(false);
                setShowImg(true);
              }}
            />
          </div>

          {/* Page fold decoration */}
          <div className="page-fold" />
        </div>
      </div>

      {/* Settings indicator */}
      <div className="settings-indicator">
        <span className="size-label">{pagePreview.sizeLabel}</span>
        <span className="orientation-icon">
          {pagePreview.isLandscape ? "⇔" : "⇕"}
        </span>
      </div>

      <p className="file-name">{shortenFileName(file.name)}</p>
    </div>
  );
};

export default ImageCard;
