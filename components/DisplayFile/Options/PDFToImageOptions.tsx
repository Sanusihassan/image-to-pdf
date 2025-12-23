import { useDispatch, useSelector } from "react-redux";
import Select, { type StylesConfig } from "react-select";
import {
  setField,
  type PDFToImageSettings,
  type ToolState,
} from "../../../src/store";
import type { Paths } from "../../../src/content";

// ============ TYPES ============
type ToolType =
  | "pdf-to-jpg"
  | "pdf-to-png"
  | "pdf-to-gif"
  | "pdf-to-tiff"
  | "pdf-to-bmp"
  | "pdf-to-webp"
  | "pdf-to-svg"
  | "pdf-to-heif-heic"
  | "pdf-to-image";

interface QualityOption {
  value: number;
  label: string;
}

interface PDFToImageOptionsProps {
  tool: Paths;
  content: any; // Replace with your content type
  pageCount?: number; // Number of pages in the uploaded PDF
}

// ============ CONSTANTS ============
const toolColors: Record<ToolType, string> = {
  "pdf-to-jpg": "#f1c40f",
  "pdf-to-png": "#3498db",
  "pdf-to-gif": "#636e72",
  "pdf-to-tiff": "#e45453",
  "pdf-to-bmp": "#573b26",
  "pdf-to-webp": "#6fc21f",
  "pdf-to-svg": "#ffb338",
  "pdf-to-heif-heic": "#c376b8",
  "pdf-to-image": "#273c75",
};

// ============ COMPONENT ============
export const PDFToImageOptions = ({
  tool,
  content,
  pageCount,
}: PDFToImageOptionsProps) => {
  const dispatch = useDispatch();

  const settings = useSelector(
    (state: { tool: ToolState }) => state.tool.pdfToImageSettings
  );

  const themeColor = toolColors[tool as ToolType] || "#273c75";

  const updateSettings = (updates: Partial<PDFToImageSettings>) => {
    dispatch(setField({ pdfToImageSettings: { ...settings, ...updates } }));
  };

  // Custom styles for react-select
  const selectStyles: StylesConfig<QualityOption, false> = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? themeColor : "#e5e7eb",
      boxShadow: state.isFocused ? `0 0 0 1px ${themeColor}` : "none",
      "&:hover": {
        borderColor: themeColor,
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? themeColor
        : state.isFocused
          ? `${themeColor}15`
          : "white",
      color: state.isSelected ? "white" : "#374151",
      "&:active": {
        backgroundColor: `${themeColor}30`,
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "#374151",
    }),
  };

  const qualityOptions: QualityOption[] = [
    { value: 72, label: content.quality_low },
    { value: 150, label: content.quality_medium },
    { value: 300, label: content.quality_high },
    { value: 600, label: content.quality_very_high },
  ];

  if (!settings) return null;

  const selectedQuality = qualityOptions.find(
    (q) => q.value === settings.quality
  );

  // Get output format from tool name (e.g., "pdf-to-jpg" -> "JPG")
  const outputFormat = tool
    .replace("pdf-to-", "")
    .toUpperCase()
    .replace("HEIF-HEIC", "HEIF");

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Conversion Mode */}
      <section className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          {content.conversion_mode}
        </h3>
        <div className="flex flex-col gap-3">
          {/* Page to Image Option */}
          <button
            type="button"
            onClick={() => updateSettings({ mode: "page" })}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              settings.mode === "page"
                ? "shadow-sm"
                : "border-gray-200 hover:border-gray-300"
            }`}
            style={{
              borderColor: settings.mode === "page" ? themeColor : undefined,
              backgroundColor:
                settings.mode === "page" ? `${themeColor}08` : undefined,
            }}
          >
            <div className="flex items-start gap-3">
              {/* Radio indicator */}
              <div
                className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                  settings.mode === "page" ? "" : "border-gray-300"
                }`}
                style={{
                  borderColor:
                    settings.mode === "page" ? themeColor : undefined,
                }}
              >
                {settings.mode === "page" && (
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: themeColor }}
                  />
                )}
              </div>

              <div className="flex-1">
                <span
                  className={`font-medium block ${
                    settings.mode === "page" ? "" : "text-gray-700"
                  }`}
                  style={{
                    color: settings.mode === "page" ? themeColor : undefined,
                  }}
                >
                  {content.mode_page_title.replace("{format}", outputFormat)}
                </span>
                <span className="text-sm text-gray-500 mt-1 block">
                  {pageCount
                    ? content.mode_page_description
                        .replace("{format}", outputFormat)
                        .replace("{count}", pageCount.toString())
                    : content.mode_page_description_generic.replace(
                        "{format}",
                        outputFormat
                      )}
                </span>
              </div>

              {/* Icon */}
              <div className="shrink-0">
                <svg
                  className={`w-8 h-8 ${settings.mode === "page" ? "" : "text-gray-400"}`}
                  style={{
                    color: settings.mode === "page" ? themeColor : undefined,
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
            </div>
          </button>

          {/* Extract Images Option */}
          <button
            type="button"
            onClick={() => updateSettings({ mode: "extract" })}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              settings.mode === "extract"
                ? "shadow-sm"
                : "border-gray-200 hover:border-gray-300"
            }`}
            style={{
              borderColor: settings.mode === "extract" ? themeColor : undefined,
              backgroundColor:
                settings.mode === "extract" ? `${themeColor}08` : undefined,
            }}
          >
            <div className="flex items-start gap-3">
              {/* Radio indicator */}
              <div
                className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                  settings.mode === "extract" ? "" : "border-gray-300"
                }`}
                style={{
                  borderColor:
                    settings.mode === "extract" ? themeColor : undefined,
                }}
              >
                {settings.mode === "extract" && (
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: themeColor }}
                  />
                )}
              </div>

              <div className="flex-1">
                <span
                  className={`font-medium block ${
                    settings.mode === "extract" ? "" : "text-gray-700"
                  }`}
                  style={{
                    color: settings.mode === "extract" ? themeColor : undefined,
                  }}
                >
                  {content.mode_extract_title}
                </span>
                <span className="text-sm text-gray-500 mt-1 block">
                  {content.mode_extract_description.replace(
                    "{format}",
                    outputFormat
                  )}
                </span>
              </div>

              {/* Icon */}
              <div className="shrink-0">
                <svg
                  className={`w-8 h-8 ${settings.mode === "extract" ? "" : "text-gray-400"}`}
                  style={{
                    color: settings.mode === "extract" ? themeColor : undefined,
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Image Quality - Only show for page mode */}
      {settings.mode === "page" && (
        <section>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            {content.image_quality}
          </h3>
          <Select<QualityOption>
            options={qualityOptions}
            value={selectedQuality}
            onChange={(option) => {
              if (option) {
                updateSettings({ quality: option.value });
              }
            }}
            styles={selectStyles}
            isSearchable={false}
            classNamePrefix="react-select"
            className="custom-select"
          />
          <p className="text-xs text-gray-500 mt-2">
            {settings.quality <= 72 && content.quality_low_hint}
            {settings.quality === 150 && content.quality_medium_hint}
            {settings.quality === 300 && content.quality_high_hint}
            {settings.quality >= 600 && content.quality_very_high_hint}
          </p>
        </section>
      )}
    </div>
  );
};
