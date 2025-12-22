import { createSlice, type Draft, type PayloadAction } from "@reduxjs/toolkit";
type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};

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
export type compressionType = "recommended" | "less" | "extreme";
export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  errorMessage: string;
  errorCode: string | null;
  showDownloadBtn: boolean;
  showOptions: boolean;
  nav_height: number;
  fileName: string;
  limitationMsg: string;
  rotations: { k: string; r: number }[];
  passwords: { k: string; p: string }[];
  subscriptionStatus: boolean | null;
  originalFileSize: number;
  compressedFileSize: number;
  isAdBlocked: boolean;
  imageToPDFSettings: ImageToPDFSettings
}

export type supportedImageTypes = 'JPG' |
  'PNG' |
  'BMP' |
  'TIFF' |
  'GIF' |
  'SVG' |
  'WebP' |
  'HEIF';

const initialState: ToolState = {
  showTool: true,
  errorMessage: "",
  isSubmitted: false,
  errorCode: null,
  showDownloadBtn: false,
  showOptions: false,
  nav_height: 0,
  fileName: "",
  limitationMsg: "",
  rotations: [],
  passwords: [],
  subscriptionStatus: null,
  compressedFileSize: 0,
  originalFileSize: 0,
  isAdBlocked: false,
  imageToPDFSettings: {
    pageOrientation: "portrait",
    pageSize: "a4paper",
    margins: "small",
    mergeAll: true,
  }
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
