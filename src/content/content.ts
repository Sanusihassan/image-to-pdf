export const tool = {
  JPG_to_PDF: {
    title: "JPG to PDF",
    seoTitle: "Convert JPG to PDF Online - Free JPG to PDF Converter",
    description: "Convert JPG image files to PDF documents",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  PNG_to_PDF: {
    title: "PNG to PDF",
    seoTitle: "Convert PNG to PDF Online - Free PNG to PDF Converter",
    description: "Convert PNG image files to PDF documents",
    color: "#3498db",
    type: ".png",
    to: "/png-to-pdf",
  },
  GIF_to_PDF: {
    title: "GIF to PDF",
    seoTitle: "Convert GIF to PDF Online - Free GIF to PDF Converter",
    description: "Convert GIF image files to PDF documents",
    color: "#636e72",
    type: ".gif",
    to: "/gif-to-pdf",
  },
  TIFF_to_PDF: {
    title: "TIFF to PDF",
    seoTitle: "Convert TIFF to PDF Online - Free TIFF to PDF Converter",
    description: "Convert TIFF image files to PDF documents",
    color: "#e45453",
    type: ".tiff",
    to: "/tiff-to-pdf",
  },
  BMP_to_PDF: {
    title: "BMP to PDF",
    seoTitle: "Convert BMP to PDF Online - Free BMP to PDF Converter",
    description: "Convert BMP image files to PDF documents",
    color: "#573b26",
    type: ".bmp",
    to: "/bmp-to-pdf",
  },
  SVG_to_PDF: {
    title: "SVG to PDF",
    seoTitle: "Convert SVG to PDF Online - Free SVG to PDF Converter",
    description: "Convert SVG image files to PDF documents",
    color: "#ffb338",
    type: ".svg",
    to: "/svg-to-pdf",
  },
  WebP_to_PDF: {
    title: "WebP to PDF",
    seoTitle: "Convert WebP to PDF Online - Free WebP to PDF Converter",
    description: "Convert WebP image files to PDF documents",
    color: "#6fc21f",
    type: ".webp",
    to: "/webp-to-pdf",
  },
  HEIF_to_PDF: {
    title: "HEIF/HEIC to PDF",
    seoTitle: "Convert HEIF/HEIC to PDF Online - Free HEIF/HEIC to PDF Converter",
    description: "Convert HEIF/HEIC image files to PDF documents",
    color: "#c376b8",
    type: ".heif, .heic",
    to: "/heif-heic-to-pdf",
  },
};


export const edit_page = {
  edit_page_titles: {
    jpg_to_pdf: "JPG to PDF options",
    png_to_pdf: "PNG to PDF options",
    gif_to_pdf: "GIF to PDF options",
    tiff_to_pdf: "TIFF to PDF options",
    bmp_to_pdf: "BMP to PDF options",
    svg_to_pdf: "SVG to PDF options",
    webp_to_pdf: "WebP to PDF options",
    heif_heic_to_pdf: "HEIF/HEIC to PDF options",
  },
  loader_text: "Please wait...",
  add_more_button: "Add more files",
  action_buttons: {
    jpg_to_pdf: "Convert to PDF",
    png_to_pdf: "Convert to PDF",
    gif_to_pdf: "Convert to PDF",
    tiff_to_pdf: "Convert to PDF",
    bmp_to_pdf: "Convert to PDF",
    svg_to_pdf: "Convert to PDF",
    webp_to_pdf: "Convert to PDF",
    heif_heic_to_pdf: "Convert to PDF",
  },
  pages: "pages",
  page: "page",
};


export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const downloadFile = {
  titles: {
    "jpg-to-pdf": [
      "JPG files have been converted to PDF!",
      "JPG file has been converted to PDF!",
    ],
  },

  btnText: {
    "jpg-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
  },

  backto: {
    "jpg-to-pdf": "Back To JPG to PDF",
  },
};

export const errors = {
  EMPTY_FILE: {
    message: "The file is empty. Please choose a valid file.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "The file is too large. Please choose a smaller file, or use our compress-pdf tool to reduce the file size.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "The file is not a supported type.",
    types: {
      PDF: "Please choose a valid PDF file.",
      JPG: "Please choose a valid JPEG image file.",
      DOC: "Please choose a valid Word document file.",
      DOCX: "Please choose a valid Word document file.",
      XLS: "Please choose a valid Excel spreadsheet file.",
      XLSX: "Please choose a valid Excel spreadsheet file.",
      PPT: "Please choose a valid PowerPoint presentation file.",
      PPTX: "Please choose a valid PowerPoint presentation file.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "The file is corrupt and cannot be processed. Please choose a valid file.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "The file contains missing fontsand cannot be processed. Please ensure all fonts are embedded in the PDF file.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "The file contains invalid image data. Please ensure all images are properly formatted.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "The file contains a security risk and cannot be processed. Please choose a valid file.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "You have exceeded the maximum number of files allowed. Please delete some files and try again.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No files selected. Please select at least one file.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "An unknown error occurred. Please try again later or contact support.",
    code: "ERR_UNKNOWN",
  },
  // i want another error like this but when only one file is uploaded
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Please upload at least two files to merge.",
    code: "ERR_UPLOAD_COUNT",
  },
};
