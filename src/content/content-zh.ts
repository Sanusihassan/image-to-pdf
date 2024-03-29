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
    title: "JPG转PDF",
    seoTitle: "在线JPG转PDF - 免费JPG转PDF转换器",
    description: "将JPG图像文件转换为PDF文档",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
  },
  PNG_to_PDF: {
    title: "PNG转PDF",
    seoTitle: "在线PNG转PDF - 免费PNG转PDF转换器",
    description: "将PNG图像文件转换为PDF文档",
    color: "#3498db",
    type: ".png",
    to: "/png-to-pdf",
  },
  GIF_to_PDF: {
    title: "GIF转PDF",
    seoTitle: "在线GIF转PDF - 免费GIF转PDF转换器",
    description: "将GIF图像文件转换为PDF文档",
    color: "#636e72",
    type: ".gif",
    to: "/gif-to-pdf",
  },
  TIFF_to_PDF: {
    title: "TIFF转PDF",
    seoTitle: "在线TIFF转PDF - 免费TIFF转PDF转换器",
    description: "将TIFF图像文件转换为PDF文档",
    color: "#e45453",
    type: ".tiff",
    to: "/tiff-to-pdf",
  },
  BMP_to_PDF: {
    title: "BMP转PDF",
    seoTitle: "在线BMP转PDF - 免费BMP转PDF转换器",
    description: "将BMP图像文件转换为PDF文档",
    color: "#573b26",
    type: ".bmp",
    to: "/bmp-to-pdf",
  },
  SVG_to_PDF: {
    title: "SVG转PDF",
    seoTitle: "在线SVG转PDF - 免费SVG转PDF转换器",
    description: "将SVG图像文件转换为PDF文档",
    color: "#ffb338",
    type: ".svg",
    to: "/svg-to-pdf",
  },
  WebP_to_PDF: {
    title: "WebP转PDF",
    seoTitle: "在线WebP转PDF - 免费WebP转PDF转换器",
    description: "将WebP图像文件转换为PDF文档",
    color: "#6fc21f",
    type: ".webp",
    to: "/webp-to-pdf",
  },
  HEIF_to_PDF: {
    title: "HEIF/HEIC转PDF",
    seoTitle: "在线HEIF/HEIC转PDF - 免费HEIF/HEIC转PDF转换器",
    description: "将HEIF/HEIC图像文件转换为PDF文档",
    color: "#c376b8",
    type: ".heif, .heic",
    to: "/heif-heic-to-pdf",
  },
  PDF_to_JPG: {
    title: "PDF转JPG",
    seoTitle: "PDF转JPG - 将PDF文件转换为JPG图像文件",
    description: "将PDF文件转换为JPG图像文件",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
  },
  PDF_to_PNG: {
    title: "PDF 转 PNG",
    seoTitle: "在线将 PDF 转换为 PNG - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 PNG 图像文件",
    color: "#3498db",
    type: ".pdf",
    to: "/pdf-to-png",
  },

  PDF_to_GIF: {
    title: "PDF 转 GIF",
    seoTitle: "在线将 PDF 转换为 GIF - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 GIF 图像文件",
    color: "#636e72",
    type: ".pdf",
    to: "/pdf-to-gif",
  },

  PDF_to_TIFF: {
    title: "PDF 转 TIFF",
    seoTitle: "在线将 PDF 转换为 TIFF - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 TIFF 图像文件",
    color: "#e45453",
    type: ".pdf",
    to: "/pdf-to-tiff",
  },
  PDF_to_BMP: {
    title: "PDF 转 BMP",
    seoTitle: "在线将 PDF 转换为 BMP - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 BMP 图像文件",
    color: "#573b26",
    type: ".pdf",
    to: "/pdf-to-bmp",
  },

  PDF_to_SVG: {
    title: "PDF 转 SVG",
    seoTitle: "在线将 PDF 转换为 SVG - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 SVG 矢量图像文件",
    color: "#ffb338",
    type: ".pdf",
    to: "/pdf-to-svg",
  },

  PDF_to_WebP: {
    title: "PDF 转 WebP",
    seoTitle: "在线将 PDF 转换为 WebP - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 WebP 图像文件",
    color: "#6fc21f",
    type: ".pdf",
    to: "/pdf-to-webp",
  },

  PDF_to_HEIF: {
    title: "PDF 转 HEIF/HEIC",
    seoTitle: "在线将 PDF 转换为 HEIF/HEIC - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 HEIF/HEIC 图像文件",
    color: "#c376b8",
    type: ".pdf",
    to: "/pdf-to-heif-heic",
  },

};


export const downloadFile: _downloadFile = {
  titles: {
    "jpg-to-pdf": [
      "JPG 文件已转换为 PDF！",
      "JPG 文件已转换为 PDF！",
    ],
    "svg-to-pdf": [
      "SVG 文件已转换为 PDF！",
      "SVG 文件已转换为 PDF！",
    ],
    "png-to-pdf": [
      "PNG 文件已转换为 PDF！",
      "PNG 文件已转换为 PDF！",
    ],
    "gif-to-pdf": [
      "GIF 文件已转换为 PDF！",
      "GIF 文件已转换为 PDF！",
    ],
    "tiff-to-pdf": [
      "TIFF 文件已转换为 PDF！",
      "TIFF 文件已转换为 PDF！",
    ],
    "bmp-to-pdf": [
      "BMP 文件已转换为 PDF！",
      "BMP 文件已转换为 PDF！",
    ],
    "webp-to-pdf": [
      "WEBP 文件已转换为 PDF！",
      "WEBP 文件已转换为 PDF！",
    ],
    "heif-heic-to-pdf": [
      "HEIF/HEIC 文件已转换为 PDF！",
      "HEIF/HEIC 文件已转换为 PDF！",
    ],
    "pdf-to-jpg": ["PDF文件已转换为JPG！", "PDF文件已转换为JPG！"],
    "pdf-to-svg": [
      "PDF 文件已转换为 SVG！",
      "PDF 文件已转换为 SVG！",
    ],
    "pdf-to-png": [
      "PDF 文件已转换为 PNG！",
      "PDF 文件已转换为 PNG！",
    ],
    "pdf-to-gif": [
      "PDF 文件已转换为 GIF！",
      "PDF 文件已转换为 GIF！",
    ],
    "pdf-to-tiff": [
      "PDF 文件已转换为 TIFF！",
      "PDF 文件已转换为 TIFF！",
    ],
    "pdf-to-bmp": [
      "PDF 文件已转换为 BMP！",
      "PDF 文件已转换为 BMP！",
    ],
    "pdf-to-webp": [
      "PDF 文件已转换为 WEBP！",
      "PDF 文件已转换为 WEBP！",
    ],
    "pdf-to-heif-heic": [
      "PDF 文件已转换为 HEIF/HEIC！",
      "PDF 文件已转换为 HEIF/HEIC！",
    ],
  },

  btnText: {
    "jpg-to-pdf": [
      "下载转换后的 PDF 文件",
      "下载转换后的 PDF 文件",
    ],
    "svg-to-pdf": [
      "下载转换后的 PDF 文件",
      "下载转换后的 PDF 文件",
    ],
    "png-to-pdf": [
      "下载转换后的 PDF 文件",
      "下载转换后的 PDF 文件",
    ],
    "gif-to-pdf": [
      "下载转换后的 PDF 文件",
      "下载转换后的 PDF 文件",
    ],
    "tiff-to-pdf": [
      "下载转换后的 PDF 文件",
      "下载转换后的 PDF 文件",
    ],
    "bmp-to-pdf": [
      "下载转换后的 PDF 文件",
      "下载转换后的 PDF 文件",
    ],
    "webp-to-pdf": [
      "下载转换后的 PDF 文件",
      "下载转换后的 PDF 文件",
    ],
    "heif-heic-to-pdf": [
      "下载转换后的 PDF 文件",
      "下载转换后的 PDF 文件",
    ],
    "pdf-to-jpg": ["下载转换后的JPG文件", "下载转换后的JPG文件"],
    "pdf-to-svg": [
      "下载转换后的 SVG 文件",
      "下载转换后的 SVG 文件",
    ],
    "pdf-to-png": [
      "下载转换后的 PNG 文件",
      "下载转换后的 PNG 文件",
    ],
    "pdf-to-gif": [
      "下载转换后的 GIF 文件",
      "下载转换后的 GIF 文件",
    ],
    "pdf-to-tiff": [
      "下载转换后的 TIFF 文件",
      "下载转换后的 TIFF 文件",
    ],
    "pdf-to-bmp": [
      "下载转换后的 BMP 文件",
      "下载转换后的 BMP 文件",
    ],
    "pdf-to-webp": [
      "下载转换后的 WEBP 文件",
      "下载转换后的 WEBP 文件",
    ],
    "pdf-to-heif-heic": [
      "下载转换后的 HEIF/HEIC 文件",
      "下载转换后的 HEIF/HEIC 文件",
    ],
  },

  backTo: {
    "jpg-to-pdf": "返回 JPG 到 PDF",
    "svg-to-pdf": "返回 SVG 到 PDF",
    "png-to-pdf": "返回 PNG 到 PDF",
    "gif-to-pdf": "返回 GIF 到 PDF",
    "tiff-to-pdf": "返回 TIFF 到 PDF",
    "bmp-to-pdf": "返回 BMP 到 PDF",
    "webp-to-pdf": "返回 WEBP 到 PDF",
    "heif-heic-to-pdf": "返回 HEIF/HEIC 到 PDF",
    "pdf-to-jpg": "返回PDF转JPG",
    "pdf-to-svg": "返回到 PDF 转 SVG",
    "pdf-to-png": "返回到 PDF 转 PNG",
    "pdf-to-gif": "返回到 PDF 转 GIF",
    "pdf-to-tiff": "返回到 PDF 转 TIFF",
    "pdf-to-bmp": "返回到 PDF 转 BMP",
    "pdf-to-webp": "返回到 PDF 转 WEBP",
    "pdf-to-heif-heic": "返回到 PDF 转 HEIF/HEIC",
  },
};


export const edit_page: _edit_page = {
  edit_page_titles: {
    jpg_to_pdf: "JPG 到 PDF 选项",
    png_to_pdf: "PNG 到 PDF 选项",
    gif_to_pdf: "GIF 到 PDF 选项",
    tiff_to_pdf: "TIFF 到 PDF 选项",
    bmp_to_pdf: "BMP 到 PDF 选项",
    svg_to_pdf: "SVG 到 PDF 选项",
    webp_to_pdf: "WebP 到 PDF 选项",
    heif_heic_to_pdf: "HEIF/HEIC 到 PDF 选项",
    pdf_to_jpg: "PDF转JPG选项",
    pdf_to_svg: "PDF 转 SVG 选项",
    pdf_to_png: "PDF 转 PNG 选项",
    pdf_to_gif: "PDF 转 GIF 选项",
    pdf_to_tiff: "PDF 转 TIFF 选项",
    pdf_to_bmp: "PDF 转 BMP 选项",
    pdf_to_webp: "PDF 转 WebP 选项",
    pdf_to_heif_heic: "PDF 转 HEIF/HEIC 选项",
  },
  loader_text: "请稍候...",
  add_more_button: "添加更多文件",
  action_buttons: {
    jpg_to_pdf: "转换为 PDF",
    png_to_pdf: "转换为 PDF",
    gif_to_pdf: "转换为 PDF",
    tiff_to_pdf: "转换为 PDF",
    bmp_to_pdf: "转换为 PDF",
    svg_to_pdf: "转换为 PDF",
    webp_to_pdf: "转换为 PDF",
    heif_heic_to_pdf: "转换为 PDF",
    pdf_to_jpg: "转换为JPG",
    pdf_to_svg: "转换为SVG",
    pdf_to_png: "转换为PNG",
    pdf_to_gif: "转换为GIF",
    pdf_to_tiff: "转换为TIFF",
    pdf_to_bmp: "转换为BMP",
    pdf_to_webp: "转换为WebP",
    pdf_to_heif_heic: "转换为HEIF/HEIC",
  },
  pages: "页",
  page: "页",
};


export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "文件为空，请选择一个有效的文件。",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "文件不是受支持的类型。",
    types: {
      PDF: "请选择一个有效的PDF文件。",
      JPG: "请选择一个有效的JPEG图片文件。",
      DOC: "请选择一个有效的Word文档文件。",
      DOCX: "请选择一个有效的Word文档文件。",
      XLS: "请选择一个有效的Excel电子表格文件。",
      XLSX: "请选择一个有效的Excel电子表格文件。",
      PPT: "请选择一个有效的PowerPoint演示文稿文件。",
      PPTX: "请选择一个有效的PowerPoint演示文稿文件。",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message: "文件缺少字体。请确保所有字体都嵌入在PDF文件中。",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message: "文件包含无效的图像数据。请确保所有图像格式正确。",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message: "文件存在安全风险，无法处理。请选择一个有效的文件。",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message: "您已超出允许的最大文件数。请删除一些文件并重试。",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请选择至少一个文件。",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后重试或联系支持人员。",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message: "网络错误，请检查您的互联网连接并重试。",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "请至少上传两个文件以合并。",
    code: "ERR_UPLOAD_COUNT",
  },
};
