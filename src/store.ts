import { createSlice, type Draft, type PayloadAction } from "@reduxjs/toolkit";

type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};

// ============ PDF TO GIF TYPES (MERGED STRUCTURE) ============
export type FitMode = "max" | "crop" | "scale";

/** Per-file GIF settings */
export interface PDFToGifFileSettings {
  width?: number;
  height?: number;
  fit: FitMode;
  strip: boolean;
}

/** Individual page in a GIF - renamed pageNumber to page for brevity */
export interface GifPage {
  page: number; // Changed from pageNumber
  imageUrl: string;
  enabled: boolean;
  delay: number; // in seconds
}

/** Combined file data: settings + pages */
export interface PDFToGifFileData {
  settings: PDFToGifFileSettings;
  pages: GifPage[];
}

/** Record mapping file keys to their complete GIF data */
export type PDFToGifRecord = Record<string, PDFToGifFileData>;

// Default settings for new files
export const DEFAULT_GIF_SETTINGS: PDFToGifFileSettings = {
  width: undefined,
  height: undefined,
  fit: "max",
  strip: false,
};

export const DEFAULT_PAGE_DELAY = 0.5;

// ============ OTHER TYPES ============
export type pageSizeType =
  | "a0paper"
  | "a1paper"
  | "a2paper"
  | "a3paper"
  | "a4paper"
  | "a5paper"
  | "a6paper"
  | "b0paper"
  | "b1paper"
  | "b2paper"
  | "b3paper"
  | "b4paper"
  | "b5paper"
  | "letterpaper"
  | "legalpaper"
  | "tabloidpaper";

export interface ImageToPDFSettings {
  pageOrientation: "portrait" | "landscape";
  pageSize: pageSizeType;
  margins: "none" | "small" | "medium" | "large";
  mergeAll: boolean;
}

export interface PDFToImageSettings {
  mode: "page" | "extract";
  quality: number; // DPI: 72, 150, 300, 600
}

export type supportedImageTypes =
  | "JPG"
  | "PNG"
  | "BMP"
  | "TIFF"
  | "GIF"
  | "SVG"
  | "WebP"
  | "HEIF";

type k = keyof WritableDraft<ToolState>;

export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  errorMessage: string;
  errorCode: string | null;
  showDownloadBtn: boolean;
  showOptions: boolean;
  fileName: string;
  limitationMsg: string;
  rotations: { k: string; r: number }[];
  passwords: { k: string; p: string }[];
  subscriptionStatus: boolean | null;
  isAdBlocked: boolean;
  imageToPDFSettings: ImageToPDFSettings;
  pdfToImageSettings: PDFToImageSettings;
  pdfToGifRecord: PDFToGifRecord; // <-- Merged structure
  selectedPdfToGifFileKey: string | null; // <-- Track selected file for options sidebar
  selectedImageFormat: supportedImageTypes | null;
}

const initialState: ToolState = {
  showTool: true,
  errorMessage: "",
  isSubmitted: false,
  errorCode: null,
  showDownloadBtn: false,
  showOptions: false,
  fileName: "",
  limitationMsg: "",
  rotations: [],
  passwords: [],
  subscriptionStatus: null,
  isAdBlocked: false,
  selectedImageFormat: null,
  imageToPDFSettings: {
    pageOrientation: "portrait",
    pageSize: "a4paper",
    margins: "small",
    mergeAll: true,
  },
  pdfToImageSettings: {
    mode: "page",
    quality: 150,
  },
  pdfToGifRecord: {}, // <-- Single merged record
  selectedPdfToGifFileKey: null, // <-- No file selected initially
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setField(state, action: PayloadAction<Partial<ToolState>>) {
      Object.keys(action.payload).forEach((key) => {
        const typedKey = key as k;
        const value = action.payload[typedKey];
        if (value !== undefined) {
          // @ts-ignore
          state[typedKey] = value;
        }
      });
    },

    // ============ PDF TO GIF SPECIFIC ACTIONS ============

    /** Initialize or update a file's GIF data */
    setPdfToGifFileData(
      state,
      action: PayloadAction<{ fileKey: string; data: PDFToGifFileData }>
    ) {
      const { fileKey, data } = action.payload;
      state.pdfToGifRecord[fileKey] = data;
    },

    /** Update only the settings for a specific file */
    updatePdfToGifSettings(
      state,
      action: PayloadAction<{
        fileKey: string;
        settings: Partial<PDFToGifFileSettings>;
      }>
    ) {
      const { fileKey, settings } = action.payload;
      if (state.pdfToGifRecord[fileKey]) {
        state.pdfToGifRecord[fileKey].settings = {
          ...state.pdfToGifRecord[fileKey].settings,
          ...settings,
        };
      }
    },

    /** Update only the pages for a specific file */
    updatePdfToGifPages(
      state,
      action: PayloadAction<{ fileKey: string; pages: GifPage[] }>
    ) {
      const { fileKey, pages } = action.payload;
      if (state.pdfToGifRecord[fileKey]) {
        state.pdfToGifRecord[fileKey].pages = pages;
      }
    },

    /** Remove a file from the record */
    removePdfToGifFile(state, action: PayloadAction<string>) {
      delete state.pdfToGifRecord[action.payload];
    },

    /** Clean up files that no longer exist */
    cleanupPdfToGifRecord(state, action: PayloadAction<string[]>) {
      const currentKeys = new Set(action.payload);
      Object.keys(state.pdfToGifRecord).forEach((key) => {
        if (!currentKeys.has(key)) {
          delete state.pdfToGifRecord[key];
        }
      });
      // Also clear selected key if it no longer exists
      if (
        state.selectedPdfToGifFileKey &&
        !currentKeys.has(state.selectedPdfToGifFileKey)
      ) {
        state.selectedPdfToGifFileKey = null;
      }
    },

    /** Set the currently selected file for options sidebar */
    setSelectedPdfToGifFileKey(state, action: PayloadAction<string | null>) {
      state.selectedPdfToGifFileKey = action.payload;
    },
  },
});

export const {
  resetErrorMessage,
  setField,
  setPdfToGifFileData,
  updatePdfToGifSettings,
  updatePdfToGifPages,
  removePdfToGifFile,
  cleanupPdfToGifRecord,
  setSelectedPdfToGifFileKey,
} = toolSlice.actions;

export default toolSlice.reducer;

// ============ HELPER FUNCTIONS ============

/**
 * Creates initial GIF data for a new file
 */
export function createInitialGifData(pages: GifPage[]): PDFToGifFileData {
  return {
    settings: { ...DEFAULT_GIF_SETTINGS },
    pages,
  };
}

/**
 * Builds the "pages" string for API from enabled pages
 * e.g., pages [1, 3, 5] enabled -> "1,3,5"
 * Returns undefined if all pages are enabled (meaning "all pages")
 */
export function buildPagesString(pages: GifPage[]): string | undefined {
  const enabledPages = pages.filter((p) => p.enabled).map((p) => p.page);
  const allEnabled = pages.every((p) => p.enabled);

  if (allEnabled || enabledPages.length === 0) {
    return undefined; // All pages or none - let server handle default
  }

  return enabledPages.join(",");
}

/**
 * Prepares a single file's data for API transmission
 * Strips imageUrl and adds synced pages string
 */
export interface GifFileDataForAPI {
  settings: PDFToGifFileSettings & { pages?: string };
  pages: Array<{ page: number; enabled: boolean; delay: number }>;
}

export function prepareGifFileDataForAPI(
  data: PDFToGifFileData
): GifFileDataForAPI {
  const pagesString = buildPagesString(data.pages);

  return {
    settings: {
      ...data.settings,
      pages: pagesString, // Synced pages string
    },
    pages: data.pages.map(({ page, enabled, delay }) => ({
      page,
      enabled,
      delay,
    })),
  };
}

/**
 * Prepares entire record for API transmission
 */
export type PDFToGifRecordForAPI = Record<string, GifFileDataForAPI>;

export function preparePdfToGifRecordForAPI(
  record: PDFToGifRecord
): PDFToGifRecordForAPI {
  const result: PDFToGifRecordForAPI = {};

  for (const [fileKey, data] of Object.entries(record)) {
    result[fileKey] = prepareGifFileDataForAPI(data);
  }

  return result;
}