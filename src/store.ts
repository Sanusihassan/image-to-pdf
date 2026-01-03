import { createSlice, type Draft, type PayloadAction } from "@reduxjs/toolkit";
type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};
export type FitMode = "max" | "crop" | "scale";
export interface PDFToGifSettings {
  width?: number;
  height?: number;
  fit: FitMode;
  strip: boolean;
  pages?: string; // e.g., "1-3" or "1,2,3"
}

export type pageSizeType = "a0paper" |
  "a1paper" |
  "a2paper" |
  "a3paper" |
  "a4paper" |
  "a5paper" |
  "a6paper" |
  "b0paper" |
  "b1paper" |
  "b2paper" |
  "b3paper" |
  "b4paper" |
  "b5paper" |
  "letterpaper" |
  "legalpaper" |
  "tabloidpaper";
export interface ImageToPDFSettings {
  pageOrientation: "portrait" | "landscape";
  pageSize: pageSizeType;
  margins: "none" | "small" | "medium" | "large";
  mergeAll: boolean;
}

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
  pdfToGifSettings: PDFToGifSettings; // <-- Add this
  pdfToGifPagesRecord: GifPagesRecord; // <-- Add this for multi-file support
  selectedImageFormat: supportedImageTypes | null
}

// Add to your store types
export interface PDFToImageSettings {
  mode: "page" | "extract";
  quality: number; // DPI: 72, 150, 300, 600
}

export type supportedImageTypes = 'JPG' |
  'PNG' |
  'BMP' |
  'TIFF' |
  'GIF' |
  'SVG' |
  'WebP' |
  'HEIF';

export interface GifPage {
  pageNumber: number;
  imageUrl: string;
  enabled: boolean;
  delay: number; // in seconds
}
export type GifPagesRecord = Record<string, GifPage[]>;

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
  pdfToGifSettings: {
    width: null,
    height: null,
    fit: "max",
    strip: false,
    pages: null,
  },
  pdfToGifPagesRecord: {}
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
        // Cast the key to keyof ToolState to ensure it's a valid key
        const typedKey = key as k;
        const value = action.payload[typedKey];
        if (value !== undefined) {
          // @ts-ignore
          state[typedKey] = value;
        }
      });
    },
  },
});

export const { resetErrorMessage, setField } = toolSlice.actions;

export default toolSlice.reducer;
