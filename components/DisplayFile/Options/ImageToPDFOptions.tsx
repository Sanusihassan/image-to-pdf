import { useDispatch, useSelector } from "react-redux";
import Select, { type StylesConfig } from "react-select";
import {
  setField,
  type ImageToPDFSettings,
  type pageSizeType,
  type ToolState,
} from "../../../src/store";
import type { Paths } from "../../../src/content";

// ============ TYPES ============
type ToolType =
  | "jpg-to-pdf"
  | "png-to-pdf"
  | "gif-to-pdf"
  | "tiff-to-pdf"
  | "bmp-to-pdf"
  | "webp-to-pdf"
  | "heif-heic-to-pdf"
  | "svg-to-pdf"
  | "image-to-pdf";

interface PageSizeOption {
  value: pageSizeType;
  label: string;
}

interface ImageToPDFOptionsProps {
  tool: Paths;
  content: any; // You can replace with your content type
}

// ============ CONSTANTS ============
const toolColors: Record<ToolType, string> = {
  "jpg-to-pdf": "#f1c40f",
  "png-to-pdf": "#3498db",
  "gif-to-pdf": "#636e72",
  "tiff-to-pdf": "#e45453",
  "bmp-to-pdf": "#573b26",
  "webp-to-pdf": "#6fc21f",
  "heif-heic-to-pdf": "#c376b8",
  "svg-to-pdf": "#ffb338",
  "image-to-pdf": "#273c75",
};

const PAGE_SIZES: PageSizeOption[] = [
  { value: "a0paper", label: "A0 (841 × 1189 mm)" },
  { value: "a1paper", label: "A1 (594 × 841 mm)" },
  { value: "a2paper", label: "A2 (420 × 594 mm)" },
  { value: "a3paper", label: "A3 (297 × 420 mm)" },
  { value: "a4paper", label: "A4 (210 × 297 mm)" },
  { value: "a5paper", label: "A5 (148 × 210 mm)" },
  { value: "a6paper", label: "A6 (105 × 148 mm)" },
  { value: "b0paper", label: "B0 (1000 × 1414 mm)" },
  { value: "b1paper", label: "B1 (707 × 1000 mm)" },
  { value: "b2paper", label: "B2 (500 × 707 mm)" },
  { value: "b3paper", label: "B3 (353 × 500 mm)" },
  { value: "b4paper", label: "B4 (250 × 353 mm)" },
  { value: "b5paper", label: "B5 (176 × 250 mm)" },
  { value: "letterpaper", label: "Letter (216 × 279 mm)" },
  { value: "legalpaper", label: "Legal (216 × 356 mm)" },
  { value: "tabloidpaper", label: "Tabloid (279 × 432 mm)" },
];

// ============ COMPONENT ============
export const ImageToPDFOptions = ({
  tool,
  content,
}: ImageToPDFOptionsProps) => {
  const dispatch = useDispatch();

  const settings = useSelector(
    (state: { tool: ToolState }) => state.tool.imageToPDFSettings
  );

  const themeColor = toolColors[tool as ToolType] || "#273c75";

  const updateSettings = (updates: Partial<ImageToPDFSettings>) => {
    dispatch(setField({ imageToPDFSettings: { ...settings, ...updates } }));
  };

  // Custom styles for react-select
  const selectStyles: StylesConfig<PageSizeOption, false> = {
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

  const marginOptions = [
    { value: "none", label: content.margins_none },
    { value: "small", label: content.margins_small },
    { value: "medium", label: content.margins_medium },
    { value: "large", label: content.margins_large },
  ] as const;

  if (!settings) return null;

  const selectedPageSize = PAGE_SIZES.find(
    (s) => s.value === settings.pageSize
  );

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Page Orientation */}
      <section className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          {content.page_orientation}
        </h3>
        <div className="flex gap-3">
          {(["portrait", "landscape"] as const).map((orientation) => (
            <button
              key={orientation}
              type="button"
              onClick={() => updateSettings({ pageOrientation: orientation })}
              className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                settings.pageOrientation === orientation
                  ? "shadow-sm"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              style={{
                borderColor:
                  settings.pageOrientation === orientation
                    ? themeColor
                    : undefined,
                backgroundColor:
                  settings.pageOrientation === orientation
                    ? `${themeColor}10`
                    : undefined,
              }}
            >
              <div
                className={`${
                  orientation === "portrait" ? "w-8 h-6" : "w-6 h-8"
                } border-2 rounded-sm`}
                style={{
                  borderColor:
                    settings.pageOrientation === orientation
                      ? themeColor
                      : "#9ca3af",
                }}
              />
              <span
                className={`text-sm font-medium ${
                  settings.pageOrientation === orientation
                    ? ""
                    : "text-gray-600"
                }`}
                style={{
                  color:
                    settings.pageOrientation === orientation
                      ? themeColor
                      : undefined,
                }}
              >
                {orientation === "portrait"
                  ? content.portrait
                  : content.landscape}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Page Size */}
      <section className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          {content.page_size}
        </h3>
        <Select<PageSizeOption>
          options={PAGE_SIZES}
          value={selectedPageSize}
          onChange={(option) => {
            if (option) {
              updateSettings({ pageSize: option.value });
            }
          }}
          styles={selectStyles}
          isSearchable={false}
          className="custom-select"
        />
      </section>

      {/* Margins */}
      <section className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          {content.margins}
        </h3>
        <div className="flex gap-2">
          {marginOptions.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() =>
                updateSettings({
                  margins: value as ImageToPDFSettings["margins"],
                })
              }
              className={`flex-1 py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all ${
                settings.margins === value
                  ? ""
                  : "border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
              style={{
                borderColor:
                  settings.margins === value ? themeColor : undefined,
                color: settings.margins === value ? themeColor : undefined,
                backgroundColor:
                  settings.margins === value ? `${themeColor}10` : undefined,
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Merge Checkbox */}
      <section>
        <label
          className="inline-flex items-center gap-3 cursor-pointer group"
          onClick={() => updateSettings({ mergeAll: !settings.mergeAll })}
        >
          <button
            type="button"
            role="checkbox"
            aria-checked={settings.mergeAll}
            onClick={() => updateSettings({ mergeAll: !settings.mergeAll })}
            className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center shrink-0 ${
              settings.mergeAll
                ? ""
                : "border-gray-300 bg-white group-hover:border-gray-400"
            }`}
            style={{
              backgroundColor: settings.mergeAll ? themeColor : undefined,
              borderColor: settings.mergeAll ? themeColor : undefined,
            }}
          >
            {settings.mergeAll && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
          <span className="text-sm text-gray-700 font-medium">
            {content.merge_all}
          </span>
        </label>
      </section>
    </div>
  );
};
