import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../content";
import type { adBlockerContentType } from "./content";

export const tool: _tool = {
  JPG_to_PDF: {
    title: "JPG 转 PDF",
    seoTitle: "在线将 JPG 转换为 PDF - 免费转换器",
    description: "将 JPG 图像文件转换为 PDF 文档",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
    keywords: "将 JPG 转换为 PDF, JPG 转 PDF 转换器, 在线 JPG 转 PDF, 免费 JPG 转 PDF, JPG 图像转 PDF, 将图像转换为 PDF",
    features: [
      {
        title: "文件保护保证",
        description: "我们的 TLS 加密确保您的 JPEG 始终安全。您的文件对任何人都不可访问，我们在转换后会自动将其从服务器中删除，确保您的安心。"
      },
      {
        title: "快速简单的 JPG 转 PDF 工具",
        description: "只需将文件拖放到上面的指定区域，即可快速将其从 JPG 转换为 PDF。此外，您还可以自定义设置，例如边距、方向和大小。"
      },
      {
        title: "高质量转换",
        description: "PDFEquips 允许用户使用其先进的转换技术将图像转换为高质量的 PDF 文件。它保持 100% 的原始质量。"
      }
    ]
  },
  PNG_to_PDF: {
    title: "PNG 转 PDF",
    seoTitle: "在线将 PNG 转换为 PDF - 免费转换器",
    description: "将 PNG 图像文件转换为 PDF 文档",
    color: "#3498db",
    type: ".png",
    to: "/png-to-pdf",
    keywords: "将 PNG 转换为 PDF, PNG 转 PDF 转换器, 在线 PNG 转 PDF, 免费 PNG 转 PDF, PNG 图像转 PDF, 将图像转换为 PDF",
    features: [
      {
        title: "我们重视您的隐私",
        description: "除了您之外，任何人都无法查看您的文件——这正是应该的。PDFEquips 使用 TLS 加密确保所有文件传输的安全。所有文件均自动处理。"
      },
      {
        title: "保持 PNG 文件的原始分辨率",
        description: "您可以将 PNG 图像转换为 PDF 文件，有效地减少 PNG 图像的大小。通过 PDFEquips 的先进 PDF 转换技术，PNG 图像的原始分辨率得以保留，确保无质量损失。"
      },
      {
        title: "无需软件的转换",
        description: "将 PNG 转换为 PDF，无需任何软件。使用 PDFEquips，转换过程在云端进行，您可以从任何设备快速服务。只需上传、转换、放松即可。"
      }
    ]
  },
  GIF_to_PDF: {
    title: "GIF 转 PDF",
    seoTitle: "在线将 GIF 转换为 PDF - 免费转换器",
    description: "将 GIF 图像文件转换为 PDF 文档",
    color: "#636e72",
    type: ".gif",
    to: "/gif-to-pdf",
    keywords: "将 GIF 转换为 PDF, GIF 转 PDF 转换器, 在线 GIF 转 PDF, 免费 GIF 转 PDF, GIF 图像转 PDF, 将图像转换为 PDF",
    features: [
      {
        title: "快速的 GIF 转 PDF 转换器",
        description: "使用此有用的工具，只需几秒钟即可将 GIF 图像转换为 PDF 文档。只需上传您的动画 GIF 图像，自定义输出设置并保存文件。快速、方便且完全免费。"
      },
      {
        title: "无需登录",
        description: "无需登录即可访问我们的平台。我们尊重您的时间和隐私，提供便捷的转换服务。"
      },
      {
        title: "无需软件的转换",
        description: "将 GIF 转换为 PDF，无需任何软件。使用 PDFEquips，转换过程在云端进行，您可以从任何设备快速服务。只需上传、转换、放松即可。"
      }
    ]
  },
  TIFF_to_PDF: {
    title: "TIFF 转 PDF",
    seoTitle: "在线将 TIFF 转换为 PDF - 免费转换器",
    description: "将 TIFF 图像文件转换为 PDF 文档",
    color: "#e45453",
    type: ".tiff",
    to: "/tiff-to-pdf",
    keywords: "将 TIFF 转换为 PDF, TIFF 转 PDF 转换器, 在线 TIFF 转 PDF, 免费 TIFF 转 PDF, TIFF 图像转 PDF, 将图像转换为 PDF",
    features: [
      {
        title: "快速的 TIFF 转 PDF 转换器",
        description: "快速高效地将您的 TIFF 图像转换为 PDF 文档。我们的工具确保只需几次点击即可完成无缝转换过程。"
      },
      {
        title: "无需登录",
        description: "无需任何登录凭据即可轻松访问我们的平台。享受即时的 TIFF 转 PDF 转换服务，无需登录复杂。"
      },
      {
        title: "强大的云端转换",
        description: "体验强大的云端 TIFF 转 PDF 转换服务，可以从任何设备快速服务。只需上传 TIFF 文件、转换并轻松下载 PDF 文档。"
      }
    ]
  },
  BMP_to_PDF: {
    title: "BMP 转 PDF",
    seoTitle: "在线将 BMP 转换为 PDF - 免费转换器",
    description: "将 BMP 图像文件转换为 PDF 文档",
    color: "#573b26",
    type: ".bmp",
    to: "/bmp-to-pdf",
    keywords: "将 BMP 转换为 PDF, BMP 转 PDF 转换器, 在线 BMP 转 PDF, 免费 BMP 转 PDF, BMP 图像转 PDF, 将图像转换为 PDF",
    features: [
      {
        title: "快速转换",
        description: "通过快速的转换过程，快速将 BMP 图像转换为 PDF 文档。几秒钟内准备好您的 PDF 文件。"
      },
      {
        title: "强大的引擎",
        description: "体验强大的转换引擎，确保每次都能准确可靠地进行 BMP 转 PDF 转换，保持质量和完整性。"
      },
      {
        title: "安全处理",
        description: "我们的转换器优先考虑安全，确保所有 BMP 转 PDF 转换过程安全进行。您的文件在整个过程中都受到保护。"
      }
    ]
  },
  SVG_to_PDF: {
    title: "SVG 转 PDF",
    seoTitle: "在线将 SVG 转换为 PDF - 免费转换器",
    description: "将 SVG 图像文件转换为 PDF 文档",
    color: "#ffb338",
    type: ".svg",
    to: "/svg-to-pdf",
    keywords: "将 SVG 转换为 PDF, SVG 转 PDF 转换器, 在线 SVG 转 PDF, 免费 SVG 转 PDF, SVG 图像转 PDF, 将图像转换为 PDF",
    features: [
      {
        title: "重新排序 SVG",
        description: "在转换之前轻松重新排序 SVG 图像，以自定义 PDF 文档中的顺序。"
      },
      {
        title: "快速转换",
        description: "通过快速的转换过程，快速将 SVG 图像转换为 PDF 文档。几秒钟内准备好您的 PDF 文件。"
      },
      {
        title: "强大的引擎",
        description: "体验强大的转换引擎，确保每次都能准确可靠地进行 SVG 转 PDF 转换，保持质量和完整性。"
      }
    ]
  },
  WebP_to_PDF: {
    title: "WebP 转 PDF",
    seoTitle: "在线将 WebP 转换为 PDF - 免费转换器",
    description: "将 WebP 图像文件转换为 PDF 文档",
    color: "#6fc21f",
    type: ".webp",
    to: "/webp-to-pdf",
    keywords: "将 WebP 转换为 PDF, WebP 转 PDF 转换器, 在线 WebP 转 PDF, 免费 WebP 转 PDF, WebP 图像转 PDF, 将图像转换为 PDF",
    features: [
      {
        title: "高质量转换",
        description: "体验 WebP 图像到 PDF 文档的高质量转换，保留图像的分辨率和清晰度。"
      },
      {
        title: "轻松安排页面",
        description: "轻松安排 PDF 文档中的页面顺序，确保转换的 WebP 图像按所需顺序排列。"
      },
      {
        title: "多图像支持",
        description: "将多个 WebP 图像转换为一个 PDF 文档，便于图像的组织和共享。"
      }
    ]
  },
  HEIF_to_PDF: {
    title: "HEIF/HEIC 转 PDF",
    seoTitle: "在线将 HEIF 转换为 PDF - 免费转换器",
    description: "将 HEIF/HEIC 图像文件转换为 PDF 文档",
    color: "#c376b8",
    type: ".heif, .heic",
    to: "/heif-heic-to-pdf",
    keywords: "将 HEIF 转换为 PDF, HEIF 转 PDF 转换器, 在线 HEIF 转 PDF, 免费 HEIF 转 PDF, HEIF 图像转 PDF, 将图像转换为 PDF, 将 HEIC 转换为 PDF, HEIC 转 PDF 转换器, 在线 HEIC 转 PDF, 免费 HEIC 转 PDF, HEIC 图像转 PDF",
    features: [
      {
        title: "高质量转换",
        description: "高质量地将 HEIF/HEIC 图像转换为 PDF 文档，确保最佳的图像清晰度和分辨率。"
      },
      {
        title: "批量转换",
        description: "高效地将多个 HEIF/HEIC 图像一次性转换为一个 PDF 文档，为批量转换节省时间和精力。"
      },
      {
        title: "跨平台兼容性",
        description: "从任何设备或平台访问我们的转换器，轻松将 HEIF/HEIC 图像转换为 PDF 格式。"
      }
    ]
  },

  PDF_to_JPG: {
    title: "PDF 转 JPG",
    seoTitle: "将 PDF 转换为 JPG - 免费在线工具",
    description: "将 PDF 文件转换为 JPG 图像文件",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
    keywords: "将 PDF 转换为 JPG, PDF 转 JPG 转换器, 在线 PDF 转 JPG, 免费 PDF 转 JPG, PDF 文档转 JPG, 将 PDF 转换为图像",
    features: [
      {
        title: "快速简单的 PDF 转 JPG 工具",
        description: "只需将文件拖放到上面的指定区域，即可快速将其从 PDF 转换为 JPG。此外，您还可以自定义设置，例如边距、方向和大小。"
      },
      {
        title: "文件保护保证",
        description: "我们的 TLS 加密确保您的 PDF 始终安全。您的文件对任何人都不可访问，我们在转换后会自动将其从服务器中删除，确保您的安心。"
      },
      {
        title: "高质量转换",
        description: "PDFEquips 允许用户使用其先进的转换技术将 PDF 转换为高质量的 JPG 文件。它保持 100% 的原始质量。"
      }
    ]
  },
  PDF_to_PNG: {
    title: "PDF 转 PNG",
    seoTitle: "将 PDF 转换为 PNG - 免费在线工具",
    description: "将 PDF 文件转换为 PNG 图像文件",
    color: "#3498db",
    type: ".pdf",
    to: "/pdf-to-png",
    keywords: "将 PDF 转换为 PNG, PDF 转 PNG 转换器, 在线 PDF 转 PNG, 免费 PDF 转 PNG, PDF 文档转 PNG, 将 PDF 转换为图像",
    features: [
      {
        title: "用户友好界面",
        description: "我们的 PDF 转 PNG 转换器具有直观且易于使用的界面，使所有技能水平的用户都能无缝完成转换过程。"
      },
      {
        title: "保持图像质量",
        description: "享受高分辨率的 PNG 图像，而不会丧失任何质量。我们的转换器在转换过程中保留 PDF 图像的原始质量。"
      },
      {
        title: "批量转换",
        description: "高效地将多个 PDF 页面或文档转换为 PNG 图像。通过我们的批量转换功能节省时间和精力。"
      }
    ]
  },
  PDF_to_GIF: {
    title: "PDF 转 GIF",
    seoTitle: "将 PDF 转换为 GIF - 免费在线工具",
    description: "将 PDF 文件转换为 GIF 图像文件",
    color: "#636e72",
    type: ".pdf",
    to: "/pdf-to-gif",
    keywords: "将 PDF 转换为 GIF, PDF 转 GIF 转换器, 在线 PDF 转 GIF, 免费 PDF 转 GIF, PDF 文档转 GIF, 将 PDF 转换为图像",
    features: [
      {
        title: "图像提取",
        description: "从 PDF 文档中提取图像并将其转换为 GIF 格式，保留图像质量和透明度。"
      },
      {
        title: "可定制输出",
        description: "自定义 GIF 图像的输出设置，包括分辨率、帧率和调色板，以满足您的需求。"
      },
      {
        title: "多页支持",
        description: "将多页 PDF 文档转换为一系列 GIF 图像，保持每个 GIF 的页面顺序和顺序。"
      }
    ]
  },
  PDF_to_TIFF: {
    title: "PDF 转 TIFF",
    seoTitle: "将 PDF 转换为 TIFF - 免费在线工具",
    description: "将 PDF 文件转换为 TIFF 图像文件",
    color: "#e45453",
    type: ".pdf",
    to: "/pdf-to-tiff",
    keywords: "将 PDF 转换为 TIFF, PDF 转 TIFF 转换器, 在线 PDF 转 TIFF, 免费 PDF 转 TIFF, PDF 文档转 TIFF, 将 PDF 转换为图像",
    features: [
      {
        title: "强大的云端转换",
        description: "体验强大的云端 PDF 转 TIFF 转换服务，可以从任何设备快速服务。只需上传 PDF 文件、转换并轻松下载 TIFF 图像。"
      },
      {
        title: "无需登录",
        description: "无需任何登录凭据即可轻松访问我们的平台。享受即时的 PDF 转 TIFF 转换服务，无需登录复杂。"
      },
      {
        title: "快速的 PDF 转 TIFF 转换器",
        description: "快速高效地将您的 PDF 文档转换为 TIFF 图像。我们的工具确保只需几次点击即可完成无缝转换过程。"
      }
    ]
  },
  PDF_to_BMP: {
    title: "PDF 转 BMP",
    seoTitle: "将 PDF 转换为 BMP - 免费在线工具",
    description: "将 PDF 文件转换为 BMP 图像文件",
    color: "#573b26",
    type: ".pdf",
    to: "/pdf-to-bmp",
    keywords: "将 PDF 转换为 BMP, PDF 转 BMP 转换器, 在线 PDF 转 BMP, 免费 PDF 转 BMP, PDF 文档转 BMP, 将 PDF 转换为图像",
    features: [
      {
        title: "安全处理",
        description: "我们的转换器优先考虑安全，确保所有 PDF 转 BMP 转换过程安全进行。您的文件在整个过程中都受到保护。"
      },
      {
        title: "强大的引擎",
        description: "体验强大的转换引擎，确保每次都能准确可靠地进行 PDF 转 BMP 转换，保持质量和完整性。"
      },
      {
        title: "快速转换",
        description: "通过快速的转换过程，快速将 PDF 文档转换为 BMP 图像。几秒钟内准备好您的 BMP 文件。"
      }
    ]
  },
  PDF_to_SVG: {
    title: "PDF 转 SVG",
    seoTitle: "将 PDF 转换为 SVG - 免费在线工具",
    description: "将 PDF 文件转换为 SVG 矢量图像文件",
    color: "#ffb338",
    type: ".pdf",
    to: "/pdf-to-svg",
    keywords: "将 PDF 转换为 SVG, PDF 转 SVG 转换器, 在线 PDF 转 SVG, 免费 PDF 转 SVG, PDF 文档转 SVG, 将 PDF 转换为矢量图像",
    features: [
      {
        title: "矢量图形转换",
        description: "将 PDF 矢量图形转换为 SVG 格式，获得可缩放和高质量的图像，可在不损失质量的情况下调整大小。"
      },
      {
        title: "保留文本和图形",
        description: "在转换过程中保留 PDF 文件中的原始文本和图形，确保准确性和保真度。"
      },
      {
        title: "多页支持",
        description: "将多页 PDF 文档转换为多个 SVG 文件，保持每个 SVG 图像的页面顺序和顺序。"
      }
    ]
  },
  PDF_to_WebP: {
    title: "PDF 转 WebP",
    seoTitle: "将 PDF 转换为 WebP - 免费在线工具",
    description: "将 PDF 文件转换为 WebP 图像文件",
    color: "#6fc21f",
    type: ".pdf",
    to: "/pdf-to-webp",
    keywords: "将 PDF 转换为 WebP, PDF 转 WebP 转换器, 在线 PDF 转 WebP, 免费 PDF 转 WebP, PDF 文档转 WebP, 将 PDF 转换为图像",
    features: [
      {
        title: "图像提取",
        description: "从 PDF 文档中提取图像并将其转换为 WebP 格式，保留图像质量和透明度。"
      },
      {
        title: "高质量转换",
        description: "体验高质量的 PDF 转 WebP 转换，确保最佳的图像清晰度和分辨率。"
      },
      {
        title: "批量转换",
        description: "高效地将多个页面或文档从 PDF 转换为 WebP 格式，为批量转换节省时间和精力。"
      }
    ]
  },
  PDF_to_HEIF: {
    title: "PDF 转 HEIF/HEIC",
    seoTitle: "将 PDF 转换为 HEIF/HEIC - 免费在线工具",
    description: "将 PDF 文件转换为 HEIF/HEIC 图像文件",
    color: "#c376b8",
    type: ".pdf",
    to: "/pdf-to-heif-heic",
    keywords: "将 PDF 转换为 HEIF, PDF 转 HEIF 转换器, 在线 PDF 转 HEIF, 免费 PDF 转 HEIF, PDF 文档转 HEIF, 将 PDF 转换为图像, 将 PDF 转换为 HEIC, PDF 转 HEIC 转换器, 在线 PDF 转 HEIC, 免费 PDF 转 HEIC, PDF 文档转 HEIC",
    features: [
      {
        title: "图像提取",
        description: "从 PDF 文档中提取图像并将其转换为 HEIF/HEIC 格式，保留图像质量和透明度。"
      },
      {
        title: "高质量转换",
        description: "体验高质量的 PDF 转 HEIF/HEIC 转换，确保最佳的图像清晰度和分辨率。"
      },
      {
        title: "多格式支持",
        description: "将您的 PDF 文件转换为 HEIF/HEIC 格式以及其他图像格式，以满足您的偏好。"
      }
    ]
  },
  Image_to_PDF: {
    title: "图像转 PDF",
    seoTitle: "将图像转换为 PDF - 免费在线工具",
    description: "将图像文件（JPG、PNG、BMP、TIFF、GIF、SVG、WebP、HEIF）转换为 PDF 文档",
    color: "#3498db",
    type: "image",
    to: "/image-to-pdf",
    keywords: "将图像转换为 PDF, 图像转 PDF 转换器, 在线图像转 PDF, 免费图像转 PDF, JPG 转 PDF, PNG 转 PDF, BMP 转 PDF, TIFF 转 PDF, GIF 转 PDF, SVG 转 PDF, WebP 转 PDF, HEIF 转 PDF",
    features: [
      {
        title: "文件保护保证",
        description: "我们的 TLS 加密确保您的图像始终安全。您的文件对任何人都不可访问，我们在转换后会自动将其从服务器中删除，确保您的安心。"
      },
      {
        title: "快速简单的图像转 PDF 工具",
        description: "只需将文件拖放到上面的指定区域，即可快速将其从各种图像格式转换为 PDF。此外，您还可以自定义设置，例如边距、方向和大小。"
      },
      {
        title: "高质量转换",
        description: "PDFEquips 允许用户使用其先进的转换技术将图像转换为高质量的 PDF 文件。它保持 100% 的原始质量。"
      }
    ]
  },
  PDF_to_Image: {
    title: "PDF 转图像",
    seoTitle: "将 PDF 转换为图像 - 免费在线工具",
    description: "将 PDF 文档转换为图像文件（JPG、PNG、BMP、TIFF、GIF、SVG、WebP、HEIF）",
    color: "#e74c3c",
    type: ".pdf",
    to: "/pdf-to-image",
    keywords: "将 PDF 转换为图像, PDF 转图像转换器, 在线 PDF 转图像, 免费 PDF 转图像, PDF 文档转图像, PDF 转 JPG, PDF 转 PNG, PDF 转 BMP, PDF 转 TIFF, PDF 转 GIF, PDF 转 SVG, PDF 转 WebP, PDF 转 HEIF",
    features: [
      {
        title: "文件保护保证",
        description: "我们的 TLS 加密确保您的 PDF 始终安全。您的文件对任何人都不可访问，我们在转换后会自动将其从服务器中删除，确保您的安心。"
      },
      {
        title: "快速简单的 PDF 转图像工具",
        description: "只需将您的 PDF 文件拖放到上面的指定区域，即可快速将其转换为各种图像格式。此外，您还可以选择所需的图像格式和质量设置。"
      },
      {
        title: "高质量转换",
        description: "PDFEquips 允许用户使用其先进的转换技术将 PDF 文档转换为高质量的图像文件。它保持 100% 的原始质量。"
      }
    ]
  }
}



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
  },
  cta: "查看套餐",
  imageToPDFOptionsContent: {
    page_orientation: "页面方向",
    portrait: "纵向",
    landscape: "横向",
    page_size: "页面大小",
    margins: "边距",
    margins_none: "无",
    margins_small: "小",
    margins_medium: "中",
    margins_large: "大",
    merge_all: "将所有图像合并到一个PDF文件中",
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
  PASSWORD_REQUIRED: {
    message: "PDF 需要密码。",
    code: "PASSWORD_REQUIRED",
  },
  INCORRECT_PASSWORD: {
    message: "您输入的密码不正确。",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "您已达到每日使用上限。请升级套餐，继续无中断使用此功能。",
    code: "MAX_DAILY_USAGE",
  },
  MAX_PAGES_EXCEEDED: {
    message: "PDF 超过最大页数限制 50 页。",
    code: "ERR_MAX_PAGES_EXCEEDED",
  },
  MAX_IMAGES_EXCEEDED: {
    message:
      "您一次最多只能转换 15 张图片。升级您的方案即可在一个 PDF 中转换更多图片。",
    code: "ERR_MAX_IMAGES_EXCEEDED",
  },
  IMAGE_TOO_LARGE: {
    message:
      "一张或多张图片超过了 20 MB 的大小限制。升级您的方案以上传更大的图片。",
    code: "ERR_IMAGE_TOO_LARGE",
  },
  TOTAL_SIZE_EXCEEDED: {
    message:
      "上传的文件总大小超过了允许的限制。升级您的方案以获得更高的上传额度。",
    code: "ERR_TOTAL_SIZE_EXCEEDED",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "检测到广告拦截器",
  description: "我们注意到您正在使用广告拦截器。请考虑关闭它，或升级到高级版享受无广告体验！",
  reloadPage: "重新加载页面",
  upgradeToPremium: "升级到高级版"
};