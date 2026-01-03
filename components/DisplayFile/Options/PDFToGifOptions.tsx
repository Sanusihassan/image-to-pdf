import { useDispatch, useSelector } from "react-redux";
import Select, { type StylesConfig } from "react-select";
import {
  setField,
  type PDFToGifSettings,
  type ToolState,
} from "../../../src/store";

// ============ TYPES ============
type FitMode = "max" | "crop" | "scale";

interface FitOption {
  value: FitMode;
  label: string;
  description: string;
}

interface PDFToGifOptionsProps {
  content: {
    // Dimensions
    dimensions: string;
    width: string;
    height: string;
    width_placeholder: string;
    height_placeholder: string;
    // Fit mode
    fit_mode: string;
    fit_max: string;
    fit_max_description: string;
    fit_crop: string;
    fit_crop_description: string;
    fit_scale: string;
    fit_scale_description: string;
    // Pages
    pages: string;
    pages_placeholder: string;
    pages_hint: string;
    // Strip
    strip_metadata: string;
  };
}

// ============ CONSTANTS ============
const THEME_COLOR = "#636e72"; // GIF tool color

// ============ COMPONENT ============
export const PDFToGifOptions = ({ content }: PDFToGifOptionsProps) => {
  const dispatch = useDispatch();

  const settings = useSelector(
    (state: { tool: ToolState }) => state.tool.pdfToGifSettings
  );

  const updateSettings = (updates: Partial<PDFToGifSettings>) => {
    dispatch(setField({ pdfToGifSettings: { ...settings, ...updates } }));
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
      borderColor: state.isFocused ? THEME_COLOR : "#e5e7eb",
      boxShadow: state.isFocused ? `0 0 0 1px ${THEME_COLOR}` : "none",
      "&:hover": {
        borderColor: THEME_COLOR,
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? THEME_COLOR
        : state.isFocused
          ? `${THEME_COLOR}15`
          : "white",
      color: state.isSelected ? "white" : "#374151",
      "&:active": {
        backgroundColor: `${THEME_COLOR}30`,
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "#374151",
    }),
  };

  if (!settings) return null;

  const selectedFit = fitOptions.find((f) => f.value === settings.fit);
  const currentFitDescription =
    fitOptions.find((f) => f.value === settings.fit)?.description || "";

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Dimensions */}
      <section className="mb-6">
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
              style={
                {
                  // Dynamic focus styles via inline for theme color
                }
              }
              onFocus={(e) => {
                e.target.style.borderColor = THEME_COLOR;
                e.target.style.boxShadow = `0 0 0 1px ${THEME_COLOR}`;
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
                e.target.style.borderColor = THEME_COLOR;
                e.target.style.boxShadow = `0 0 0 1px ${THEME_COLOR}`;
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
      <section className="mb-6">
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

      {/* Page Range */}
      <section className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          {content.pages}
        </h3>
        <input
          type="text"
          value={settings.pages ?? ""}
          onChange={(e) => updateSettings({ pages: e.target.value })}
          placeholder={content.pages_placeholder}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm transition-all focus:outline-none"
          onFocus={(e) => {
            e.target.style.borderColor = THEME_COLOR;
            e.target.style.boxShadow = `0 0 0 1px ${THEME_COLOR}`;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#e5e7eb";
            e.target.style.boxShadow = "none";
          }}
        />
        <p className="text-xs text-gray-500 mt-2">{content.pages_hint}</p>
      </section>

      {/* Strip Metadata Checkbox */}
      <section>
        <label className="inline-flex items-center gap-3 cursor-pointer group">
          <button
            type="button"
            role="checkbox"
            aria-checked={settings.strip}
            onClick={() => updateSettings({ strip: !settings.strip })}
            className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center shrink-0 ${
              settings.strip
                ? ""
                : "border-gray-300 bg-white group-hover:border-gray-400"
            }`}
            style={{
              backgroundColor: settings.strip ? THEME_COLOR : undefined,
              borderColor: settings.strip ? THEME_COLOR : undefined,
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
