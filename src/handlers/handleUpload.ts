// handleUpload.ts
import axios from "axios";
import { downloadConvertedFile } from "../downloadFile";
import type { errors as _, OptionsType } from "../content";
import { type RefObject } from "react";
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
import { parseApiError } from "../parseApiError";

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

// ============ MAIN FUNCTION ============
export const handleUpload = async (
  e: React.FormEvent<HTMLFormElement>,
  downloadBtn: RefObject<HTMLAnchorElement | null>,
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
  errors: _
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files) return;

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

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  formData.append("rotations", JSON.stringify(state.rotations));
  formData.append("passwords", JSON.stringify(state.passwords));

  // Send sanitized options (without imageUrl for pdf-to-gif)
  formData.append("options", JSON.stringify(sanitizedOptions));
  formData.append("selectedImageFormat", state.selectedImageFormat || "JPG");


  let url: string = "";
  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `http://localhost:8000/api/${state.path}`;
  } else {
    url = `/api/${state.path}`;
  }

  if (state.errorMessage) {
    return;
  }

  const originalFileName =
    state.fileName || files[0]?.name?.split(".").slice(0, -1).join(".");

  try {
    const response = await axios.post(url, formData, {
      responseType: "blob",
    });

    filesOnSubmit = fileNames;

    // downloadConvertedFile now handles MIME types and extensions automatically
    downloadConvertedFile(response, state.path, originalFileName, downloadBtn);

    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
  } catch (error: any) {
    if (error?.response?.data) {
      const blob = error.response.data;
      const text = await blob.text();
      try {
        const errorData = JSON.parse(text);
        if (errorData?.code === "PASSWORD_REQUIRED") {
          dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
        } else {
          dispatch(
            setField({
              errorMessage: parseApiError(errorData, errors),
            })
          );
        }
      } catch {
        dispatch(
          setField({
            errorMessage: errors.UNKNOWN_ERROR?.message || "Unknown error",
          })
        );
      }
    } else {
      dispatch(
        setField({
          errorMessage: errors.ERR_NETWORK?.message || "Network error",
        })
      );
    }
  }
};

export default handleUpload;