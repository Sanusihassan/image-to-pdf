import type {
  tool as _tool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  JPG_to_PDF: {
    title: "تحويل JPG إلى PDF",
    seoTitle: "تحويل JPG إلى PDF عبر الإنترنت - محول مجاني من JPG إلى PDF",
    description: "تحويل ملفات الصور JPG إلى مستندات PDF",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  PNG_to_PDF: {
    title: "تحويل PNG إلى PDF",
    seoTitle: "تحويل PNG إلى PDF عبر الإنترنت - محول مجاني من PNG إلى PDF",
    description: "تحويل ملفات الصور PNG إلى مستندات PDF",
    color: "#3498db",
    type: ".png",
    to: "/png-to-pdf",
  },
  GIF_to_PDF: {
    title: "تحويل GIF إلى PDF",
    seoTitle: "تحويل GIF إلى PDF عبر الإنترنت - محول مجاني من GIF إلى PDF",
    description: "تحويل ملفات الصور GIF إلى مستندات PDF",
    color: "#636e72",
    type: ".gif",
    to: "/gif-to-pdf",
  },
  TIFF_to_PDF: {
    title: "تحويل TIFF إلى PDF",
    seoTitle: "تحويل TIFF إلى PDF عبر الإنترنت - محول مجاني من TIFF إلى PDF",
    description: "تحويل ملفات الصور TIFF إلى مستندات PDF",
    color: "#e45453",
    type: ".tiff",
    to: "/tiff-to-pdf",
  },
  BMP_to_PDF: {
    title: "تحويل BMP إلى PDF",
    seoTitle: "تحويل BMP إلى PDF عبر الإنترنت - محول مجاني من BMP إلى PDF",
    description: "تحويل ملفات الصور BMP إلى مستندات PDF",
    color: "#573b26",
    type: ".bmp",
    to: "/bmp-to-pdf",
  },
  SVG_to_PDF: {
    title: "تحويل SVG إلى PDF",
    seoTitle: "تحويل SVG إلى PDF عبر الإنترنت - محول مجاني من SVG إلى PDF",
    description: "تحويل ملفات الصور SVG إلى مستندات PDF",
    color: "#ffb338",
    type: ".svg",
    to: "/svg-to-pdf",
  },
  WebP_to_PDF: {
    title: "تحويل WebP إلى PDF",
    seoTitle: "تحويل WebP إلى PDF عبر الإنترنت - محول مجاني من WebP إلى PDF",
    description: "تحويل ملفات الصور WebP إلى مستندات PDF",
    color: "#6fc21f",
    type: ".webp",
    to: "/webp-to-pdf",
  },
  HEIF_to_PDF: {
    title: "تحويل HEIF/HEIC إلى PDF",
    seoTitle: "تحويل HEIF/HEIC إلى PDF عبر الإنترنت - محول مجاني من HEIF/HEIC إلى PDF",
    description: "تحويل ملفات الصور HEIF/HEIC إلى مستندات PDF",
    color: "#c376b8",
    type: ".heif, .heic",
    to: "/heif-heic-to-pdf",
  },
};


export const tools: _tools = {
  select: "اختر",
  or_drop: "أو قم بإسقاط الملفات هنا",
  files: "ملفات",
  drop_files: "قم بوضع الملفات هنا",
};

export const downloadFile: _downloadFile = {
  titles: {
    "jpg-to-pdf": [
      "تم تحويل ملفات JPG إلى PDF!",
      "تم تحويل ملف JPG إلى PDF!",
    ],
    "svg-to-pdf": [
      "تم تحويل ملفات SVG إلى PDF!",
      "تم تحويل ملف SVG إلى PDF!",
    ],
    "png-to-pdf": [
      "تم تحويل ملفات PNG إلى PDF!",
      "تم تحويل ملف PNG إلى PDF!",
    ],
    "gif-to-pdf": [
      "تم تحويل ملفات GIF إلى PDF!",
      "تم تحويل ملف GIF إلى PDF!",
    ],
    "tiff-to-pdf": [
      "تم تحويل ملفات TIFF إلى PDF!",
      "تم تحويل ملف TIFF إلى PDF!",
    ],
    "bmp-to-pdf": [
      "تم تحويل ملفات BMP إلى PDF!",
      "تم تحويل ملف BMP إلى PDF!",
    ],
    "webp-to-pdf": [
      "تم تحويل ملفات WEBP إلى PDF!",
      "تم تحويل ملف WEBP إلى PDF!",
    ],
    "heif-heic-to-pdf": [
      "تم تحويل ملفات HEIF/HEIC إلى PDF!",
      "تم تحويل ملف HEIF/HEIC إلى PDF!",
    ],
  },

  btnText: {
    "jpg-to-pdf": [
      "تحميل الملفات PDF المحولة",
      "تحميل الملف PDF المحول",
    ],
    "svg-to-pdf": [
      "تحميل الملفات PDF المحولة",
      "تحميل الملف PDF المحول",
    ],
    "png-to-pdf": [
      "تحميل الملفات PDF المحولة",
      "تحميل الملف PDF المحول",
    ],
    "gif-to-pdf": [
      "تحميل الملفات PDF المحولة",
      "تحميل الملف PDF المحول",
    ],
    "tiff-to-pdf": [
      "تحميل الملفات PDF المحولة",
      "تحميل الملف PDF المحول",
    ],
    "bmp-to-pdf": [
      "تحميل الملفات PDF المحولة",
      "تحميل الملف PDF المحول",
    ],
    "webp-to-pdf": [
      "تحميل الملفات PDF المحولة",
      "تحميل الملف PDF المحول",
    ],
    "heif-heic-to-pdf": [
      "تحميل الملفات PDF المحولة",
      "تحميل الملف PDF المحول",
    ],
  },

  backTo: {
    "jpg-to-pdf": "العودة إلى تحويل JPG إلى PDF",
    "svg-to-pdf": "العودة إلى تحويل SVG إلى PDF",
    "png-to-pdf": "العودة إلى تحويل PNG إلى PDF",
    "gif-to-pdf": "العودة إلى تحويل GIF إلى PDF",
    "tiff-to-pdf": "العودة إلى تحويل TIFF إلى PDF",
    "bmp-to-pdf": "العودة إلى تحويل BMP إلى PDF",
    "webp-to-pdf": "العودة إلى تحويل WEBP إلى PDF",
    "heif-heic-to-pdf": "العودة إلى تحويل HEIF/HEIC إلى PDF",
  },
};


export const edit_page: _edit_page = {
  edit_page_titles: {
    jpg_to_pdf: "خيارات تحويل JPG إلى PDF",
    png_to_pdf: "خيارات تحويل PNG إلى PDF",
    gif_to_pdf: "خيارات تحويل GIF إلى PDF",
    tiff_to_pdf: "خيارات تحويل TIFF إلى PDF",
    bmp_to_pdf: "خيارات تحويل BMP إلى PDF",
    svg_to_pdf: "خيارات تحويل SVG إلى PDF",
    webp_to_pdf: "خيارات تحويل WebP إلى PDF",
    heif_heic_to_pdf: "خيارات تحويل HEIF/HEIC إلى PDF",
  },
  loader_text: "يرجى الانتظار...",
  add_more_button: "إضافة المزيد من الملفات",
  action_buttons: {
    jpg_to_pdf: "تحويل إلى PDF",
    png_to_pdf: "تحويل إلى PDF",
    gif_to_pdf: "تحويل إلى PDF",
    tiff_to_pdf: "تحويل إلى PDF",
    bmp_to_pdf: "تحويل إلى PDF",
    svg_to_pdf: "تحويل إلى PDF",
    webp_to_pdf: "تحويل إلى PDF",
    heif_heic_to_pdf: "تحويل إلى PDF",
  },
  pages: "صفحات",
  page: "صفحة واحدة",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "الملف فارغ. يرجى اختيار ملف صالح.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدام أداة ضغط PDF الخاصة بنا لتقليل حجم الملف.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "الملف غير مدعوم.",
    types: {
      PDF: "يرجى اختيار ملف PDF صالح.",
      JPG: "يرجى اختيار ملف صورة JPEG صالح.",
      DOC: "يرجى اختيار ملف مستند Word صالح.",
      DOCX: "يرجى اختيار ملف مستند Word صالح.",
      XLS: "يرجى اختيار ملف جدول بيانات Excel صالح.",
      XLSX: "يرجى اختيارملف جدول بيانات Excel صالح.",
      PPT: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
      PPTX: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "الملف يحتوي على خطوط أحرف مفقودة. يرجى التأكد من تضمين جميع الخطوط في ملف PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "الملف يحتوي على بيانات صورة غير صالحة. يرجى التأكد من تنسيق جميع الصور بشكل صحيح.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "الملف يحتوي على مخاطر أمان ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات والمحاولة مرة أخرى.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو الاتصال بالدعم.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت وحاول مرة أخرى.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "يرجى رفع ملفين على الأقل للدمج.",
    code: "ERR_UPLOAD_COUNT",
  },
};
