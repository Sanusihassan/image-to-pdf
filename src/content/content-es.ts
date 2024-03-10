import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  JPG_to_PDF: {
    title: "JPG a PDF",
    seoTitle: "Convertir JPG a PDF en línea - Convertidor gratuito de JPG a PDF",
    description: "Convertir archivos de imagen JPG a documentos PDF",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  PNG_to_PDF: {
    title: "PNG a PDF",
    seoTitle: "Convertir PNG a PDF en línea - Convertidor gratuito de PNG a PDF",
    description: "Convertir archivos de imagen PNG a documentos PDF",
    color: "#3498db",
    type: ".png",
    to: "/png-to-pdf",
  },
  GIF_to_PDF: {
    title: "GIF a PDF",
    seoTitle: "Convertir GIF a PDF en línea - Convertidor gratuito de GIF a PDF",
    description: "Convertir archivos de imagen GIF a documentos PDF",
    color: "#636e72",
    type: ".gif",
    to: "/gif-to-pdf",
  },
  TIFF_to_PDF: {
    title: "TIFF a PDF",
    seoTitle: "Convertir TIFF a PDF en línea - Convertidor gratuito de TIFF a PDF",
    description: "Convertir archivos de imagen TIFF a documentos PDF",
    color: "#e45453",
    type: ".tiff",
    to: "/tiff-to-pdf",
  },
  BMP_to_PDF: {
    title: "BMP a PDF",
    seoTitle: "Convertir BMP a PDF en línea - Convertidor gratuito de BMP a PDF",
    description: "Convertir archivos de imagen BMP a documentos PDF",
    color: "#573b26",
    type: ".bmp",
    to: "/bmp-to-pdf",
  },
  SVG_to_PDF: {
    title: "SVG a PDF",
    seoTitle: "Convertir SVG a PDF en línea - Convertidor gratuito de SVG a PDF",
    description: "Convertir archivos de imagen SVG a documentos PDF",
    color: "#ffb338",
    type: ".svg",
    to: "/svg-to-pdf",
  },
  WebP_to_PDF: {
    title: "WebP a PDF",
    seoTitle: "Convertir WebP a PDF en línea - Convertidor gratuito de WebP a PDF",
    description: "Convertir archivos de imagen WebP a documentos PDF",
    color: "#6fc21f",
    type: ".webp",
    to: "/webp-to-pdf",
  },
  HEIF_to_PDF: {
    title: "HEIF/HEIC a PDF",
    seoTitle: "Convertir HEIF/HEIC a PDF en línea - Convertidor gratuito de HEIF/HEIC a PDF",
    description: "Convertir archivos de imagen HEIF/HEIC a documentos PDF",
    color: "#c376b8",
    type: ".heif, .heic",
    to: "/heif-heic-to-pdf",
  },
};


export const edit_page: _edit_page = {
  edit_page_titles: {
    jpg_to_pdf: "Opciones de JPG a PDF",
    png_to_pdf: "Opciones de PNG a PDF",
    gif_to_pdf: "Opciones de GIF a PDF",
    tiff_to_pdf: "Opciones de TIFF a PDF",
    bmp_to_pdf: "Opciones de BMP a PDF",
    svg_to_pdf: "Opciones de SVG a PDF",
    webp_to_pdf: "Opciones de WebP a PDF",
    heif_heic_to_pdf: "Opciones de HEIF/HEIC a PDF",
  },
  loader_text: "Por favor, espera...",
  add_more_button: "Agregar más archivos",
  action_buttons: {
    jpg_to_pdf: "Convertir a PDF",
    png_to_pdf: "Convertir a PDF",
    gif_to_pdf: "Convertir a PDF",
    tiff_to_pdf: "Convertir a PDF",
    bmp_to_pdf: "Convertir a PDF",
    svg_to_pdf: "Convertir a PDF",
    webp_to_pdf: "Convertir a PDF",
    heif_heic_to_pdf: "Convertir a PDF",
  },
  pages: "páginas",
  page: "página",
};


export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o soltar archivos aquí",
  files: "archivos",
  drop_files: "Arrastra los archivos aquí",
};

export const downloadFile: _downloadFile = {
  titles: {
    "jpg-to-pdf": [
      "¡Los archivos JPG se han convertido a PDF!",
      "¡El archivo JPG se ha convertido a PDF!",
    ],
    "svg-to-pdf": [
      "¡Los archivos SVG se han convertido a PDF!",
      "¡El archivo SVG se ha convertido a PDF!",
    ],
    "png-to-pdf": [
      "¡Los archivos PNG se han convertido a PDF!",
      "¡El archivo PNG se ha convertido a PDF!",
    ],
    "gif-to-pdf": [
      "¡Los archivos GIF se han convertido a PDF!",
      "¡El archivo GIF se ha convertido a PDF!",
    ],
    "tiff-to-pdf": [
      "¡Los archivos TIFF se han convertido a PDF!",
      "¡El archivo TIFF se ha convertido a PDF!",
    ],
    "bmp-to-pdf": [
      "¡Los archivos BMP se han convertido a PDF!",
      "¡El archivo BMP se ha convertido a PDF!",
    ],
    "webp-to-pdf": [
      "¡Los archivos WEBP se han convertido a PDF!",
      "¡El archivo WEBP se ha convertido a PDF!",
    ],
    "heif-heic-to-pdf": [
      "¡Los archivos HEIF/HEIC se han convertido a PDF!",
      "¡El archivo HEIF/HEIC se ha convertido a PDF!",
    ],
  },

  btnText: {
    "jpg-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "svg-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "png-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "gif-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "tiff-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "bmp-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "webp-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "heif-heic-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
  },

  backTo: {
    "jpg-to-pdf": "Volver a JPG a PDF",
    "svg-to-pdf": "Volver a SVG a PDF",
    "png-to-pdf": "Volver a PNG a PDF",
    "gif-to-pdf": "Volver a GIF a PDF",
    "tiff-to-pdf": "Volver a TIFF a PDF",
    "bmp-to-pdf": "Volver a BMP a PDF",
    "webp-to-pdf": "Volver a WEBP a PDF",
    "heif-heic-to-pdf": "Volver a HEIF/HEIC a PDF",
  },
};


export const errors: _errors = {
  EMPTY_FILE: {
    message: "El archivo está vacío. Por favor, elija un archivo válido.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "El archivo es demasiado grande. Por favor, elija un archivo más pequeño o use nuestra herramienta de compresión de PDF para reducir el tamaño del archivo.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "El archivo no es un tipo compatible.",
    types: {
      PDF: "Por favor, elija un archivo PDF válido.",
      JPG: "Por favor, elija un archivo de imagen JPEG válido.",
      DOC: "Por favor, elija un archivo de documento de Word válido.",
      DOCX: "Por favor, elija un archivo de documento de Word válido.",
      XLS: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      XLSX: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      PPT: "Por favor, elija un archivo de presentación de PowerPoint válido.",
      PPTX: "Por favor, elija un archivo de presentación de PowerPoint válido.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "El archivo estácorrupto y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "El archivo contiene fuentes faltantes. Por favor, asegúrese de que todas las fuentes estén incrustadas en el archivo PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "El archivo contiene datos de imagen no válidos. Por favor, asegúrese de que todas las imágenes estén correctamente formateadas.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "El archivo contiene un riesgo de seguridad y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Ha excedido el número máximo de archivos permitidos. Por favor, elimine algunos archivos e intente nuevamente.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "No se han seleccionado archivos. Por favor, seleccione al menos un archivo.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Ha ocurrido un error desconocido. Por favor, inténtelo de nuevo más tarde o contacte al soporte.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Ha ocurrido un error en la red. Por favor, comprueba tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Por favor, suba al menos dos archivos para fusionar.",
    code: "ERR_UPLOAD_COUNT",
  },
};
