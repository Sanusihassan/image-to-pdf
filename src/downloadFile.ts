// downloadFile.ts
import type { RefObject } from "react";
import type { AxiosResponse } from "axios";

// ============ MIME TYPE TO EXTENSION MAPPING ============
const MIME_TO_EXTENSION: Record<string, string> = {
  // Documents
  "application/pdf": ".pdf",
  "application/zip": ".zip",
  "application/x-zip-compressed": ".zip",

  // Images
  "image/jpeg": ".jpg",
  "image/jpg": ".jpg",
  "image/png": ".png",
  "image/gif": ".gif",
  "image/bmp": ".bmp",
  "image/tiff": ".tiff",
  "image/webp": ".webp",
  "image/svg+xml": ".svg",
  "image/heif": ".heif",
  "image/heic": ".heic",

  // Office formats
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": ".pptx",
  "application/msword": ".doc",
  "application/vnd.ms-excel": ".xls",
  "application/vnd.ms-powerpoint": ".ppt",

  // Text
  "text/plain": ".txt",
  "text/html": ".html",
  "text/csv": ".csv",

  // Fallback
  "application/octet-stream": "", // Will use path-based extension
};

// ============ PATH TO EXTENSION MAPPING ============
const PATH_TO_EXTENSION: Record<string, string> = {
  // PDF conversions
  "pdf-to-jpg": ".jpg",
  "pdf-to-jpeg": ".jpg",
  "pdf-to-png": ".png",
  "pdf-to-gif": ".gif",
  "pdf-to-bmp": ".bmp",
  "pdf-to-tiff": ".tiff",
  "pdf-to-webp": ".webp",
  "pdf-to-svg": ".svg",
  "pdf-to-heif": ".heif",
  "pdf-to-heic": ".heic",
  "pdf-to-image": "", // Depends on selectedImageFormat

  // Image to PDF
  "jpg-to-pdf": ".pdf",
  "jpeg-to-pdf": ".pdf",
  "png-to-pdf": ".pdf",
  "gif-to-pdf": ".pdf",
  "bmp-to-pdf": ".pdf",
  "tiff-to-pdf": ".pdf",
  "webp-to-pdf": ".pdf",
  "svg-to-pdf": ".pdf",
  "heif-to-pdf": ".pdf",
  "heic-to-pdf": ".pdf",
  "image-to-pdf": ".pdf",

  // PDF operations
  "merge-pdf": ".pdf",
  "split-pdf": ".zip",
  "compress-pdf": ".pdf",
  "rotate-pdf": ".pdf",
  "pdf-to-pptx": ".pptx",
  "pdf-to-docx": ".docx",
  "pdf-to-xlsx": ".xlsx",
  "pdf-to-txt": ".txt",
  "pdf-to-html": ".html",
};

/**
 * Get the file extension from Content-Type header
 */
function getExtensionFromMimeType(contentType: string | undefined): string {
  if (!contentType) return "";

  // Extract MIME type (remove charset and other parameters)
  const mimeType = contentType.split(";")[0].trim().toLowerCase();

  return MIME_TO_EXTENSION[mimeType] || "";
}

/**
 * Get the file extension from the API path
 */
function getExtensionFromPath(path: string): string {
  return PATH_TO_EXTENSION[path] || "";
}

/**
 * Extract filename from Content-Disposition header if present
 */
function getFilenameFromContentDisposition(
  contentDisposition: string | undefined
): string | null {
  if (!contentDisposition) return null;

  // Try to extract filename from Content-Disposition
  // Format: attachment; filename="example.pdf" or filename*=UTF-8''example.pdf
  const filenameMatch = contentDisposition.match(
    /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/i
  );

  if (filenameMatch && filenameMatch[1]) {
    let filename = filenameMatch[1].replace(/['"]/g, "");
    // Decode URI encoded filenames
    try {
      filename = decodeURIComponent(filename);
    } catch {
      // Keep original if decoding fails
    }
    return filename;
  }

  return null;
}

/**
 * Ensure filename has the correct extension
 */
function ensureCorrectExtension(
  filename: string,
  extension: string
): string {
  if (!extension) return filename;

  // Check if filename already has this extension (case-insensitive)
  const lowerFilename = filename.toLowerCase();
  const lowerExtension = extension.toLowerCase();

  if (lowerFilename.endsWith(lowerExtension)) {
    return filename;
  }

  // Remove any existing extension and add the correct one
  const lastDotIndex = filename.lastIndexOf(".");
  if (lastDotIndex > 0) {
    // Check if what's after the dot looks like an extension (short, alphanumeric)
    const existingExt = filename.slice(lastDotIndex);
    if (existingExt.length <= 5 && /^\.[a-zA-Z0-9]+$/.test(existingExt)) {
      filename = filename.slice(0, lastDotIndex);
    }
  }

  return filename + extension;
}

/**
 * Download converted file with correct MIME type and extension handling
 */
export const downloadConvertedFile = (
  response: AxiosResponse,
  path: string,
  fileName: string,
  downloadBtn: RefObject<HTMLAnchorElement | null>
) => {
  // Get Content-Type from response headers
  const contentType = response.headers["content-type"];
  const contentDisposition = response.headers["content-disposition"];

  // Try to get filename from Content-Disposition header first
  const serverFilename = getFilenameFromContentDisposition(contentDisposition);

  // Determine the correct file extension
  let extension = getExtensionFromMimeType(contentType);

  // If MIME type didn't give us an extension, try path-based lookup
  if (!extension) {
    extension = getExtensionFromPath(path);
  }

  // If it's a ZIP file (multiple files), use .zip extension
  if (
    contentType?.includes("zip") ||
    contentType?.includes("application/octet-stream")
  ) {
    // Check if the server sent a .zip filename
    if (serverFilename?.toLowerCase().endsWith(".zip")) {
      extension = ".zip";
    }
  }

  // Determine final filename
  let finalFilename: string = ensureCorrectExtension(fileName, extension);

  if (!finalFilename) {
    // Use server-provided filename
    finalFilename = serverFilename;
  }

  // Create blob with correct MIME type
  const blobType = contentType || "application/octet-stream";
  const blob = new Blob([response.data], { type: blobType });
  const url = URL.createObjectURL(blob);

  if (downloadBtn && downloadBtn.current) {
    downloadBtn.current.setAttribute("download", finalFilename);
    downloadBtn.current.href = url;
  }

  return { url, filename: finalFilename };
};

/**
 * Alternative: Trigger immediate download without requiring a button click
 */
export const triggerDownload = (
  response: AxiosResponse,
  path: string,
  fileName: string
): void => {
  const contentType = response.headers["content-type"];
  const contentDisposition = response.headers["content-disposition"];

  const serverFilename = getFilenameFromContentDisposition(contentDisposition);
  let extension = getExtensionFromMimeType(contentType);

  if (!extension) {
    extension = getExtensionFromPath(path);
  }

  const finalFilename = serverFilename || ensureCorrectExtension(fileName, extension);
  const blobType = contentType || "application/octet-stream";
  const blob = new Blob([response.data], { type: blobType });
  const url = URL.createObjectURL(blob);

  // Create temporary anchor and trigger download
  const a = document.createElement("a");
  a.href = url;
  a.download = finalFilename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Clean up blob URL after a short delay
  setTimeout(() => URL.revokeObjectURL(url), 100);
};

export default downloadConvertedFile;