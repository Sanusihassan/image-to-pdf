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
    features: [
      {
        title: "文件的保障保护",
        description: "我们的TLS加密确保您的JPEG文件始终安全。您的文件对任何人都不可访问，并且在转换后我们会自动从服务器中删除它们，以增加您的安心。"
      },
      {
        title: "快速简便的JPG转PDF工具",
        description: "只需将您的文件拖放到上面的指定区域，即可快速将其从JPG转换为PDF。此外，您可以自定义边距、方向和大小等设置。"
      },
      {
        title: "高质量转换",
        description: "PDFEquips允许用户使用其先进的转换技术将图像转换为高质量的PDF文件。它保持100%的原始质量。"
      }
    ]
  },
  PNG_to_PDF: {
    title: "PNG转PDF",
    seoTitle: "在线PNG转PDF - 免费PNG转PDF转换器",
    description: "将PNG图像文件转换为PDF文档",
    color: "#3498db",
    type: ".png",
    to: "/png-to-pdf",
    features: [
      {
        title: "我们优先考虑您的隐私",
        description: "除了您自己，没有人能看到您的文件——这是理所当然的。PDFEquips在所有文件传输中使用TLS加密来确保安全，所有文件都会自动处理。"
      },
      {
        title: "保留PNG文件的原始分辨率",
        description: "您可以将PNG图像转换为PDF文件，有效减小PNG图像的大小。借助PDFEquips的先进PDF转换技术，保留PNG图像的原始分辨率，确保完全不会失去任何质量。"
      },
      {
        title: "无需软件即可转换",
        description: "要将PNG转换为PDF，您无需任何软件。借助PDFEquips，转换在云端进行，从任何设备都可以快速进行服务。只需上传、转换，然后坐下来放松。"
      }
    ]
  },
  GIF_to_PDF: {
    title: "GIF转PDF",
    seoTitle: "在线GIF转PDF - 免费GIF转PDF转换器",
    description: "将GIF图像文件转换为PDF文档",
    color: "#636e72",
    type: ".gif",
    to: "/gif-to-pdf",
    features: [
      {
        title: "快速GIF转PDF转换器",
        description: "使用这个实用工具，将GIF图像转换为PDF文档只需几秒钟。只需上传您的动态GIF图像，自定义输出设置，保存文件。快速、便捷、完全免费。"
      },
      {
        title: "无需登录",
        description: "无需登录即可访问我们的平台。我们尊重您的时间和隐私，为您提供无缝转换服务。"
      },
      {
        title: "无需软件即可转换",
        description: "要将GIF转换为PDF，您无需任何软件。借助PDFEquips，转换在云端进行，从任何设备都可以快速进行服务。只需上传、转换，然后坐下来放松。"
      }
    ]
  },
  TIFF_to_PDF: {
    title: "TIFF转PDF",
    seoTitle: "在线TIFF转PDF - 免费TIFF转PDF转换器",
    description: "将TIFF图像文件转换为PDF文档",
    color: "#e45453",
    type: ".tiff",
    to: "/tiff-to-pdf",
    features: [
      {
        title: "快速TIFF转PDF转换器",
        description: "快速高效地将您的TIFF图像转换为PDF文档。我们的工具确保在几次点击内实现无缝转换流程。"
      },
      {
        title: "无需登录",
        description: "无需任何登录凭据即可轻松访问我们的平台。享受即时的TIFF到PDF转换服务，无需任何登录麻烦。"
      },
      {
        title: "强大的基于云的转换",
        description: "体验强大的基于云的TIFF到PDF转换，为您提供快速的服务。只需上传您的TIFF文件，转换并下载您的PDF文档，无需费力。"
      }
    ]
  },
  BMP_to_PDF: {
    title: "BMP转PDF",
    seoTitle: "在线BMP转PDF - 免费BMP转PDF转换器",
    description: "将BMP图像文件转换为PDF文档",
    color: "#573b26",
    type: ".bmp",
    to: "/bmp-to-pdf",
    features: [
      {
        title: "快速转换",
        description: "使用我们的快速转换流程快速将BMP图像转换为PDF文档。在几秒钟内准备好您的PDF文件。"
      },
      {
        title: "强大的引擎",
        description: "体验一款强大的转换引擎，确保每次BMP转PDF转换都准确可靠，保持质量和完整性。"
      },
      {
        title: "安全处理",
        description: "我们的转换器优先考虑安全性，确保所有BMP到PDF的转换都经过安全处理。在整个过程中，您的文件都受到保护。"
      }
    ]
  },
  SVG_to_PDF: {
    title: "SVG转PDF",
    seoTitle: "在线SVG转PDF - 免费SVG转PDF转换器",
    description: "将SVG图像文件转换为PDF文档",
    color: "#ffb338",
    type: ".svg",
    to: "/svg-to-pdf",
    features: [
      {
        title: "重新排序SVG",
        description: "在转换之前轻松重新排序SVG图像，以定制PDF文档中的顺序。"
      },
      {
        title: "快速转换",
        description: "使用我们的快速转换流程快速将SVG图像转换为PDF文档。在几秒钟内准备好您的PDF文件。"
      },
      {
        title: "强大的引擎",
        description: "体验一款强大的转换引擎，确保每次SVG到PDF转换都准确可靠，保持质量和完整性。"
      }
    ]
  },
  WebP_to_PDF: {
    title: "WebP转PDF",
    seoTitle: "在线WebP转PDF - 免费WebP转PDF转换器",
    description: "将WebP图像文件转换为PDF文档",
    color: "#6fc21f",
    type: ".webp",
    to: "/webp-to-pdf",
    features: [
      {
        title: "高质量转换",
        description: "体验将WebP图像转换为PDF文档的高质量转换，保留图像分辨率和清晰度。"
      },
      {
        title: "轻松排列页面",
        description: "轻松排列PDF文档中页面的顺序，确保转换后的WebP图像的期望顺序。"
      },
      {
        title: "多图像支持",
        description: "将多个WebP图像转换为单个PDF文档，便于图像的组织和共享。"
      }
    ]
  },
  HEIF_to_PDF: {
    title: "HEIF/HEIC转PDF",
    seoTitle: "在线HEIF/HEIC转PDF - 免费HEIF/HEIC转PDF转换器",
    description: "将HEIF/HEIC图像文件转换为PDF文档",
    color: "#c376b8",
    type: ".heif, .heic",
    to: "/heif-heic-to-pdf",
    features: [
      {
        title: "高质量转换",
        description: "将HEIF/HEIC图像转换为高质量PDF文档，确保图像清晰度和分辨率优化。"
      },
      {
        title: "批量转换",
        description: "有效地将多个HEIF/HEIC图像一次性转换为单个PDF文档，节省批量转换的时间和精力。"
      },
      {
        title: "跨平台兼容性",
        description: "从任何设备或平台访问我们的转换器，无缝将HEIF/HEIC图像转换为PDF格式。"
      }
    ]
  },
  PDF_to_JPG: {
    title: "PDF转JPG",
    seoTitle: "PDF转JPG - 将PDF文件转换为JPG图像文件",
    description: "将PDF文件转换为JPG图像文件",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
    features: [
      {
        title: "快速简单的PDF转JPG工具",
        description: "只需将文件拖放到上面指定的区域即可快速将其从PDF转换为JPG。此外，您还可以自定义设置，如页边距、方向和大小。"
      },
      {
        title: "文件保护保证",
        description: "我们的TLS加密确保您的PDF文件始终安全。您的文件对任何人都不可见，我们在转换后会自动从服务器中删除它们，以增加安心感。"
      },
      {
        title: "高质量转换",
        description: "PDFEquips允许用户使用其先进的转换技术将PDF转换为高质量的JPG文件。它保持了100%的原始质量。"
      }
    ]
  },
  PDF_to_PNG: {
    title: "PDF 转 PNG",
    seoTitle: "在线将 PDF 转换为 PNG - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 PNG 图像文件",
    color: "#3498db",
    type: ".pdf",
    to: "/pdf-to-png",
    features: [
      {
        title: "用户友好的界面",
        description: "我们的PDF到PNG转换器拥有直观且易于使用的界面，使转换过程对各种技能水平的用户都变得轻松无缝。"
      },
      {
        title: "保留图像质量",
        description: "在转换过程中保留高分辨率的PNG图像，不会降低质量。我们的转换器在转换过程中保持PDF图像的原始质量。"
      },
      {
        title: "批量转换",
        description: "一次性将多个PDF页面或文档转换为PNG图像。使用我们简化的批量转换功能节省时间和精力。"
      }
    ]
  },

  PDF_to_GIF: {
    title: "PDF 转 GIF",
    seoTitle: "在线将 PDF 转换为 GIF - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 GIF 图像文件",
    color: "#636e72",
    type: ".pdf",
    to: "/pdf-to-gif",
    features: [
      {
        title: "图像提取",
        description: "从PDF文档中提取图像并将其转换为GIF格式，保留图像质量和透明度。"
      },
      {
        title: "可定制输出",
        description: "自定义GIF图像的输出设置，包括分辨率、帧速率和调色板，以满足您的需求。"
      },
      {
        title: "多页支持",
        description: "将多页PDF文档转换为一系列GIF图像，保持每个GIF图像的页面顺序和顺序。"
      }
    ]
  },

  PDF_to_TIFF: {
    title: "PDF 转 TIFF",
    seoTitle: "在线将 PDF 转换为 TIFF - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 TIFF 图像文件",
    color: "#e45453",
    type: ".pdf",
    to: "/pdf-to-tiff",
    features: [
      {
        title: "强大的基于云的转换",
        description: "体验强大的基于云的PDF到TIFF转换，为您提供快速的服务。只需上传您的PDF文档，转换并下载您的TIFF图像，毫不费力。"
      },
      {
        title: "无需登录",
        description: "无需任何登录凭据即可轻松访问我们的平台。享受即时的PDF到TIFF转换服务，无需任何登录麻烦。"
      },
      {
        title: "快速PDF到TIFF转换器",
        description: "快速高效地将您的PDF文档转换为TIFF图像。我们的工具确保在几次点击内实现无缝转换流程。"
      }
    ]
  },
  PDF_to_BMP: {
    title: "PDF 转 BMP",
    seoTitle: "在线将 PDF 转换为 BMP - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 BMP 图像文件",
    color: "#573b26",
    type: ".pdf",
    to: "/pdf-to-bmp",
    features: [
      {
        title: "安全处理",
        description: "我们的转换器优先考虑安全性，确保所有PDF到BMP的转换都经过安全处理。在整个过程中，您的文件都受到保护。"
      },
      {
        title: "强大的引擎",
        description: "体验一款强大的转换引擎，确保每次PDF到BMP的转换都准确可靠，保持质量和完整性。"
      },
      {
        title: "快速转换",
        description: "使用我们的快速转换流程快速将PDF文档转换为BMP图像。在几秒钟内准备好您的BMP文件。"
      }
    ]
  },

  PDF_to_SVG: {
    title: "PDF 转 SVG",
    seoTitle: "在线将 PDF 转换为 SVG - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 SVG 矢量图像文件",
    color: "#ffb338",
    type: ".pdf",
    to: "/pdf-to-svg",
    features: [
      {
        title: "矢量图形转换",
        description: "将PDF矢量图形转换为SVG格式，以获得可缩放和高质量的图像，无需损失质量。"
      },
      {
        title: "保留文本和图形",
        description: "在转换过程中保留PDF文件的原始文本和图形，以确保准确性和保真度。"
      },
      {
        title: "多页支持",
        description: "将多页PDF文档转换为多个SVG文件，保持每个SVG图像的页面顺序和顺序。"
      }
    ]
  },

  PDF_to_WebP: {
    title: "PDF 转 WebP",
    seoTitle: "在线将 PDF 转换为 WebP - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 WebP 图像文件",
    color: "#6fc21f",
    type: ".pdf",
    to: "/pdf-to-webp",
    features: [
      {
        title: "图像提取",
        description: "从PDF文档中提取图像并将其转换为WebP格式，保留图像质量和透明度。"
      },
      {
        title: "高质量转换",
        description: "体验将PDF文档转换为WebP图像的高质量转换，确保图像清晰度和分辨率优化。"
      },
      {
        title: "批量转换",
        description: "一次性将多个页面或文档从PDF转换为WebP格式，节省批量转换的时间和精力。"
      }
    ]
  },

  PDF_to_HEIF: {
    title: "PDF 转 HEIF/HEIC",
    seoTitle: "在线将 PDF 转换为 HEIF/HEIC - 免费 PDF 转图像转换器",
    description: "将 PDF 文件转换为 HEIF/HEIC 图像文件",
    color: "#c376b8",
    type: ".pdf",
    to: "/pdf-to-heif-heic",
    features: [
      {
        title: "图像提取",
        description: "从PDF文档中提取图像并将其转换为HEIF/HEIC格式，保留图像质量和透明度。"
      },
      {
        title: "高质量转换",
        description: "体验将PDF文件转换为HEIF/HEIC图像的高质量转换，确保图像清晰度和分辨率优化。"
      },
      {
        title: "多格式支持",
        description: "将您的PDF文件转换为HEIF/HEIC格式以及其他图像格式，以满足您的需求。"
      }
    ]
  },
  Image_to_PDF: {
    title: "图片转PDF",
    seoTitle: "在线图片转PDF - 免费图片转PDF转换器",
    description: "将图片文件（JPG、PNG、BMP、TIFF、GIF、SVG、WebP、HEIF）转换为PDF文档",
    color: "#3498db",
    type: "image",
    to: "/image-to-pdf",
    features: [
      {
        title: "文件保护保证",
        description: "我们的TLS加密确保您的图片始终安全。您的文件对任何人都不可访问，我们在转换后会自动从服务器上删除，为您带来额外的安心感。"
      },
      {
        title: "快速简便的图片转PDF工具",
        description: "只需将文件拖放到上方指定区域，即可快速将各种图片格式转换为PDF。此外，您还可以自定义设置，如边距、方向和尺寸。"
      },
      {
        title: "高质量转换",
        description: "PDFEquips使用先进的转换技术，允许用户将图片转换为高质量的PDF文件。它能保持100%的原始质量。"
      }
    ]
  },

  PDF_to_Image: {
    title: "PDF转图片",
    seoTitle: "在线PDF转图片 - 免费PDF转图片转换器",
    description: "将PDF文档转换为图片文件（JPG、PNG、BMP、TIFF、GIF、SVG、WebP、HEIF）",
    color: "#e74c3c",
    type: ".pdf",
    to: "/pdf-to-image",
    features: [
      {
        title: "文件保护保证",
        description: "我们的TLS加密确保您的PDF始终安全。您的文件对任何人都不可访问，我们在转换后会自动从服务器上删除，为您带来额外的安心感。"
      },
      {
        title: "快速简便的PDF转图片工具",
        description: "只需将PDF文件拖放到上方指定区域，即可快速将其转换为各种图片格式。此外，您还可以选择所需的图片格式和质量设置。"
      },
      {
        title: "高质量转换",
        description: "PDFEquips使用先进的转换技术，允许用户将PDF文档转换为高质量的图片文件。它能保持100%的原始质量。"
      }
    ]
  }
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
    "pdf-to-jpg": [
      "PDF文件已转换为JPG！",
      "PDF文件已转换为JPG！"
    ],
    "pdf-to-svg": [
      "PDF文件已转换为SVG！",
      "PDF文件已转换为SVG！"
    ],
    "pdf-to-png": [
      "PDF文件已转换为PNG！",
      "PDF文件已转换为PNG！"
    ],
    "pdf-to-gif": [
      "PDF文件已转换为GIF！",
      "PDF文件已转换为GIF！"
    ],
    "pdf-to-tiff": [
      "PDF文件已转换为TIFF！",
      "PDF文件已转换为TIFF！"
    ],
    "pdf-to-bmp": [
      "PDF文件已转换为BMP！",
      "PDF文件已转换为BMP！"
    ],
    "pdf-to-webp": [
      "PDF文件已转换为WEBP！",
      "PDF文件已转换为WEBP！"
    ],
    "pdf-to-heif-heic": [
      "PDF文件已转换为HEIF/HEIC！",
      "PDF文件已转换为HEIF/HEIC！"
    ],
    "image-to-pdf": [
      "图片文件已转换为PDF！",
      "图片文件已转换为PDF！"
    ],
    "pdf-to-image": [
      "PDF文件已转换为图片！",
      "PDF文件已转换为图片！"
    ]
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
    "pdf-to-jpg": [
      "下载转换后的JPG文件",
      "下载转换后的JPG文件"
    ],
    "pdf-to-svg": [
      "下载转换后的SVG文件",
      "下载转换后的SVG文件"
    ],
    "pdf-to-png": [
      "下载转换后的PNG文件",
      "下载转换后的PNG文件"
    ],
    "pdf-to-gif": [
      "下载转换后的GIF文件",
      "下载转换后的GIF文件"
    ],
    "pdf-to-tiff": [
      "下载转换后的TIFF文件",
      "下载转换后的TIFF文件"
    ],
    "pdf-to-bmp": [
      "下载转换后的BMP文件",
      "下载转换后的BMP文件"
    ],
    "pdf-to-webp": [
      "下载转换后的WEBP文件",
      "下载转换后的WEBP文件"
    ],
    "pdf-to-heif-heic": [
      "下载转换后的HEIF/HEIC文件",
      "下载转换后的HEIF/HEIC文件"
    ],
    "image-to-pdf": [
      "下载转换后的PDF文件",
      "下载转换后的PDF文件"
    ],
    "pdf-to-image": [
      "下载转换后的图片文件",
      "下载转换后的图片文件"
    ]
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
    "pdf-to-svg": "返回PDF转SVG",
    "pdf-to-png": "返回PDF转PNG",
    "pdf-to-gif": "返回PDF转GIF",
    "pdf-to-tiff": "返回PDF转TIFF",
    "pdf-to-bmp": "返回PDF转BMP",
    "pdf-to-webp": "返回PDF转WEBP",
    "pdf-to-heif-heic": "返回PDF转HEIF/HEIC",
    "image-to-pdf": "返回图片转PDF",
    "pdf-to-image": "返回PDF转图片"
  }
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
    pdf_to_svg: "PDF转SVG选项",
    pdf_to_png: "PDF转PNG选项",
    pdf_to_gif: "PDF转GIF选项",
    pdf_to_tiff: "PDF转TIFF选项",
    pdf_to_bmp: "PDF转BMP选项",
    pdf_to_webp: "PDF转WEBP选项",
    pdf_to_heif_heic: "PDF转HEIF/HEIC选项",
    image_to_pdf: "图片转PDF选项",
    pdf_to_image: "PDF转图片选项"
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
    pdf_to_webp: "转换为WEBP",
    pdf_to_heif_heic: "转换为HEIF/HEIC",
    image_to_pdf: "转换为PDF",
    pdf_to_image: "转换为图片"
  },
  pages: "页",
  page: "页",
  options_content: {
    image_to_pdf: {
      info: "从下拉菜单中选择您要转换为的图像格式:",
      placeholder: "选择图像格式..."
    }
  }
};


export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};


export const footer: _footer = {
  brand: "PDFEquips",
  terms: "条款",
  conditions: "条件",
  privacy_policy: "隐私政策",
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
