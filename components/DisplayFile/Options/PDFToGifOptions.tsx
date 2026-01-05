import { useDispatch, useSelector } from "react-redux";
import Select, { type StylesConfig } from "react-select";
import {
  updatePdfToGifSettings,
  type PDFToGifFileSettings,
  type ToolState,
  type FitMode,
} from "../../../src/store";
import type { edit_page } from "../../../src/content";

// ============ TYPES ============
interface FitOption {
  value: FitMode;
  label: string;
  description: string;
}

interface PDFToGifOptionsProps {
  content: edit_page["pdfToGifContent"];
  themeColor?: string;
}

// ============ CONSTANTS ============
const THEME_COLOR_DEFAULT = "#636e72";

// ============ COMPONENT ============
export const PDFToGifOptions = ({
  content,
  themeColor = THEME_COLOR_DEFAULT,
}: PDFToGifOptionsProps) => {
  const dispatch = useDispatch();

  // Get the selected file key from global state
  const fileKey = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedPdfToGifFileKey
  );

  // Get settings for the selected file
  const fileData = useSelector((state: { tool: ToolState }) =>
    fileKey ? state.tool.pdfToGifRecord[fileKey] : null
  );

  const settings = fileData?.settings;

  const updateSettings = (updates: Partial<PDFToGifFileSettings>) => {
    if (!fileKey) return;
    dispatch(updatePdfToGifSettings({ fileKey, settings: updates }));
  };

  // Fit options with labels from content
  const fitOptions: FitOption[] = [
    {
      value: "max",
      label: content.fit_max,
      description: content.fit_max_description,
    },
    {
      value: "crop",
      label: content.fit_crop,
      description: content.fit_crop_description,
    },
    {
      value: "scale",
      label: content.fit_scale,
      description: content.fit_scale_description,
    },
  ];

  // Custom styles for react-select
  const selectStyles: StylesConfig<FitOption, false> = {
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

  // Don't render if no file is selected or no settings
  if (!fileKey || !settings) return null;

  const selectedFit = fitOptions.find((f) => f.value === settings.fit);
  const currentFitDescription =
    fitOptions.find((f) => f.value === settings.fit)?.description || "";

  return (
    <div className="space-y-4 px-2">
      {/* Dimensions */}
      <section>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          {content.dimensions}
        </h3>
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-1 block">
              {content.width}
            </label>
            <input
              type="number"
              value={settings.width ?? ""}
              onChange={(e) => {
                const val = e.target.value;
                updateSettings({
                  width: val === "" ? undefined : parseInt(val, 10),
                });
              }}
              placeholder={content.width_placeholder}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm transition-all focus:outline-none"
              onFocus={(e) => {
                e.target.style.borderColor = themeColor;
                e.target.style.boxShadow = `0 0 0 1px ${themeColor}`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
                e.target.style.boxShadow = "none";
              }}
              min={1}
            />
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-1 block">
              {content.height}
            </label>
            <input
              type="number"
              value={settings.height ?? ""}
              onChange={(e) => {
                const val = e.target.value;
                updateSettings({
                  height: val === "" ? undefined : parseInt(val, 10),
                });
              }}
              placeholder={content.height_placeholder}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm transition-all focus:outline-none"
              onFocus={(e) => {
                e.target.style.borderColor = themeColor;
                e.target.style.boxShadow = `0 0 0 1px ${themeColor}`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
                e.target.style.boxShadow = "none";
              }}
              min={1}
            />
          </div>
        </div>
      </section>

      {/* Fit Mode */}
      <section>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          {content.fit_mode}
        </h3>
        <Select<FitOption>
          options={fitOptions}
          value={selectedFit}
          onChange={(option) => {
            if (option) {
              updateSettings({ fit: option.value });
            }
          }}
          styles={selectStyles}
          isSearchable={false}
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value}
        />
        {currentFitDescription && (
          <p className="text-xs text-gray-500 mt-2">{currentFitDescription}</p>
        )}
      </section>

      {/* Strip Metadata Checkbox */}
      <section>
        <label
          className="inline-flex items-center gap-3 cursor-pointer group"
          htmlFor="strip-metadata"
          onClick={() => updateSettings({ strip: !settings.strip })}
        >
          <button
            type="button"
            role="checkbox"
            aria-checked={settings.strip}
            id="strip-metadata"
            onClick={() => updateSettings({ strip: !settings.strip })}
            className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center shrink-0 ${
              settings.strip
                ? ""
                : "border-gray-300 bg-white group-hover:border-gray-400"
            }`}
            style={{
              backgroundColor: settings.strip ? themeColor : undefined,
              borderColor: settings.strip ? themeColor : undefined,
            }}
          >
            {settings.strip && (
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
            {content.strip_metadata}
          </span>
        </label>
      </section>
    </div>
  );
};

export default PDFToGifOptions;
