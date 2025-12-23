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
    title: "JPG a PDF",
    seoTitle: "Convertir JPG a PDF - Convertidor gratuito",
    description: "Convertir archivos de imagen JPG a documentos PDF",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
    keywords: "JPG a PDF, convertir JPG a PDF, convertidor gratuito de JPG a PDF",
    features: [
      {
        title: "Protección garantizada para archivos",
        description: "Nuestro cifrado TLS garantiza seguridad constante para tus JPEGs. Tus archivos son inaccesibles para cualquier persona, y los eliminamos automáticamente de nuestros servidores después de la conversión para mayor tranquilidad."
      },
      {
        title: "Herramienta rápida y sencilla para convertir JPG a PDF",
        description: "Simplemente arrastra y suelta tu archivo en el área designada arriba para convertirlo rápidamente de JPG a PDF. Además, puedes personalizar configuraciones como margen, orientación y tamaño."
      },
      {
        title: "Conversión de alta calidad",
        description: "PDFEquips permite a los usuarios transformar imágenes en archivos PDF de alta calidad con sus tecnologías avanzadas de conversión. Mantiene el 100% de la calidad original."
      }
    ]
  },
  PNG_to_PDF: {
    title: "PNG a PDF",
    seoTitle: "Convertir PNG a PDF - Convertidor gratuito",
    description: "Convertir archivos de imagen PNG a documentos PDF",
    color: "#3498db",
    type: ".png",
    to: "/png-to-pdf",
    keywords: "PNG a PDF, convertir PNG a PDF, convertidor gratuito de PNG a PDF",
    features: [
      {
        title: "Priorizamos tu privacidad",
        description: "Nadie más ve tus archivos excepto tú, como debe ser. PDFEquips utiliza cifrado TLS para seguridad en todas las transferencias de archivos. Todos los archivos se procesan automáticamente."
      },
      {
        title: "Mantén la resolución original para archivos PNG",
        description: "Puedes convertir imágenes PNG a archivos PDF, reduciendo efectivamente el tamaño de las imágenes PNG. Con las tecnologías avanzadas de conversión PDF de PDFEquips, se preserva la resolución original de las imágenes PNG, garantizando cero pérdida de calidad."
      },
      {
        title: "Conversión sin necesidad de software",
        description: "Para convertir tu PNG a PDF, no necesitas ningún software. Con PDFEquips, la conversión ocurre en la nube para un servicio rápido desde cualquier dispositivo. Solo sube, convierte, siéntate y relájate."
      }
    ]
  },
  GIF_to_PDF: {
    title: "GIF a PDF",
    seoTitle: "Convertir GIF a PDF - Convertidor gratuito",
    description: "Convertir archivos de imagen GIF a documentos PDF",
    color: "#636e72",
    type: ".gif",
    to: "/gif-to-pdf",
    keywords: "GIF a PDF, convertir GIF a PDF, convertidor gratuito de GIF a PDF",
    features: [
      {
        title: "Conversor rápido de GIF a PDF",
        description: "Con esta útil herramienta, transformar una imagen GIF en un documento PDF solo lleva unos segundos. Simplemente carga tu imagen GIF animada, personaliza la configuración de salida y guarda tu archivo. Es rápido, conveniente y completamente gratuito."
      },
      {
        title: "Sin necesidad de iniciar sesión",
        description: "Accede a nuestra plataforma sin complicaciones de inicio de sesión. Respetamos tu tiempo y privacidad al proporcionar servicios de conversión sin problemas al alcance de tu mano."
      },
      {
        title: "Conversión sin necesidad de software",
        description: "Para convertir tu GIF a PDF, no necesitas ningún software. Con PDFEquips, la conversión ocurre en la nube para un servicio rápido desde cualquier dispositivo. Solo sube, convierte, siéntate y relájate."
      }
    ]
  },
  TIFF_to_PDF: {
    title: "TIFF a PDF",
    seoTitle: "Convertir TIFF a PDF - Convertidor gratuito",
    description: "Convertir archivos de imagen TIFF a documentos PDF",
    color: "#e45453",
    type: ".tiff",
    to: "/tiff-to-pdf",
    keywords: "TIFF a PDF, convertir TIFF a PDF, convertidor gratuito de TIFF a PDF",
    features: [
      {
        title: "Conversor rápido de TIFF a PDF",
        description: "Convierte tus imágenes TIFF en documentos PDF rápida y eficientemente. Nuestra herramienta garantiza un proceso de conversión sin problemas en solo unos clics."
      },
      {
        title: "No se requiere inicio de sesión",
        description: "Accede a nuestra plataforma sin complicaciones, sin necesidad de credenciales de inicio de sesión. Disfruta de servicios instantáneos de conversión de TIFF a PDF sin complicaciones de inicio de sesión."
      },
      {
        title: "Conversión robusta basada en la nube",
        description: "Experimenta una conversión robusta de TIFF a PDF basada en la nube para un servicio rápido desde cualquier dispositivo. Simplemente carga tus archivos TIFF, convierte y descarga tus imágenes PDF sin esfuerzo."
      }
    ]
  },
  BMP_to_PDF: {
    title: "BMP a PDF",
    seoTitle: "Convertir BMP a PDF - Convertidor gratuito",
    description: "Convertir archivos de imagen BMP a documentos PDF",
    color: "#573b26",
    type: ".bmp",
    to: "/bmp-to-pdf",
    keywords: "BMP a PDF, convertir BMP a PDF, convertidor gratuito de BMP a PDF",
    features: [
      {
        title: "Conversión rápida",
        description: "Convierte rápidamente imágenes BMP en documentos PDF con nuestro proceso de conversión rápido. Obtén tus archivos PDF listos en segundos."
      },
      {
        title: "Motor robusto",
        description: "Experimenta un motor de conversión robusto que garantiza una conversión precisa y confiable de BMP a PDF cada vez, manteniendo la calidad e integridad."
      },
      {
        title: "Procesamiento seguro",
        description: "Nuestro convertidor prioriza la seguridad, asegurando que todas las conversiones de BMP a PDF se realicen de forma segura. Tus archivos están protegidos durante todo el proceso."
      }
    ]
  },
  SVG_to_PDF: {
    title: "SVG a PDF",
    seoTitle: "Convertir SVG a PDF - Convertidor gratuito",
    description: "Convertir archivos de imagen SVG a documentos PDF",
    color: "#ffb338",
    type: ".svg",
    to: "/svg-to-pdf",
    keywords: "SVG a PDF, convertir SVG a PDF, convertidor gratuito de SVG a PDF",
    features: [
      {
        title: "Reordena los SVG",
        description: "Reordena fácilmente las imágenes SVG antes de la conversión para personalizar la secuencia en tu documento PDF."
      },
      {
        title: "Conversión rápida",
        description: "Convierte rápidamente imágenes SVG en documentos PDF con nuestro proceso de conversión rápido. Obtén tus archivos PDF listos en segundos."
      },
      {
        title: "Motor robusto",
        description: "Experimenta un motor de conversión robusto que garantiza una conversión precisa y confiable de SVG a PDF cada vez, manteniendo la calidad e integridad."
      }
    ]
  },
  WebP_to_PDF: {
    title: "WebP a PDF",
    seoTitle: "Convertir WebP a PDF - Convertidor gratuito",
    description: "Convertir archivos de imagen WebP a documentos PDF",
    color: "#6fc21f",
    type: ".webp",
    to: "/webp-to-pdf",
    keywords: "WebP a PDF, convertir WebP a PDF, convertidor gratuito de WebP a PDF",
    features: [
      {
        title: "Conversión de alta calidad",
        description: "Experimenta una conversión de alta calidad de imágenes WebP a documentos PDF, preservando la resolución y claridad de la imagen."
      },
      {
        title: "Organiza fácilmente las páginas",
        description: "Organiza el orden de las páginas en tu documento PDF con facilidad, asegurando la secuencia deseada para tus imágenes WebP convertidas."
      },
      {
        title: "Soporte para múltiples imágenes",
        description: "Convierte múltiples imágenes WebP en un solo documento PDF, permitiendo una organización y compartición sencilla de imágenes."
      }
    ]
  },
  HEIF_to_PDF: {
    title: "HEIF/HEIC a PDF",
    seoTitle: "Convertir HEIF/HEIC a PDF - Convertidor gratuito",
    description: "Convertir archivos de imagen HEIF/HEIC a documentos PDF",
    color: "#c376b8",
    type: ".heif, .heic",
    to: "/heif-heic-to-pdf",
    keywords: "HEIF a PDF, HEIC a PDF, convertir HEIF a PDF, convertir HEIC a PDF, convertidor gratuito de HEIF a PDF, convertidor gratuito de HEIC a PDF",
    features: [
      {
        title: "Conversión de alta calidad",
        description: "Convierte imágenes HEIF/HEIC a documentos PDF con alta calidad, garantizando claridad y resolución de imagen óptimas."
      },
      {
        title: "Conversión por lotes",
        description: "Convierte eficientemente múltiples imágenes HEIF/HEIC en un solo documento PDF de una vez, ahorrando tiempo y esfuerzo para conversiones masivas."
      },
      {
        title: "Compatibilidad multiplataforma",
        description: "Accede a nuestro conversor desde cualquier dispositivo o plataforma para convertir imágenes HEIF/HEIC a formato PDF sin problemas."
      }
    ]
  },
  PDF_to_JPG: {
    title: "PDF a JPG",
    seoTitle: "Convertir PDF a JPG - Convertidor gratuito",
    description: "Convierte archivos PDF a archivos de imagen JPG",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
    keywords: "PDF a JPG, convertir PDF a JPG, convertidor gratuito de PDF a JPG",
    features: [
      {
        title: "Herramienta rápida y sencilla para convertir PDF a JPG",
        description: "Simplemente arrastra y suelta tu archivo en el área designada arriba para convertirlo rápidamente de PDF a JPG. Además, puedes personalizar configuraciones como margen, orientación y tamaño."
      },
      {
        title: "Protección garantizada para archivos",
        description: "Nuestro cifrado TLS garantiza una seguridad constante para tus PDFs. Tus archivos son inaccesibles para cualquier persona y los eliminamos automáticamente de nuestros servidores después de la conversión para mayor tranquilidad."
      },
      {
        title: "Conversión de alta calidad",
        description: "PDFEquips permite a los usuarios transformar PDFs en archivos JPG de alta calidad con sus tecnologías avanzadas de conversión. Mantiene el 100% de la calidad original."
      }
    ]
  },
  PDF_to_PNG: {
    title: "PDF a PNG",
    seoTitle: "Convertir PDF a PNG - Convertidor gratuito",
    description: "Convertir archivos PDF a archivos de imagen PNG",
    color: "#3498db",
    type: ".pdf",
    to: "/pdf-to-png",
    keywords: "PDF a PNG, convertir PDF a PNG, convertidor gratuito de PDF a PNG",
    features: [
      {
        title: "Interfaz fácil de usar",
        description: "Nuestro conversor de PDF a PNG cuenta con una interfaz intuitiva y fácil de usar, haciendo que el proceso de conversión sea fluido para usuarios de todos los niveles."
      },
      {
        title: "Mantén la calidad de imagen",
        description: "Disfruta de imágenes PNG de alta resolución sin pérdida de calidad. Nuestro conversor preserva la calidad original de tus imágenes PDF durante el proceso de conversión."
      },
      {
        title: "Conversión por lotes",
        description: "Convierte eficientemente múltiples páginas o documentos PDF en imágenes PNG de una sola vez. Ahorra tiempo y esfuerzo con nuestra función de conversión por lotes simplificada."
      }
    ]
  },
  PDF_to_GIF: {
    title: "PDF a GIF",
    seoTitle: "Convertir PDF a GIF - Convertidor gratuito",
    description: "Convertir archivos PDF a archivos de imagen GIF",
    color: "#636e72",
    type: ".pdf",
    to: "/pdf-to-gif",
    keywords: "PDF a GIF, convertir PDF a GIF, convertidor gratuito de PDF a GIF",
    features: [
      {
        title: "Extracción de imágenes",
        description: "Extrae imágenes de documentos PDF y conviértelas al formato GIF, preservando la calidad y transparencia de la imagen."
      },
      {
        title: "Salida personalizable",
        description: "Personaliza los ajustes de salida para tus imágenes GIF, incluyendo resolución, velocidad de cuadros y paleta de colores, para adaptarse a tus necesidades."
      },
      {
        title: "Soporte para múltiples páginas",
        description: "Convierte documentos PDF de múltiples páginas en una serie de imágenes GIF, manteniendo la secuencia y orden de páginas para cada GIF."
      }
    ]
  },
  PDF_to_TIFF: {
    title: "PDF a TIFF",
    seoTitle: "Convertir PDF a TIFF - Convertidor gratuito",
    description: "Convertir archivos PDF a archivos de imagen TIFF",
    color: "#e45453",
    type: ".pdf",
    to: "/pdf-to-tiff",
    keywords: "PDF a TIFF, convertir PDF a TIFF, convertidor gratuito de PDF a TIFF",
    features: [
      {
        title: "Conversión robusta basada en la nube",
        description: "Experimenta una conversión robusta de PDF a TIFF basada en la nube para un servicio rápido desde cualquier dispositivo. Simplemente carga tus documentos PDF, convierte y descarga tus imágenes TIFF sin esfuerzo."
      },
      {
        title: "No se requiere inicio de sesión",
        description: "Accede a nuestra plataforma sin complicaciones, sin necesidad de credenciales de inicio de sesión. Disfruta de servicios instantáneos de conversión de PDF a TIFF sin complicaciones de inicio de sesión."
      },
      {
        title: "Conversor rápido de PDF a TIFF",
        description: "Convierte rápidamente tus documentos PDF en imágenes TIFF de forma rápida y eficiente. Nuestra herramienta garantiza un proceso de conversión sin problemas en solo unos clics."
      }
    ]
  },
  PDF_to_BMP: {
    title: "PDF a BMP",
    seoTitle: "Convertir PDF a BMP - Convertidor gratuito",
    description: "Convertir archivos PDF a archivos de imagen BMP",
    color: "#573b26",
    type: ".pdf",
    to: "/pdf-to-bmp",
    keywords: "PDF a BMP, convertir PDF a BMP, convertidor gratuito de PDF a BMP",
    features: [
      {
        title: "Procesamiento seguro",
        description: "Nuestro conversor prioriza la seguridad, asegurando que todas las conversiones de PDF a BMP se realicen de forma segura. Tus archivos están protegidos durante todo el proceso."
      },
      {
        title: "Motor robusto",
        description: "Experimenta un motor de conversión robusto que garantiza una conversión precisa y confiable de PDF a BMP cada vez, manteniendo la calidad e integridad."
      },
      {
        title: "Conversión rápida",
        description: "Convierte rápidamente tus documentos PDF en imágenes BMP con nuestro proceso de conversión rápido. Obtén tus archivos BMP listos en segundos."
      }
    ]
  },
  PDF_to_SVG: {
    title: "PDF a SVG",
    seoTitle: "Convertir PDF a SVG - Convertidor gratuito",
    description: "Convertir archivos PDF a archivos de imagen vectorial SVG",
    color: "#ffb338",
    type: ".pdf",
    to: "/pdf-to-svg",
    keywords: "PDF a SVG, convertir PDF a SVG, convertidor gratuito de PDF a SVG",
    features: [
      {
        title: "Conversión de gráficos vectoriales",
        description: "Convierte gráficos vectoriales PDF al formato SVG para imágenes escalables y de alta calidad que se pueden redimensionar sin pérdida de calidad."
      },
      {
        title: "Preserva texto y gráficos",
        description: "Mantén el texto y los gráficos originales de tus archivos PDF durante el proceso de conversión para garantizar precisión y fidelidad."
      },
      {
        title: "Soporte para múltiples páginas",
        description: "Convierte documentos PDF de múltiples páginas en múltiples archivos SVG, manteniendo la secuencia y el orden de páginas para cada imagen SVG."
      }
    ]
  },
  PDF_to_WebP: {
    title: "PDF a WebP",
    seoTitle: "Convertir PDF a WebP - Convertidor gratuito",
    description: "Convertir archivos PDF a archivos de imagen WebP",
    color: "#6fc21f",
    type: ".pdf",
    to: "/pdf-to-webp",
    keywords: "PDF a WebP, convertir PDF a WebP, convertidor gratuito de PDF a WebP",
    features: [
      {
        title: "Extracción de imágenes",
        description: "Extrae imágenes de documentos PDF y conviértelas al formato WebP, preservando la calidad y transparencia de la imagen."
      },
      {
        title: "Conversión de alta calidad",
        description: "Experimenta una conversión de alta calidad de documentos PDF a imágenes WebP, garantizando una claridad y resolución óptimas de la imagen."
      },
      {
        title: "Conversión por lotes",
        description: "Convierte múltiples páginas o documentos de PDF al formato WebP de una vez, ahorrando tiempo y esfuerzo en conversiones masivas."
      }
    ]
  },
  PDF_to_HEIF: {
    title: "PDF a HEIF/HEIC",
    seoTitle: "Convertir PDF a HEIF/HEIC - Convertidor gratuito",
    description: "Convertir archivos PDF a archivos de imagen HEIF/HEIC",
    color: "#c376b8",
    type: ".pdf",
    to: "/pdf-to-heif-heic",
    keywords: "PDF a HEIF, PDF a HEIC, convertir PDF a HEIF, convertir PDF a HEIC, convertidor gratuito de PDF a HEIF, convertidor gratuito de PDF a HEIC",
    features: [
      {
        title: "Extracción de imágenes",
        description: "Extrae imágenes de documentos PDF y conviértelas al formato HEIF/HEIC, preservando la calidad y transparencia de la imagen."
      },
      {
        title: "Conversión de alta calidad",
        description: "Experimenta una conversión de alta calidad de archivos PDF a imágenes HEIF/HEIC, garantizando una claridad y resolución óptimas de la imagen."
      },
      {
        title: "Soporte para múltiples formatos",
        description: "Convierte tus archivos PDF al formato HEIF/HEIC junto con otros formatos de imagen para adaptarse a tus preferencias."
      }
    ]
  },
  Image_to_PDF: {
    title: "Imagen a PDF",
    seoTitle: "Convertir Imágenes a PDF - Convertidor gratuito",
    description: "Convierte archivos de imagen (JPG, PNG, BMP, TIFF, GIF, SVG, WebP, HEIF) a documentos PDF",
    color: "#3498db",
    type: "image",
    to: "/image-to-pdf",
    keywords: "Imagen a PDF, convertir imagen a PDF, convertidor gratuito de imagen a PDF",
    features: [
      {
        title: "Protección garantizada para archivos",
        description: "Nuestra encriptación TLS asegura seguridad constante para tus imágenes. Tus archivos son inaccesibles para cualquiera y los eliminamos automáticamente de nuestros servidores después de la conversión para mayor tranquilidad."
      },
      {
        title: "Herramienta rápida y simple para convertir imágenes a PDF",
        description: "Simplemente arrastra y suelta tu archivo en el área designada arriba para convertirlo rápidamente desde varios formatos de imagen a PDF. Además, puedes personalizar ajustes como margen, orientación y tamaño."
      },
      {
        title: "Conversión de alta calidad",
        description: "PDFEquips permite a los usuarios transformar imágenes en archivos PDF de alta calidad con sus avanzadas tecnologías de conversión. Mantiene el 100% de la calidad original."
      }
    ]
  },
  PDF_to_Image: {
    title: "PDF a Imagen",
    seoTitle: "Convertir PDF a Imágenes - Convertidor gratuito",
    description: "Convierte documentos PDF a archivos de imagen (JPG, PNG, BMP, TIFF, GIF, SVG, WebP, HEIF)",
    color: "#e74c3c",
    type: ".pdf",
    to: "/pdf-to-image",
    keywords: "PDF a Imagen, convertir PDF a imagen, convertidor gratuito de PDF a imagen",
    features: [
      {
        title: "Protección garantizada para archivos",
        description: "Nuestra encriptación TLS asegura seguridad constante para tus PDFs. Tus archivos son inaccesibles para cualquiera y los eliminamos automáticamente de nuestros servidores después de la conversión para mayor tranquilidad."
      },
      {
        title: "Herramienta rápida y simple para convertir PDF a imágenes",
        description: "Simplemente arrastra y suelta tu archivo PDF en el área designada arriba para convertirlo rápidamente a varios formatos de imagen. Además, puedes elegir el formato de imagen y ajustes de calidad deseados."
      },
      {
        title: "Conversión de alta calidad",
        description: "PDFEquips permite a los usuarios transformar documentos PDF en archivos de imagen de alta calidad con sus avanzadas tecnologías de conversión. Mantiene el 100% de la calidad original."
      }
    ]
  }
}


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
    pdf_to_jpg: "Opciones para convertir PDF a JPG",
    pdf_to_svg: "Opciones para convertir PDF a SVG",
    pdf_to_png: "Opciones para convertir PDF a PNG",
    pdf_to_gif: "Opciones para convertir PDF a GIF",
    pdf_to_tiff: "Opciones para convertir PDF a TIFF",
    pdf_to_bmp: "Opciones para convertir PDF a BMP",
    pdf_to_webp: "Opciones para convertir PDF a WebP",
    pdf_to_heif_heic: "Opciones para convertir PDF a HEIF/HEIC",
    image_to_pdf: "Opciones de IMAGEN a PDF",
    pdf_to_image: "Opciones de PDF a IMAGEN"
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
    pdf_to_jpg: "Convertir a JPG",
    pdf_to_svg: "Convertir a SVG",
    pdf_to_png: "Convertir a PNG",
    pdf_to_gif: "Convertir a GIF",
    pdf_to_tiff: "Convertir a TIFF",
    pdf_to_bmp: "Convertir a BMP",
    pdf_to_webp: "Convertir a WebP",
    pdf_to_heif_heic: "Convertir a HEIF/HEIC",
    image_to_pdf: "Convertir a PDF",
    pdf_to_image: "Convertir a IMAGEN"
  },
  pages: "páginas",
  page: "página",
  options_content: {
    image_to_pdf: {
      info: "Selecciona desde el menú desplegable el formato de imagen al que deseas convertir:",
      placeholder: "Selecciona formato de imagen..."
    }
  },
  cta: "Ver Planes",
  imageToPDFOptionsContent: {
    page_orientation: "Orientación de página",
    portrait: "Vertical",
    landscape: "Horizontal",
    page_size: "Tamaño de página",
    margins: "Márgenes",
    margins_none: "Ninguno",
    margins_small: "Pequeño",
    margins_medium: "Mediano",
    margins_large: "Grande",
    merge_all: "Combinar todas las imágenes en un archivo PDF",
  },
  pdfToImageOptionsContent: {
    conversion_mode: "Modo de conversión",
    mode_page_title: "Página a {format}",
    mode_page_description: "Cada página de este PDF se convertirá en un archivo {format}. Se crearán {count} {format}.",
    mode_page_description_generic: "Cada página de este PDF se convertirá en un archivo {format}.",
    mode_extract_title: "Extraer imágenes",
    mode_extract_description: "Todas las imágenes incrustadas en el PDF se extraerán como imágenes {format}.",
    image_quality: "Calidad de imagen",
    quality_low: "Baja (72 DPI)",
    quality_medium: "Media (150 DPI)",
    quality_high: "Alta (300 DPI)",
    quality_very_high: "Muy alta (600 DPI)",
    quality_low_hint: "Tamaño de archivo menor, adecuado para visualización web.",
    quality_medium_hint: "Equilibrio entre calidad y tamaño. Recomendado para la mayoría de usos.",
    quality_high_hint: "Alta calidad, adecuado para impresión.",
    quality_very_high_hint: "Máxima calidad, mayor tamaño de archivo. Ideal para impresión profesional.",
  }
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
    "pdf-to-jpg": [
      "¡Los archivos PDF se han convertido a JPG!",
      "¡El archivo PDF se ha convertido a JPG!",
    ],
    "pdf-to-svg": [
      "¡Los archivos PDF se han convertido a SVG!",
      "¡El archivo PDF se ha convertido a SVG!",
    ],
    "pdf-to-png": [
      "¡Los archivos PDF se han convertido a PNG!",
      "¡El archivo PDF se ha convertido a PNG!",
    ],
    "pdf-to-gif": [
      "¡Los archivos PDF se han convertido a GIF!",
      "¡El archivo PDF se ha convertido a GIF!",
    ],
    "pdf-to-tiff": [
      "¡Los archivos PDF se han convertido a TIFF!",
      "¡El archivo PDF se ha convertido a TIFF!",
    ],
    "pdf-to-bmp": [
      "¡Los archivos PDF se han convertido a BMP!",
      "¡El archivo PDF se ha convertido a BMP!",
    ],
    "pdf-to-webp": [
      "¡Los archivos PDF se han convertido a WEBP!",
      "¡El archivo PDF se ha convertido a WEBP!",
    ],
    "pdf-to-heif-heic": [
      "¡Los archivos PDF se han convertido a HEIF/HEIC!",
      "¡El archivo PDF se ha convertido a HEIF/HEIC!",
    ],
    "image-to-pdf": [
      "¡Los archivos de imagen se han convertido a PDF!",
      "¡El archivo de imagen se ha convertido a PDF!",
    ],
    "pdf-to-image": [
      "¡Los archivos PDF se han convertido en imágenes!",
      "¡El archivo PDF se ha convertido en una imagen!",
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
    "pdf-to-jpg": [
      "Descargar archivos JPG convertidos",
      "Descargar archivo JPG convertido",
    ],
    "pdf-to-svg": [
      "Descargar archivos SVG convertidos",
      "Descargar archivo SVG convertido",
    ],
    "pdf-to-png": [
      "Descargar archivos PNG convertidos",
      "Descargar archivo PNG convertido",
    ],
    "pdf-to-gif": [
      "Descargar archivos GIF convertidos",
      "Descargar archivo GIF convertido",
    ],
    "pdf-to-tiff": [
      "Descargar archivos TIFF convertidos",
      "Descargar archivo TIFF convertido",
    ],
    "pdf-to-bmp": [
      "Descargar archivos BMP convertidos",
      "Descargar archivo BMP convertido",
    ],
    "pdf-to-webp": [
      "Descargar archivos WEBP convertidos",
      "Descargar archivo WEBP convertido",
    ],
    "pdf-to-heif-heic": [
      "Descargar archivos HEIF/HEIC convertidos",
      "Descargar archivo HEIF/HEIC convertido",
    ],
    "image-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
    "pdf-to-image": [
      "Descargar archivos de imagen convertidos",
      "Descargar archivo de imagen convertido",
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
    "pdf-to-jpg": "Volver a PDF a JPG",
    "pdf-to-svg": "Volver a PDF a SVG",
    "pdf-to-png": "Volver a PDF a PNG",
    "pdf-to-gif": "Volver a PDF a GIF",
    "pdf-to-tiff": "Volver a PDF a TIFF",
    "pdf-to-bmp": "Volver a PDF a BMP",
    "pdf-to-webp": "Volver a PDF a WEBP",
    "pdf-to-heif-heic": "Volver a PDF a HEIF/HEIC",
    "image-to-pdf": "Volver a IMAGEN a PDF",
    "pdf-to-image": "Volver a PDF a IMAGEN",
  },
};



export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o soltar archivos aquí",
  files: "archivos",
  drop_files: "Arrastra los archivos aquí",
};


export const footer: _footer = {
  brand: "PDFEquips",
  terms: "términos",
  conditions: "condiciones",
  privacy_policy: "política de privacidad",
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
  PASSWORD_REQUIRED: {
    message: "El PDF requiere contraseña.",
    code: "PASSWORD_REQUIRED",
  },
  INCORRECT_PASSWORD: {
    message: "La contraseña ingresada es incorrecta.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "Has alcanzado tu límite diario de uso. Actualiza tu plan para continuar sin interrupciones.",
    code: "MAX_DAILY_USAGE",
  },
  MAX_PAGES_EXCEEDED: {
    message: "El PDF supera el límite máximo de 50 páginas.",
    code: "ERR_MAX_PAGES_EXCEEDED",
  },
  MAX_IMAGES_EXCEEDED: {
    message:
      "Puedes convertir hasta 15 imágenes a la vez. Actualiza tu plan para convertir más imágenes en un solo PDF.",
    code: "ERR_MAX_IMAGES_EXCEEDED",
  },
  IMAGE_TOO_LARGE: {
    message:
      "Una o más imágenes superan el límite de tamaño de 20 MB. Actualiza tu plan para subir imágenes de mayor tamaño.",
    code: "ERR_IMAGE_TOO_LARGE",
  },
  TOTAL_SIZE_EXCEEDED: {
    message:
      "El tamaño total de los archivos supera el límite permitido. Actualiza tu plan para obtener límites de carga más altos.",
    code: "ERR_TOTAL_SIZE_EXCEEDED",
  },

};

export const adBlockerContent: adBlockerContentType = {
  title: "Bloqueador de anuncios detectado",
  description: "Notamos que usas un bloqueador de anuncios. Desactívalo o actualiza a premium para una experiencia sin anuncios.",
  reloadPage: "Recargar página",
  upgradeToPremium: "Actualizar a Premium"
};