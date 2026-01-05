import type { ImageToPDFSettings, PDFToGifRecord, PDFToImageSettings } from "./store";

// this is my content.d.ts
export type landing_page = typeof import("./content/content").landing_page;
export type tools = typeof import("./content/content").tools;
export type tool = typeof import("./content/content").tool;
export type footer = typeof import("./content/content").footer;
export type errors = typeof import("./content/content").errors;
export type edit_page = typeof import("./content/content").edit_page;
export type web2pdftool = typeof import("./content/content").web2pdftool;
export type downloadFile = typeof import("./content/content").downloadFile;
export type translate_pdf = typeof import("./content/content").translate_pdf;

export type ContinueIn = typeof import("./content/content").ContinueIn;
export type ChangeTo = typeof import("./content/content").ChangeTo;

export type Paths =
    | "jpg-to-pdf"
    | "svg-to-pdf"
    | "png-to-pdf"
    | "gif-to-pdf"
    | "tiff-to-pdf"
    | "bmp-to-pdf"
    | "webp-to-pdf"
    | "heif-heic-to-pdf"
    | "pdf-to-jpg"
    | "pdf-to-svg"
    | "pdf-to-png"
    | "pdf-to-gif"
    | "pdf-to-tiff"
    | "pdf-to-bmp"
    | "pdf-to-webp"
    | "pdf-to-heif-heic"
    | "image-to-pdf"
    | "pdf-to-image";

export type OptionsType =
    | ImageToPDFSettings
    | PDFToImageSettings
    | { pdfToGifRecord: PDFToGifRecord }; // New merged structure