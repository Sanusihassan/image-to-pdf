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

export const nav_content = {
  // इसे अनदेखा करें
  brand: "Equips",
  merge_pdf: "पीडीएफ विलय करें",
  split_pdf: "पीडीएफ विभाजित करें",
  compress_pdf: "पीडीएफ संपीड़ित करें",
  convert_pdf: "पीडीएफ परिवर्तित करें",
  convert_to_pdf: "पीडीएफ में परिवर्तित करें",
  jpg_to_pdf: "जेपीजी से पीडीएफ",
  word_to_pdf: "शब्द से पीडीएफ",
  markdown_to_pdf: "पीडीएफ में मार्कडाउन करें",
  powerpoint_to_pdf: "पावरपॉइंट से पीडीएफ",
  excel_to_pdf: "एक्सेल से पीडीएफ",
  html_to_pdf: "एचटीएमएल से पीडीएफ",
  web_to_pdf: "वेब से पीडीएफ",
  convert_from_pdf: "पीडीएफ से परिवर्तित करें",
  read_edit_pdf: "पीडीएफ पढ़ें और संपादित करें",
  pdf_to_jpg: "पीडीएफ से जेपीजी",
  pdf_to_word: "पीडीएफ से शब्द",
  pdf_to_powerpoint: "पीडीएफ से पावरपॉइंट",
  pdf_to_excel: "पीडीएफ से एक्सेल",
  pdf_to_pdf_a: "पीडीएफ से पीडीएफ/ए",
  pdf_to_text: "पाठ के लिए पीडीएफ",
  pdf_to_html: "पीडीएफ से एचटीएमएल",
  pdf_to_markdown: "PDF से मार्कडाउन तक",
};

export const tool: _tool = {
  JPG_to_PDF: {
    title: "JPG से PDF",
    seoTitle: "ऑनलाइन JPG को PDF में बदलें - मुफ्त JPG से PDF कनवर्टर",
    description: "JPG छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  PNG_to_PDF: {
    title: "PNG से PDF",
    seoTitle: "ऑनलाइन PNG को PDF में बदलें - मुफ्त PNG से PDF कनवर्टर",
    description: "PNG छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#3498db",
    type: ".png",
    to: "/png-to-pdf",
  },
  GIF_to_PDF: {
    title: "GIF से PDF",
    seoTitle: "ऑनलाइन GIF को PDF में बदलें - मुफ्त GIF से PDF कनवर्टर",
    description: "GIF छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#636e72",
    type: ".gif",
    to: "/gif-to-pdf",
  },
  TIFF_to_PDF: {
    title: "TIFF से PDF",
    seoTitle: "ऑनलाइन TIFF को PDF में बदलें - मुफ्त TIFF से PDF कनवर्टर",
    description: "TIFF छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#e45453",
    type: ".tiff",
    to: "/tiff-to-pdf",
  },
  BMP_to_PDF: {
    title: "BMP से PDF",
    seoTitle: "ऑनलाइन BMP को PDF में बदलें - मुफ्त BMP से PDF कनवर्टर",
    description: "BMP छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#573b26",
    type: ".bmp",
    to: "/bmp-to-pdf",
  },
  SVG_to_PDF: {
    title: "SVG से PDF",
    seoTitle: "ऑनलाइन SVG को PDF में बदलें - मुफ्त SVG से PDF कनवर्टर",
    description: "SVG छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#ffb338",
    type: ".svg",
    to: "/svg-to-pdf",
  },
  WebP_to_PDF: {
    title: "WebP से PDF",
    seoTitle: "ऑनलाइन WebP को PDF में बदलें - मुफ्त WebP से PDF कनवर्टर",
    description: "WebP छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#6fc21f",
    type: ".webp",
    to: "/webp-to-pdf",
  },
  HEIF_to_PDF: {
    title: "HEIF/HEIC से PDF",
    seoTitle: "ऑनलाइन HEIF/HEIC को PDF में बदलें - मुफ्त HEIF/HEIC से PDF कनवर्टर",
    description: "HEIF/HEIC छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#c376b8",
    type: ".heif, .heic",
    to: "/heif-heic-to-pdf",
  },
  PDF_to_JPG: {
    title: "PDF से JPG में",
    seoTitle: "PDF से JPG में - PDF फ़ाइलों को JPG छवि फ़ाइलों में बदलें",
    description: "PDF फ़ाइलों को JPG छवि फ़ाइलों में बदलें",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
  },
  PDF_to_PNG: {
    title: "पीडीएफ से पीएनजी में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को पीएनजी में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को पीएनजी छवि फ़ाइलों में बदलें",
    color: "#3498db",
    type: ".pdf",
    to: "/pdf-to-png",
  },

  PDF_to_GIF: {
    title: "पीडीएफ से जीआईएफ़ में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को जीआईएफ़ में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को जीआईएफ़ छवि फ़ाइलों में बदलें",
    color: "#636e72",
    type: ".pdf",
    to: "/pdf-to-gif",
  },
  PDF_to_TIFF: {
    title: "पीडीएफ से टिफ़ में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को टिफ़ में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को टिफ़ छवि फ़ाइलों में बदलें",
    color: "#e45453",
    type: ".pdf",
    to: "/pdf-to-tiff",
  },

  PDF_to_BMP: {
    title: "पीडीएफ से बीएमपी में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को बीएमपी में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को बीएमपी छवि फ़ाइलों में बदलें",
    color: "#573b26",
    type: ".pdf",
    to: "/pdf-to-bmp",
  },

  PDF_to_SVG: {
    title: "पीडीएफ से स्वग में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को स्वग में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को स्वग वेक्टर छवि फ़ाइलों में बदलें",
    color: "#ffb338",
    type: ".pdf",
    to: "/pdf-to-svg",
  },
  PDF_to_WebP: {
    title: "पीडीएफ से वेबपी में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को वेबपी में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को वेबपी छवि फ़ाइलों में बदलें",
    color: "#6fc21f",
    type: ".pdf",
    to: "/pdf-to-webp",
  },

  PDF_to_HEIF: {
    title: "पीडीएफ से हीफ/हीइस में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को हीफ/हीइस में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को हीफ/हीइस छवि फ़ाइलों में बदलें",
    color: "#c376b8",
    type: ".pdf",
    to: "/pdf-to-heif-heic",
  },

};

export const downloadFile: _downloadFile = {
  titles: {
    "jpg-to-pdf": [
      "JPG फ़ाइलें PDF में कनवर्ट की गईं हैं!",
      "JPG फ़ाइल PDF में कनवर्ट की गई है!",
    ],
    "svg-to-pdf": [
      "SVG फ़ाइलें PDF में कनवर्ट की गईं हैं!",
      "SVG फ़ाइल PDF में कनवर्ट की गई है!",
    ],
    "png-to-pdf": [
      "PNG फ़ाइलें PDF में कनवर्ट की गईं हैं!",
      "PNG फ़ाइल PDF में कनवर्ट की गई है!",
    ],
    "gif-to-pdf": [
      "GIF फ़ाइलें PDF में कनवर्ट की गईं हैं!",
      "GIF फ़ाइल PDF में कनवर्ट की गई है!",
    ],
    "tiff-to-pdf": [
      "TIFF फ़ाइलें PDF में कनवर्ट की गईं हैं!",
      "TIFF फ़ाइल PDF में कनवर्ट की गई है!",
    ],
    "bmp-to-pdf": [
      "BMP फ़ाइलें PDF में कनवर्ट की गईं हैं!",
      "BMP फ़ाइल PDF में कनवर्ट की गई है!",
    ],
    "webp-to-pdf": [
      "WEBP फ़ाइलें PDF में कनवर्ट की गईं हैं!",
      "WEBP फ़ाइल PDF में कनवर्ट की गई है!",
    ],
    "heif-heic-to-pdf": [
      "HEIF/HEIC फ़ाइलें PDF में कनवर्ट की गईं हैं!",
      "HEIF/HEIC फ़ाइल PDF में कनवर्ट की गई है!",
    ],
    "pdf-to-jpg": [
      "PDF फ़ाइलें JPG में रूपांतरित की गईं!",
      "PDF फ़ाइल को JPG में रूपांतरित किया गया है!",
    ],
    "pdf-to-svg": [
      "PDF फ़ाइलें SVG में परिवर्तित की गई हैं!",
      "PDF फ़ाइल SVG में परिवर्तित की गई है!",
    ],
    "pdf-to-png": [
      "PDF फ़ाइलें PNG में परिवर्तित की गई हैं!",
      "PDF फ़ाइल PNG में परिवर्तित की गई है!",
    ],
    "pdf-to-gif": [
      "PDF फ़ाइलें GIF में परिवर्तित की गई हैं!",
      "PDF फ़ाइल GIF में परिवर्तित की गई है!",
    ],
    "pdf-to-tiff": [
      "PDF फ़ाइलें TIFF में परिवर्तित की गई हैं!",
      "PDF फ़ाइल TIFF में परिवर्तित की गई है!",
    ],
    "pdf-to-bmp": [
      "PDF फ़ाइलें BMP में परिवर्तित की गई हैं!",
      "PDF फ़ाइल BMP में परिवर्तित की गई है!",
    ],
    "pdf-to-webp": [
      "PDF फ़ाइलें WEBP में परिवर्तित की गई हैं!",
      "PDF फ़ाइल WEBP में परिवर्तित की गई है!",
    ],
    "pdf-to-heif-heic": [
      "PDF फ़ाइलें HEIF/HEIC में परिवर्तित की गई हैं!",
      "PDF फ़ाइल HEIF/HEIC में परिवर्तित की गई है!",
    ],
  },

  btnText: {
    "jpg-to-pdf": [
      "कनवर्ट की गई PDF फ़ाइलें डाउनलोड करें",
      "कनवर्ट की गई PDF फ़ाइल डाउनलोड करें",
    ],
    "svg-to-pdf": [
      "कनवर्ट की गई PDF फ़ाइलें डाउनलोड करें",
      "कनवर्ट की गई PDF फ़ाइल डाउनलोड करें",
    ],
    "png-to-pdf": [
      "कनवर्ट की गई PDF फ़ाइलें डाउनलोड करें",
      "कनवर्ट की गई PDF फ़ाइल डाउनलोड करें",
    ],
    "gif-to-pdf": [
      "कनवर्ट की गई PDF फ़ाइलें डाउनलोड करें",
      "कनवर्ट की गई PDF फ़ाइल डाउनलोड करें",
    ],
    "tiff-to-pdf": [
      "कनवर्ट की गई PDF फ़ाइलें डाउनलोड करें",
      "कनवर्ट की गई PDF फ़ाइल डाउनलोड करें",
    ],
    "bmp-to-pdf": [
      "कनवर्ट की गई PDF फ़ाइलें डाउनलोड करें",
      "कनवर्ट की गई PDF फ़ाइल डाउनलोड करें",
    ],
    "webp-to-pdf": [
      "कनवर्ट की गई PDF फ़ाइलें डाउनलोड करें",
      "कनवर्ट की गई PDF फ़ाइल डाउनलोड करें",
    ],
    "heif-heic-to-pdf": [
      "कनवर्ट की गई PDF फ़ाइलें डाउनलोड करें",
      "कनवर्ट की गई PDF फ़ाइल डाउनलोड करें",
    ],
    "pdf-to-jpg": [
      "JPG में रूपांतरित की गई PDF फ़ाइलें डाउनलोड करें",
      "JPG में रूपांतरित की गई PDF फ़ाइल डाउनलोड करें",
    ],
    "pdf-to-svg": [
      "डाउनलोड किए गए SVG फ़ाइलें",
      "डाउनलोड की गई SVG फ़ाइल",
    ],
    "pdf-to-png": [
      "डाउनलोड किए गए PNG फ़ाइलें",
      "डाउनलोड की गई PNG फ़ाइल",
    ],
    "pdf-to-gif": [
      "डाउनलोड किए गए GIF फ़ाइलें",
      "डाउनलोड की गई GIF फ़ाइल",
    ],
    "pdf-to-tiff": [
      "डाउनलोड किए गए TIFF फ़ाइलें",
      "डाउनलोड की गई TIFF फ़ाइल",
    ],
    "pdf-to-bmp": [
      "डाउनलोड किए गए BMP फ़ाइलें",
      "डाउनलोड की गई BMP फ़ाइल",
    ],
    "pdf-to-webp": [
      "डाउनलोड किए गए WEBP फ़ाइलें",
      "डाउनलोड की गई WEBP फ़ाइल",
    ],
    "pdf-to-heif-heic": [
      "डाउनलोड किए गए HEIF/HEIC फ़ाइलें",
      "डाउनलोड की गई HEIF/HEIC फ़ाइल",
    ],
  },

  backTo: {
    "jpg-to-pdf": "JPG से PDF में वापस जाएं",
    "svg-to-pdf": "SVG से PDF में वापस जाएं",
    "png-to-pdf": "PNG से PDF में वापस जाएं",
    "gif-to-pdf": "GIF से PDF में वापस जाएं",
    "tiff-to-pdf": "TIFF से PDF में वापस जाएं",
    "bmp-to-pdf": "BMP से PDF में वापस जाएं",
    "webp-to-pdf": "WEBP से PDF में वापस जाएं",
    "heif-heic-to-pdf": "HEIF/HEIC से PDF में वापस जाएं",
    "pdf-to-jpg": "PDF से JPG को वापस जाएं",
    "pdf-to-svg": "PDF से SVG में वापस जाएं",
    "pdf-to-png": "PDF से PNG में वापस जाएं",
    "pdf-to-gif": "PDF से GIF में वापस जाएं",
    "pdf-to-tiff": "PDF से TIFF में वापस जाएं",
    "pdf-to-bmp": "PDF से BMP में वापस जाएं",
    "pdf-to-webp": "PDF से WEBP में वापस जाएं",
    "pdf-to-heif-heic": "PDF से HEIF/HEIC में वापस जाएं",

  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    jpg_to_pdf: "JPG से PDF विकल्प",
    png_to_pdf: "PNG से PDF विकल्प",
    gif_to_pdf: "GIF से PDF विकल्प",
    tiff_to_pdf: "TIFF से PDF विकल्प",
    bmp_to_pdf: "BMP से PDF विकल्प",
    svg_to_pdf: "SVG से PDF विकल्प",
    webp_to_pdf: "WebP से PDF विकल्प",
    heif_heic_to_pdf: "HEIF/HEIC से PDF विकल्प",
    pdf_to_jpg: "PDF से JPG विकल्प",
    pdf_to_svg: "पीडीएफ से SVG विकल्प",
    pdf_to_png: "पीडीएफ से PNG विकल्प",
    pdf_to_gif: "पीडीएफ से GIF विकल्प",
    pdf_to_tiff: "पीडीएफ से TIFF विकल्प",
    pdf_to_bmp: "पीडीएफ से BMP विकल्प",
    pdf_to_webp: "पीडीएफ से WebP विकल्प",
    pdf_to_heif_heic: "पीडीएफ से HEIF/HEIC विकल्प",
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "अधिक फ़ाइलें जोड़ें",
  action_buttons: {
    jpg_to_pdf: "PDF में बदलें",
    png_to_pdf: "PDF में बदलें",
    gif_to_pdf: "PDF में बदलें",
    tiff_to_pdf: "PDF में बदलें",
    bmp_to_pdf: "PDF में बदलें",
    svg_to_pdf: "PDF में बदलें",
    webp_to_pdf: "PDF में बदलें",
    heif_heic_to_pdf: "PDF में बदलें",
    pdf_to_jpg: "जेपीजी में रूपांतरित करें",
    pdf_to_svg: "SVG में परिवर्तित करें",
    pdf_to_png: "PNG में परिवर्तित करें",
    pdf_to_gif: "GIF में परिवर्तित करें",
    pdf_to_tiff: "TIFF में परिवर्तित करें",
    pdf_to_bmp: "BMP में परिवर्तित करें",
    pdf_to_webp: "WebP में परिवर्तित करें",
    pdf_to_heif_heic: "HEIF/HEIC में परिवर्तित करें",
  },
  pages: "पृष्ठ",
  page: "पृष्ठ",
};


export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "फ़ाइल बहुत बड़ी है। कृपया एक छोटी फ़ाइल चुनें या हमारा कंप्रेस-पीडीएफ़ उपकरण उपयोग करके फ़ाइल का आकार कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "फ़ाइल एक समर्थित प्रकार नहीं है।",
    types: {
      PDF: "कृपया एक मान्य पीडीएफ़फ़ाइल चुनें।",
      JPG: "कृपया एक मान्य जेपेग छवि फ़ाइल चुनें।",
      DOC: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      DOCX: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      XLS: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      XLSX: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      PPT: "कृपया एक मान्यपावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
      PPTX: "कृपया एक मान्य पावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "फ़ाइल का डाटा भ्रष्ट है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "फ़ाइल में फ़ॉन्ट गुम हैं। कृपया सुनिश्चित करें कि पीडीएफफ़ाइल में सभी फ़ॉन्ट एम्बेड हैं।",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "फ़ाइल में अवैध छवि डेटा है। कृपया सुनिश्चित करें कि सभी छवियाँ सही ढंग से फ़ॉर्मेटेड हैं।",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "फ़ाइल में सुरक्षा जोखिम हो सकता है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "आपने अनुमति दी हुई अधिकतम फ़ाइलों की संख्या पार कर दी है। कृपया कुछ फ़ाइलें हटाएं और पुनः प्रयास करें।",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चयनित नहीं की गई है। कृपया कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "एक अज्ञात त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें या सहायता से संपर्क करें।",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "नेटवर्क में त्रुटि हो गई है। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    code: "ERR_NETWORK",
  },

  ERR_UPLOAD_COUNT: {
    message: "कृपया फ्यूजन करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
    code: "ERR_UPLOAD_COUNT",
  },
};
