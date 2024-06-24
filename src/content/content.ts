export type toType = "/jpg-to-pdf" |
  "/svg-to-pdf" |
  "/png-to-pdf" |
  "/gif-to-pdf" |
  "/tiff-to-pdf" |
  "/bmp-to-pdf" |
  "/webp-to-pdf" |
  "/heif-heic-to-pdf" |
  "/pdf-to-jpg" |
  "/pdf-to-svg" |
  "/pdf-to-png" |
  "/pdf-to-gif" |
  "/pdf-to-tiff" |
  "/pdf-to-bmp" |
  "/pdf-to-webp" |
  "/pdf-to-heif-heic" | "/image-to-pdf" | "/pdf-to-image";
type ToolType = {
  title: string;
  seoTitle: string;
  description: string;
  color: string;
  type: string;
  to: toType;
  features: {
    title: string;
    description: string;
  }[]
};

type Tool = {
  JPG_to_PDF: ToolType;
  PNG_to_PDF: ToolType;
  GIF_to_PDF: ToolType;
  TIFF_to_PDF: ToolType;
  BMP_to_PDF: ToolType;
  SVG_to_PDF: ToolType;
  WebP_to_PDF: ToolType;
  HEIF_to_PDF: ToolType;
  PDF_to_JPG: ToolType;
  PDF_to_PNG: ToolType;
  PDF_to_GIF: ToolType;
  PDF_to_TIFF: ToolType;
  PDF_to_BMP: ToolType;
  PDF_to_SVG: ToolType;
  PDF_to_WebP: ToolType;
  PDF_to_HEIF: ToolType;
  Image_to_PDF: ToolType;
  PDF_to_Image: ToolType;
};
export const tool: Tool = {
  JPG_to_PDF: {
    title: "JPG to PDF",
    seoTitle: "Convert JPG to PDF Online - Free JPG to PDF Converter",
    description: "Convert JPG image files to PDF documents",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
    features: [
      {
        title: "Guaranteed protection for files",
        description: "Our TLS encryption ensures constant security for your JPEGs Your files are inaccessible to anyone, and we automatically delete them from our servers after conversion for added peace of mind"
      },
      {
        title: "Fast and simple tool to convert JPG to PDF",
        description: "Simply drag and drop your file into the designated area above to quickly convert it from JPG to PDF Additionally, you can customize settings such as margin, orientation, and size"
      },
      {
        title: "High-quality conversion",
        description: "PDFEquips allows users to transform images into high-quality PDF files with its advanced conversion technologies It maintains 100% of the original quality"
      }
    ]
  },
  PNG_to_PDF: {
    title: "PNG to PDF",
    seoTitle: "Convert PNG to PDF Online - Free PNG to PDF Converter",
    description: "Convert PNG image files to PDF documents",
    color: "#3498db",
    type: ".png",
    to: "/png-to-pdf",
    features: [
      {
        title: "We prioritize your privacy",
        description: "No one sees your files but you—as it should be. PDFEquips Uses TLS encryption for security in all file transfers All files are processed automatically"
      },
      {
        title: "Keep the original resolution for PNG files",
        description: "You can convert PNG images to PDF files, effectively reducing the size of the PNG images With the advanced PDF conversion technologies from PDFEquips, the original resolution of the PNG images is preserved, ensuring no loss of quality at all"
      },
      {
        title: "Conversion without the need for software",
        description: "To convert your PNG to PDF, you don't need any software. With PDFEquips, the conversion happens in the cloud for quick service from any device Just upload, convert, sit back and relax."
      }
    ]
  },
  GIF_to_PDF: {
    title: "GIF to PDF",
    seoTitle: "Convert GIF to PDF Online - Free GIF to PDF Converter",
    description: "Convert GIF image files to PDF documents",
    color: "#636e72",
    type: ".gif",
    to: "/gif-to-pdf",
    features: [
      {
        title: "Fast GIF to PDF Converter",
        description: "With this useful tool, transforming a GIF image into a PDF document only takes a few seconds Simply upload your animated GIF image, customize the output settings, and save your file It's fast, convenient, and completely free"
      },
      {
        title: "No need to log in",
        description: "Access our platform without login complications We respect your time and privacy by providing seamless conversion services at your fingertips"
      },
      {
        title: "Conversion without the need for software",
        description: "To convert your GIF to PDF, you don't need any software. With PDFEquips, the conversion happens in the cloud for quick service from any device. Just upload, convert, sit back, and relax."
      }
    ]
  },
  TIFF_to_PDF: {
    title: "TIFF to PDF",
    seoTitle: "Convert TIFF to PDF Online - Free TIFF to PDF Converter",
    description: "Convert TIFF image files to PDF documents",
    color: "#e45453",
    type: ".tiff",
    to: "/tiff-to-pdf",
    features: [
      {
        title: "Fast TIFF to PDF Converter",
        description: "Convert your TIFF images into PDF documents quickly and efficiently. Our tool ensures a seamless conversion process in just a few clicks."
      },
      {
        title: "No Login Required",
        description: "Access our platform hassle-free without the need for any login credentials. Enjoy instant TIFF to PDF conversion services without any login complications."
      },
      {
        title: "Robust Cloud-Based Conversion",
        description: "Experience robust cloud-based TIFF to PDF conversion for rapid service from any device. Simply upload your TIFF files, convert, and download your PDF documents effortlessly."
      }
    ]
  },
  BMP_to_PDF: {
    title: "BMP to PDF",
    seoTitle: "Convert BMP to PDF Online - Free BMP to PDF Converter",
    description: "Convert BMP image files to PDF documents",
    color: "#573b26",
    type: ".bmp",
    to: "/bmp-to-pdf",
    features: [
      {
        title: "Fast Conversion",
        description: "Quickly convert BMP images to PDF documents with our fast conversion process. Get your PDF files ready in seconds."
      },
      {
        title: "Robust Engine",
        description: "Experience a robust conversion engine that ensures accurate and reliable BMP to PDF conversion every time, maintaining quality and integrity."
      },
      {
        title: "Secure Processing",
        description: "Our converter prioritizes security, ensuring all BMP to PDF conversions are processed securely. Your files are protected throughout the process."
      }
    ]
  },
  SVG_to_PDF: {
    title: "SVG to PDF",
    seoTitle: "Convert SVG to PDF Online - Free SVG to PDF Converter",
    description: "Convert SVG image files to PDF documents",
    color: "#ffb338",
    type: ".svg",
    to: "/svg-to-pdf",
    features: [
      {
        title: "Reorder SVGs",
        description: "Easily reorder SVG images before conversion to customize the sequence in your PDF document."
      },
      {
        title: "Fast Conversion",
        description: "Quickly convert SVG images to PDF documents with our fast conversion process. Get your PDF files ready in seconds."
      },
      {
        title: "Robust Engine",
        description: "Experience a robust conversion engine that ensures accurate and reliable SVG to PDF conversion every time, maintaining quality and integrity."
      }
    ]
  },
  WebP_to_PDF: {
    title: "WebP to PDF",
    seoTitle: "Convert WebP to PDF Online - Free WebP to PDF Converter",
    description: "Convert WebP image files to PDF documents",
    color: "#6fc21f",
    type: ".webp",
    to: "/webp-to-pdf",
    features: [
      {
        title: "High-Quality Conversion",
        description: "Experience high-quality conversion of WebP images to PDF documents, preserving image resolution and clarity."
      },
      {
        title: "Easily Arrange Pages",
        description: "Arrange the order of pages in your PDF document with ease, ensuring the desired sequence for your converted WebP images."
      },
      {
        title: "Multi-Image Support",
        description: "Convert multiple WebP images into a single PDF document, allowing for easy organization and sharing of images."
      }
    ]
  },
  HEIF_to_PDF: {
    title: "HEIF/HEIC to PDF",
    seoTitle: "Convert HEIF/HEIC to PDF Online - Free HEIF/HEIC to PDF Converter",
    description: "Convert HEIF/HEIC image files to PDF documents",
    color: "#c376b8",
    type: ".heif, .heic",
    to: "/heif-heic-to-pdf",
    features: [
      {
        title: "High-Quality Conversion",
        description: "Convert HEIF/HEIC images to PDF documents with high quality, ensuring optimal image clarity and resolution."
      },
      {
        title: "Batch Conversion",
        description: "Efficiently convert multiple HEIF/HEIC images into a single PDF document in one go, saving time and effort for bulk conversions."
      },
      {
        title: "Cross-Platform Compatibility",
        description: "Access our converter from any device or platform to convert HEIF/HEIC images to PDF format seamlessly."
      }
    ]
  },
  PDF_to_JPG: {
    title: "PDF to JPG",
    seoTitle: "Convert PDF to JPG Online - Free PDF to Image Converter",
    description: "Convert PDF files to JPG image files",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
    features: [
      {
        title: "Fast and simple tool to convert PDF to JPG",
        description: "Simply drag and drop your file into the designated area above to quickly convert it from PDF to JPG. Additionally, you can customize settings such as margin, orientation, and size."
      },
      {
        title: "Guaranteed protection for files",
        description: "Our TLS encryption ensures constant security for your PDFs. Your files are inaccessible to anyone, and we automatically delete them from our servers after conversion for added peace of mind."
      },
      {
        title: "High-quality conversion",
        description: "PDFEquips allows users to transform PDFs into high-quality JPG files with its advanced conversion technologies. It maintains 100% of the original quality."
      }
    ]
  },
  PDF_to_PNG: {
    title: "PDF to PNG",
    seoTitle: "Convert PDF to PNG Online - Free PDF to Image Converter",
    description: "Convert PDF files to PNG image files",
    color: "#3498db",
    type: ".pdf",
    to: "/pdf-to-png",
    features: [
      {
        title: "User-Friendly Interface",
        description: "Our PDF-to-PNG converter boasts an intuitive and easy-to-use interface, making the conversion process seamless for users of all skill levels."
      },
      {
        title: "Retain Image Quality",
        description: "Enjoy high-resolution PNG images without any loss in quality. Our converter preserves the original quality of your PDF images during the conversion process."
      },
      {
        title: "Batch Conversion",
        description: "Efficiently convert multiple PDF pages or documents into PNG images in one go. Save time and effort with our streamlined batch conversion feature."
      }
    ]
  },

  PDF_to_GIF: {
    title: "PDF to GIF",
    seoTitle: "Convert PDF to GIF Online - Free PDF to Image Converter",
    description: "Convert PDF files to GIF image files",
    color: "#636e72",
    type: ".pdf",
    to: "/pdf-to-gif",
    features: [
      {
        title: "Image Extraction",
        description: "Extract images from PDF documents and convert them to GIF format, preserving image quality and transparency."
      },
      {
        title: "Customizable Output",
        description: "Customize the output settings for your GIF images, including resolution, frame rate, and color palette, to suit your needs."
      },
      {
        title: "Multi-Page Support",
        description: "Convert multi-page PDF documents into a series of GIF images, maintaining the sequence and order of pages for each GIF."
      }
    ]
  },
  PDF_to_TIFF: {
    title: "PDF to TIFF",
    seoTitle: "Convert PDF to TIFF Online - Free PDF to Image Converter",
    description: "Convert PDF files to TIFF image files",
    color: "#e45453",
    type: ".pdf",
    to: "/pdf-to-tiff",
    features: [
      {
        title: "Robust Cloud-Based Conversion",
        description: "Experience robust cloud-based PDF to TIFF conversion for rapid service from any device. Simply upload your PDF documents, convert, and download your TIFF images effortlessly."
      },
      {
        title: "No Login Required",
        description: "Access our platform hassle-free without the need for any login credentials. Enjoy instant PDF to TIFF conversion services without any login complications."
      },
      {
        title: "Fast PDF to TIFF Converter",
        description: "Convert your PDF documents into TIFF images quickly and efficiently. Our tool ensures a seamless conversion process in just a few clicks."
      }
    ]
  },
  PDF_to_BMP: {
    title: "PDF to BMP",
    seoTitle: "Convert PDF to BMP Online - Free PDF to Image Converter",
    description: "Convert PDF files to BMP image files",
    color: "#573b26",
    type: ".pdf",
    to: "/pdf-to-bmp",
    features: [
      {
        title: "Secure Processing",
        description: "Our converter prioritizes security, ensuring all PDF to BMP conversions are processed securely. Your files are protected throughout the process."
      },
      {
        title: "Robust Engine",
        description: "Experience a robust conversion engine that ensures accurate and reliable PDF to BMP conversion every time, maintaining quality and integrity."
      },
      {
        title: "Fast Conversion",
        description: "Quickly convert PDF documents to BMP images with our fast conversion process. Get your BMP files ready in seconds."
      }
    ]
  },
  PDF_to_SVG: {
    title: "PDF to SVG",
    seoTitle: "Convert PDF to SVG Online - Free PDF to Image Converter",
    description: "Convert PDF files to SVG vector image files",
    color: "#ffb338",
    type: ".pdf",
    to: "/pdf-to-svg",
    features: [
      {
        title: "Vector Graphics Conversion",
        description: "Convert PDF vector graphics to SVG format for scalable and high-quality images that can be resized without loss of quality."
      },
      {
        title: "Preserve Text and Graphics",
        description: "Maintain the original text and graphics from your PDF files during the conversion process to ensure accuracy and fidelity."
      },
      {
        title: "Multi-Page Support",
        description: "Convert multi-page PDF documents into multiple SVG files, maintaining the sequence and order of pages for each SVG image."
      }
    ]
  },
  PDF_to_WebP: {
    title: "PDF to WebP",
    seoTitle: "Convert PDF to WebP Online - Free PDF to Image Converter",
    description: "Convert PDF files to WebP image files",
    color: "#6fc21f",
    type: ".pdf",
    to: "/pdf-to-webp",
    features: [
      {
        title: "Image Extraction",
        description: "Extract images from PDF documents and convert them to WebP format, preserving image quality and transparency."
      },
      {
        title: "High-Quality Conversion",
        description: "Experience high-quality conversion of PDF documents to WebP images, ensuring optimal image clarity and resolution."
      },
      {
        title: "Batch Conversion",
        description: "Convert multiple pages or documents from PDF to WebP format in one go, saving time and effort for bulk conversions."
      }
    ]
  },
  PDF_to_HEIF: {
    title: "PDF to HEIF/HEIC",
    seoTitle: "Convert PDF to HEIF/HEIC Online - Free PDF to Image Converter",
    description: "Convert PDF files to HEIF/HEIC image files",
    color: "#c376b8",
    type: ".pdf",
    to: "/pdf-to-heif-heic",
    features: [
      {
        title: "Image Extraction",
        description: "Extract images from PDF documents and convert them to HEIF/HEIC format, preserving image quality and transparency."
      },
      {
        title: "High-Quality Conversion",
        description: "Experience high-quality conversion of PDF files to HEIF/HEIC images, ensuring optimal image clarity and resolution."
      },
      {
        title: "Multiple Format Support",
        description: "Convert your PDF files to HEIF/HEIC format along with other image formats to suit your preferences."
      }
    ]
  },
  Image_to_PDF: {
    title: "Image to PDF",
    seoTitle: "Convert Images to PDF Online - Free Image to PDF Converter",
    description: "Convert image files (JPG, PNG, BMP, TIFF, GIF, SVG, WebP, HEIF) to PDF documents",
    color: "#3498db",
    type: "image",
    to: "/image-to-pdf",
    features: [
      {
        title: "Guaranteed protection for files",
        description: "Our TLS encryption ensures constant security for your images. Your files are inaccessible to anyone, and we automatically delete them from our servers after conversion for added peace of mind."
      },
      {
        title: "Fast and simple tool to convert images to PDF",
        description: "Simply drag and drop your file into the designated area above to quickly convert it from various image formats to PDF. Additionally, you can customize settings such as margin, orientation, and size."
      },
      {
        title: "High-quality conversion",
        description: "PDFEquips allows users to transform images into high-quality PDF files with its advanced conversion technologies. It maintains 100% of the original quality."
      }
    ]
  },

  PDF_to_Image: {
    title: "PDF to Image",
    seoTitle: "Convert PDF to Images Online - Free PDF to Image Converter",
    description: "Convert PDF documents to image files (JPG, PNG, BMP, TIFF, GIF, SVG, WebP, HEIF)",
    color: "#e74c3c",
    type: ".pdf",
    to: "/pdf-to-image",
    features: [
      {
        title: "Guaranteed protection for files",
        description: "Our TLS encryption ensures constant security for your PDFs. Your files are inaccessible to anyone, and we automatically delete them from our servers after conversion for added peace of mind."
      },
      {
        title: "Fast and simple tool to convert PDF to images",
        description: "Simply drag and drop your PDF file into the designated area above to quickly convert it to various image formats. Additionally, you can choose the desired image format and quality settings."
      },
      {
        title: "High-quality conversion",
        description: "PDFEquips allows users to transform PDF documents into high-quality image files with its advanced conversion technologies. It maintains 100% of the original quality."
      }
    ]
  }
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
    pdf_to_jpg: "PDF to JPG options",
    image_to_pdf: "IMAGE to PDF options",
    pdf_to_image: "PDF to IMAGE options"
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
    pdf_to_jpg: "Convert to JPG",
    image_to_pdf: "Convert to PDF",
    pdf_to_image: "Convert to IMAGE"
  },
  pages: "pages",
  page: "page",
  options_content: {
    image_to_pdf: {
      info: "Select from the dropdown the image format you want to convert to:",
      placeholder: "Select image format..."
    }
  }
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
    "svg-to-pdf": [
      "SVG files have been converted to PDF!",
      "SVG file has been converted to PDF!",
    ],
    "png-to-pdf": [
      "PNG files have been converted to PDF!",
      "PNG file has been converted to PDF!",
    ],
    "gif-to-pdf": [
      "GIF files have been converted to PDF!",
      "GIF file has been converted to PDF!",
    ],
    "tiff-to-pdf": [
      "TIFF files have been converted to PDF!",
      "TIFF file has been converted to PDF!",
    ],
    "bmp-to-pdf": [
      "BMP files have been converted to PDF!",
      "BMP file has been converted to PDF!",
    ],
    "webp-to-pdf": [
      "WEBP files have been converted to PDF!",
      "WEBP file has been converted to PDF!",
    ],
    "heif-heic-to-pdf": [
      "HEIF/HEIC files have been converted to PDF!",
      "HEIF/HEIC file has been converted to PDF!",
    ],
    "pdf-to-jpg": [
      "PDF files have been converted to JPG!",
      "PDF file has been converted to JPG!",
    ],
    "image-to-pdf": [
      "Image files have been converted to PDF!",
      "Image file has been converted to PDF!"
    ],

    "pdf-to-image": [
      "PDF files have been converted to images!",
      "PDF file has been converted to an image!"
    ]
  },

  btnText: {
    "jpg-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "svg-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "png-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "gif-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "tiff-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "bmp-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "webp-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "heif-heic-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
    "pdf-to-jpg": [
      "Download Converted JPG files",
      "Download Converted JPG file",
    ],
    "image-to-pdf": [
      "Download converted PDF files",
      "Download converted PDF file"
    ],

    "pdf-to-image": [
      "Download converted image files",
      "Download converted image file"
    ]
  },

  backTo: {
    "jpg-to-pdf": "Back To JPG to PDF",
    "svg-to-pdf": "Back To SVG to PDF",
    "png-to-pdf": "Back To PNG to PDF",
    "gif-to-pdf": "Back To GIF to PDF",
    "tiff-to-pdf": "Back To TIFF to PDF",
    "bmp-to-pdf": "Back To BMP to PDF",
    "webp-to-pdf": "Back To WEBP to PDF",
    "heif-heic-to-pdf": "Back To HEIF/HEIC to PDF",
    "pdf-to-jpg": "Back To PDF to JPG",
    "image-to-pdf": "Back To IMAGE to PDF",
    "pdf-to-image": "Back To PDF to IMAGE",
  },
};


export const footer = {
  brand: "PDFEquips",
  terms: "terms",
  conditions: "conditions",
  privacy_policy: "privacy policy",
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
