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
    title: "JPG en PDF",
    seoTitle: "Convertir JPG en PDF en ligne - Convertisseur gratuit de JPG en PDF",
    description: "Convertir des fichiers d'image JPG en documents PDF",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  PNG_to_PDF: {
    title: "PNG en PDF",
    seoTitle: "Convertir PNG en PDF en ligne - Convertisseur gratuit de PNG en PDF",
    description: "Convertir des fichiers d'image PNG en documents PDF",
    color: "#3498db",
    type: ".png",
    to: "/png-to-pdf",
  },
  GIF_to_PDF: {
    title: "GIF en PDF",
    seoTitle: "Convertir GIF en PDF en ligne - Convertisseur gratuit de GIF en PDF",
    description: "Convertir des fichiers d'image GIF en documents PDF",
    color: "#636e72",
    type: ".gif",
    to: "/gif-to-pdf",
  },
  TIFF_to_PDF: {
    title: "TIFF en PDF",
    seoTitle: "Convertir TIFF en PDF en ligne - Convertisseur gratuit de TIFF en PDF",
    description: "Convertir des fichiers d'image TIFF en documents PDF",
    color: "#e45453",
    type: ".tiff",
    to: "/tiff-to-pdf",
  },
  BMP_to_PDF: {
    title: "BMP en PDF",
    seoTitle: "Convertir BMP en PDF en ligne - Convertisseur gratuit de BMP en PDF",
    description: "Convertir des fichiers d'image BMP en documents PDF",
    color: "#573b26",
    type: ".bmp",
    to: "/bmp-to-pdf",
  },
  SVG_to_PDF: {
    title: "SVG en PDF",
    seoTitle: "Convertir SVG en PDF en ligne - Convertisseur gratuit de SVG en PDF",
    description: "Convertir des fichiers d'image SVG en documents PDF",
    color: "#ffb338",
    type: ".svg",
    to: "/svg-to-pdf",
  },
  WebP_to_PDF: {
    title: "WebP en PDF",
    seoTitle: "Convertir WebP en PDF en ligne - Convertisseur gratuit de WebP en PDF",
    description: "Convertir des fichiers d'image WebP en documents PDF",
    color: "#6fc21f",
    type: ".webp",
    to: "/webp-to-pdf",
  },
  HEIF_to_PDF: {
    title: "HEIF/HEIC en PDF",
    seoTitle: "Convertir HEIF/HEIC en PDF en ligne - Convertisseur gratuit de HEIF/HEIC en PDF",
    description: "Convertir des fichiers d'image HEIF/HEIC en documents PDF",
    color: "#c376b8",
    type: ".heif, .heic",
    to: "/heif-heic-to-pdf",
  },
};

export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};

export const downloadFile: _downloadFile = {
  titles: {
    "jpg-to-pdf": [
      "Les fichiers JPG ont été convertis en PDF !",
      "Le fichier JPG a été converti en PDF !",
    ],
    "svg-to-pdf": [
      "Les fichiers SVG ont été convertis en PDF !",
      "Le fichier SVG a été converti en PDF !",
    ],
    "png-to-pdf": [
      "Les fichiers PNG ont été convertis en PDF !",
      "Le fichier PNG a été converti en PDF !",
    ],
    "gif-to-pdf": [
      "Les fichiers GIF ont été convertis en PDF !",
      "Le fichier GIF a été converti en PDF !",
    ],
    "tiff-to-pdf": [
      "Les fichiers TIFF ont été convertis en PDF !",
      "Le fichier TIFF a été converti en PDF !",
    ],
    "bmp-to-pdf": [
      "Les fichiers BMP ont été convertis en PDF !",
      "Le fichier BMP a été converti en PDF !",
    ],
    "webp-to-pdf": [
      "Les fichiers WEBP ont été convertis en PDF !",
      "Le fichier WEBP a été converti en PDF !",
    ],
    "heif-heic-to-pdf": [
      "Les fichiers HEIF/HEIC ont été convertis en PDF !",
      "Le fichier HEIF/HEIC a été converti en PDF !",
    ],
  },

  btnText: {
    "jpg-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "svg-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "png-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "gif-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "tiff-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "bmp-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "webp-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "heif-heic-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
  },

  backTo: {
    "jpg-to-pdf": "Retour à la conversion JPG vers PDF",
    "svg-to-pdf": "Retour à la conversion SVG vers PDF",
    "png-to-pdf": "Retour à la conversion PNG vers PDF",
    "gif-to-pdf": "Retour à la conversion GIF vers PDF",
    "tiff-to-pdf": "Retour à la conversion TIFF vers PDF",
    "bmp-to-pdf": "Retour à la conversion BMP vers PDF",
    "webp-to-pdf": "Retour à la conversion WEBP vers PDF",
    "heif-heic-to-pdf": "Retour à la conversion HEIF/HEIC vers PDF",
  },
};


export const edit_page: _edit_page = {
  edit_page_titles: {
    jpg_to_pdf: "Options de conversion JPG vers PDF",
    png_to_pdf: "Options de conversion PNG vers PDF",
    gif_to_pdf: "Options de conversion GIF vers PDF",
    tiff_to_pdf: "Options de conversion TIFF vers PDF",
    bmp_to_pdf: "Options de conversion BMP vers PDF",
    svg_to_pdf: "Options de conversion SVG vers PDF",
    webp_to_pdf: "Options de conversion WebP vers PDF",
    heif_heic_to_pdf: "Options de conversion HEIF/HEIC vers PDF",
  },
  loader_text: "Veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    jpg_to_pdf: "Convertir en PDF",
    png_to_pdf: "Convertir en PDF",
    gif_to_pdf: "Convertir en PDF",
    tiff_to_pdf: "Convertir en PDF",
    bmp_to_pdf: "Convertir en PDF",
    svg_to_pdf: "Convertir en PDF",
    webp_to_pdf: "Convertir en PDF",
    heif_heic_to_pdf: "Convertir en PDF",
  },
  pages: "pages",
  page: "page",
};


export const errors: _errors = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le fichier n'est pas d'un type pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
      JPG: "Veuillez choisir un fichier d'image JPEG valide.",
      DOC: "Veuillez choisir un fichier de document Word valide.",
      DOCX: "Veuillez choisir un fichier de document Word valide.",
      XLS: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      XLSX: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      PPT: "Veuillez choisir un fichier de présentation PowerPoint valide.",
      PPTX: "Veuillez choisir un fichier de présentation PowerPoint valide.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "Le fichier contient des polices manquantes. Veuillez vous assurer que toutes les polices sont intégrées dans le fichier PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "Le fichier contient des données d'image non valides. Veuillez vous assurer que toutes les images sont correctement formatées.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "Le fichier contient un risque de sécurité et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Veuillez télécharger au moins deux fichiers à fusionner.",
    code: "ERR_UPLOAD_COUNT",
  },
};
