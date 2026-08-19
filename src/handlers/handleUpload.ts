// ============================================================================
// REFACTORED handleUpload.ts (image-tools) - Using Blob Pattern
// ============================================================================

import axios from "axios";
import type { errors as _, OptionsType } from "../content";
import {
  resetErrorMessage,
  setField,
  preparePdfToGifRecordForAPI,
  type PDFToGifRecord,
  type PDFToGifRecordForAPI,
  type ImageToPDFSettings,
  type PDFToImageSettings,
  type supportedImageTypes,
} from "../store";
import type { Action, Dispatch } from "@reduxjs/toolkit/react";
import { parseApiError, isPasswordRequired } from "../parseApiError";

let filesOnSubmit: string[] = [];
let prevState: string | null = null;

// Type for API-ready options
type OptionsForAPI =
  | ImageToPDFSettings
  | PDFToImageSettings
  | { pdfToGifRecord: PDFToGifRecordForAPI };

// ============ HELPERS ============

/**
 * Checks if options are PDF-to-GIF options (new merged structure)
 */
function isPdfToGifOptions(
  options: OptionsType
): options is { pdfToGifRecord: PDFToGifRecord } {
  return (
    options !== null &&
    typeof options === "object" &&
    "pdfToGifRecord" in options
  );
}

/**
 * Prepares options for API transmission.
 * For PDF-to-GIF: strips imageUrl and syncs pages string
 */
function prepareOptionsForAPI(options: OptionsType): OptionsForAPI {
  if (isPdfToGifOptions(options)) {
    return {
      pdfToGifRecord: preparePdfToGifRecordForAPI(options.pdfToGifRecord),
    };
  }
  return options;
}

/**
 * Parse error response blob to JSON
 */
async function parseErrorBlob(
  blob: Blob
): Promise<Record<string, unknown> | null> {
  try {
    const text = await blob.text();
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/**
 * Output extension by tool path. The path always determines the format,
 * so this works even when the response MIME type is unrecognized.
 */
const OUTPUT_EXTENSIONS: Record<string, string> = {
  // → PDF
  "jpg-to-pdf": "pdf",
  "svg-to-pdf": "pdf",
  "png-to-pdf": "pdf",
  "gif-to-pdf": "pdf",
  "tiff-to-pdf": "pdf",
  "bmp-to-pdf": "pdf",
  "webp-to-pdf": "pdf",
  "heif-heic-to-pdf": "pdf",
  "image-to-pdf": "pdf",
  // PDF → image
  "pdf-to-jpg": "jpg",
  "pdf-to-svg": "svg",
  "pdf-to-png": "png",
  "pdf-to-gif": "gif",
  "pdf-to-tiff": "tiff",
  "pdf-to-bmp": "bmp",
  "pdf-to-webp": "webp",
  "pdf-to-heif-heic": "heic",
};

/**
 * Resolves the download filename.
 *
 * A zip response means several outputs (e.g. one image per PDF page),
 * whatever the tool's normal extension is. For the generic pdf-to-image
 * tool the extension comes from the format the user picked.
 */
function resolveDownloadName(
  mimeType: string,
  path: string,
  baseName: string,
  selectedImageFormat?: string | null
): string {
  const cleanMime = mimeType.split(";")[0].trim().toLowerCase();
  const safeBase = baseName?.replace(/\.[a-z0-9]{2,5}$/i, "") || "converted";

  if (cleanMime === "application/zip") {
    return `${safeBase}.zip`;
  }

  const ext =
    (path === "pdf-to-image" && selectedImageFormat) ||
    OUTPUT_EXTENSIONS[path] ||
    cleanMime.split("/")[1] ||
    "";

  return ext ? `${safeBase}.${ext}` : safeBase;
}

// ============ MAIN FUNCTION ============

export const handleUpload = async (
  e: React.FormEvent<HTMLFormElement>,
  // NOTE: downloadBtn parameter REMOVED
  dispatch: Dispatch<Action>,
  state: {
    path: string;
    errorMessage: string;
    fileName: string;
    rotations: {
      k: string;
      r: number;
    }[];
    passwords: {
      k: string;
      p: string;
    }[];
    options: OptionsType;
    selectedImageFormat: supportedImageTypes | null;
  },
  files: File[],
  errors: _,
  setDownloadBlob: (blob: Blob, filename: string) => void
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files || files.length === 0) {
    dispatch(
      setField({
        errorMessage:
          errors.NO_FILES_SELECTED?.message || "No files selected.",
      })
    );
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // Extract file names from the File[] array
  const fileNames = files.map((file) => file.name);

  // Check if every file name in files is present in filesOnSubmit
  const allFilesPresent = fileNames.every((fileName) =>
    filesOnSubmit.includes(fileName)
  );

  // Create state string for comparison (use sanitized options to avoid imageUrl in comparison)
  const sanitizedOptions = prepareOptionsForAPI(state.options);
  const stateForComparison = {
    ...state,
    options: sanitizedOptions,
  };
  const strState = JSON.stringify(stateForComparison);

  // If same files and same state, just show download button (file already converted)
  if (
    allFilesPresent &&
    files.length === filesOnSubmit.length &&
    prevState === strState
  ) {
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    return;
  }

  prevState = strState;

  // ────────────────────────────────────────────────────────────────────────
  // Build FormData
  // ────────────────────────────────────────────────────────────────────────

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  formData.append("rotations", JSON.stringify(state.rotations));
  formData.append("passwords", JSON.stringify(state.passwords));
  formData.append("options", JSON.stringify(sanitizedOptions));

  // Only append selectedImageFormat if it's set
  if (state.selectedImageFormat) {
    formData.append("selectedImageFormat", state.selectedImageFormat);
  }

  // ────────────────────────────────────────────────────────────────────────
  // Build URL
  // ────────────────────────────────────────────────────────────────────────

  const url =
    process.env.NODE_ENV === "development"
      ? `http://localhost:8000/api/${state.path}`
      : `/api/${state.path}`;

  // Early exit if there's already an error
  if (state.errorMessage) {
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // Get original filename for download
  const originalFileName =
    state.fileName ||
    files[0]?.name?.split(".").slice(0, -1).join(".") ||
    "converted";

  // ────────────────────────────────────────────────────────────────────────
  // API Call & Blob Handling
  // ────────────────────────────────────────────────────────────────────────

  try {
    const response = await axios.post(url, formData, {
      responseType: "blob",
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });

    const mimeType =
      response.headers["content-type"] || "application/octet-stream";

    // Extract blob with correct MIME type
    const blob = new Blob([response.data], { type: mimeType });

    const outputFileName = resolveDownloadName(
      mimeType,
      state.path,
      originalFileName,
      state.selectedImageFormat
    );

    // ───────────────────────────────────────────────────────────────────────
    // NEW: Deferred download via setDownloadBlob
    // ───────────────────────────────────────────────────────────────────────
    setDownloadBlob(blob, outputFileName);

    // Success - update tracking and state
    filesOnSubmit = fileNames;
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    dispatch(setField({ isSubmitted: false }));
  } catch (error: unknown) {
    // ───────────────────────────────────────────────────────────────────────
    // Error Handling
    // ───────────────────────────────────────────────────────────────────────

    // Handle axios errors
    if (axios.isAxiosError(error)) {
      if (error.response?.data) {
        // Parse error response blob
        const errorData = await parseErrorBlob(error.response.data);

        if (errorData) {
          // Check for password required (special handling)
          if (isPasswordRequired(errorData)) {
            dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
            dispatch(setField({ isSubmitted: false }));
            return;
          }

          // Parse and display error message
          const errorMessage = parseApiError(errorData, errors);
          dispatch(setField({ errorMessage }));
        } else {
          // Couldn't parse error response
          dispatch(
            setField({
              errorMessage:
                errors.UNKNOWN_ERROR?.message || "An unknown error occurred.",
            })
          );
        }
      } else if (error.code === "ERR_NETWORK" || !error.response) {
        // Network error
        dispatch(
          setField({
            errorMessage:
              errors.ERR_NETWORK?.message ||
              "Network error. Please check your connection.",
          })
        );
      } else {
        // Other axios error
        dispatch(
          setField({
            errorMessage:
              errors.UNKNOWN_ERROR?.message || "An unknown error occurred.",
          })
        );
      }
    } else {
      // Non-axios error
      dispatch(
        setField({
          errorMessage:
            errors.UNKNOWN_ERROR?.message || "An unexpected error occurred.",
        })
      );
    }

    dispatch(setField({ isSubmitted: false }));
  }
};

export default handleUpload;