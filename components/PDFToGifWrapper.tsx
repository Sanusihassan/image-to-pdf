import { useEffect } from "react";
import Select, { type StylesConfig } from "react-select";
import { useDispatch, useSelector } from "react-redux";
import type { errors, edit_page } from "../src/content";
import { useFileStore } from "../src/file-store";
import {
  type ToolState,
  cleanupPdfToGifRecord,
  setSelectedPdfToGifFileKey,
} from "../src/store";
import { sanitizeKey } from "../src/utils";
import PDFToGifFileCard from "./DisplayFile/PDFToGifFileCard";

// ============ TYPES ============
interface FileOption {
  value: string; // sanitized key
  label: string; // display name
  file: File;
}

interface PDFToGifWrapperProps {
  errors: errors;
  content: edit_page["pdfToGifFileCard"];
  themeColor?: string;
}

// ============ CONSTANTS ============
const THEME_COLOR_DEFAULT = "#636e72";

// ============ COMPONENT ============
export const PDFToGifWrapper = ({
  errors,
  content,
  themeColor = THEME_COLOR_DEFAULT,
}: PDFToGifWrapperProps) => {
  const dispatch = useDispatch();
  const { files } = useFileStore();

  // Get selected file key from global Redux state
  const selectedFileKey = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedPdfToGifFileKey
  );

  // Get the merged GIF record from Redux
  const pdfToGifRecord = useSelector(
    (state: { tool: ToolState }) => state.tool.pdfToGifRecord
  );

  // Build file options for Select
  const fileOptions: FileOption[] = files.map((file) => {
    const key = sanitizeKey(file.name.split(".")[0]);
    return {
      value: key,
      label:
        file.name.length > 40
          ? file.name.slice(0, 20) + "..." + file.name.slice(-17)
          : file.name,
      file,
    };
  });

  // Auto-select first file if none selected or selected file removed
  useEffect(() => {
    if (files.length === 0) {
      dispatch(setSelectedPdfToGifFileKey(null));
      return;
    }

    const currentKeys = files.map((f) => sanitizeKey(f.name.split(".")[0]));

    if (!selectedFileKey || !currentKeys.includes(selectedFileKey)) {
      dispatch(setSelectedPdfToGifFileKey(currentKeys[0]));
    }
  }, [files, selectedFileKey, dispatch]);

  // Clean up removed files from pdfToGifRecord
  useEffect(() => {
    if (!pdfToGifRecord || Object.keys(pdfToGifRecord).length === 0) return;

    const currentKeys = files.map((f) => sanitizeKey(f.name.split(".")[0]));
    dispatch(cleanupPdfToGifRecord(currentKeys));
  }, [files, dispatch, pdfToGifRecord]);

  // Get currently selected file
  const selectedOption = fileOptions.find((o) => o.value === selectedFileKey);
  const selectedFile = selectedOption?.file;

  // Custom styles for react-select
  const selectStyles: StylesConfig<FileOption, false> = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? themeColor : "#e5e7eb",
      boxShadow: state.isFocused ? `0 0 0 1px ${themeColor}` : "none",
      "&:hover": {
        borderColor: themeColor,
      },
      minHeight: "44px",
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
    menu: (base) => ({
      ...base,
      zIndex: 50,
    }),
  };

  // Calculate total enabled pages across all files
  const totalEnabledPages = Object.values(pdfToGifRecord || {}).reduce(
    (sum, fileData) => sum + fileData.pages.filter((p) => p.enabled).length,
    0
  );

  const totalPages = Object.values(pdfToGifRecord || {}).reduce(
    (sum, fileData) => sum + fileData.pages.length,
    0
  );

  if (files.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4">
      {/* File Selector Header */}
      {files.length > 1 && (
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* File Select */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {content.select_file}
              </label>
              <Select<FileOption>
                options={fileOptions}
                value={selectedOption}
                onChange={(option) => {
                  if (option) {
                    dispatch(setSelectedPdfToGifFileKey(option.value));
                  }
                }}
                styles={selectStyles}
                isSearchable={false}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
              />
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div
                className="px-3 py-2 rounded-lg"
                style={{ backgroundColor: `${themeColor}10` }}
              >
                <span className="font-semibold" style={{ color: themeColor }}>
                  {files.length}
                </span>{" "}
                {content.files_count}
              </div>
              <div className="px-3 py-2 bg-gray-100 rounded-lg">
                <span className="font-semibold text-gray-700">
                  {totalEnabledPages}
                </span>{" "}
                / {totalPages} {content.page}
                {totalPages !== 1 ? "s" : ""}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* File Card */}
      {selectedFile && selectedFileKey && (
        <PDFToGifFileCard
          key={selectedFileKey}
          file={selectedFile}
          fileKey={selectedFileKey}
          errors={errors}
          content={content}
          themeColor={themeColor}
        />
      )}
    </div>
  );
};

export default PDFToGifWrapper;
