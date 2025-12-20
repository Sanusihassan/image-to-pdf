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
    seoTitle: "Convertir JPG en PDF - Convertisseur gratuit",
    description: "Convertir des fichiers d'image JPG en documents PDF",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
    keywords: "JPG en PDF, convertir JPG en PDF, convertisseur gratuit de JPG en PDF",
    features: [
      {
        title: "Protection garantie des fichiers",
        description: "Notre cryptage TLS assure une sécurité constante pour vos JPEG. Vos fichiers sont inaccessibles à quiconque, et nous les supprimons automatiquement de nos serveurs après conversion pour une tranquillité d'esprit accrue."
      },
      {
        title: "Outil rapide et simple pour convertir JPG en PDF",
        description: "Il vous suffit de glisser-déposer votre fichier dans la zone désignée ci-dessus pour le convertir rapidement de JPG en PDF. De plus, vous pouvez personnaliser les paramètres tels que la marge, l'orientation et la taille."
      },
      {
        title: "Conversion de haute qualité",
        description: "PDFEquips permet aux utilisateurs de transformer des images en fichiers PDF de haute qualité grâce à ses technologies de conversion avancées. Il maintient 100% de la qualité originale."
      }
    ]
  },
  PNG_to_PDF: {
    title: "PNG en PDF",
    seoTitle: "Convertir PNG en PDF - Convertisseur gratuit",
    description: "Convertir des fichiers d'image PNG en documents PDF",
    color: "#3498db",
    type: ".png",
    to: "/png-to-pdf",
    keywords: "PNG en PDF, convertir PNG en PDF, convertisseur gratuit de PNG en PDF",
    features: [
      {
        title: "Nous priorisons votre confidentialité",
        description: "Personne ne voit vos fichiers sauf vous, comme il se doit. PDFEquips utilise le cryptage TLS pour sécuriser tous les transferts de fichiers. Tous les fichiers sont traités automatiquement."
      },
      {
        title: "Conservez la résolution originale des fichiers PNG",
        description: "Vous pouvez convertir des images PNG en fichiers PDF, réduisant efficacement la taille des images PNG. Avec les technologies avancées de conversion PDF de PDFEquips, la résolution originale des images PNG est préservée, garantissant aucune perte de qualité."
      },
      {
        title: "Conversion sans besoin de logiciel",
        description: "Pour convertir votre PNG en PDF, vous n'avez besoin d'aucun logiciel. Avec PDFEquips, la conversion se fait dans le cloud pour un service rapide depuis n'importe quel appareil. Il suffit de télécharger, de convertir, de s'asseoir et de se détendre."
      }
    ]
  },
  GIF_to_PDF: {
    title: "GIF en PDF",
    seoTitle: "Convertir GIF en PDF - Convertisseur gratuit",
    description: "Convertir des fichiers d'image GIF en documents PDF",
    color: "#636e72",
    type: ".gif",
    to: "/gif-to-pdf",
    keywords: "GIF en PDF, convertir GIF en PDF, convertisseur gratuit de GIF en PDF",
    features: [
      {
        title: "Convertisseur rapide de GIF en PDF",
        description: "Avec cet outil utile, transformer une image GIF en un document PDF ne prend que quelques secondes. Téléchargez simplement votre image GIF animée, personnalisez les paramètres de sortie et enregistrez votre fichier. C'est rapide, pratique et entièrement gratuit."
      },
      {
        title: "Pas besoin de se connecter",
        description: "Accédez à notre plateforme sans les complications de connexion. Nous respectons votre temps et votre confidentialité en fournissant des services de conversion sans faille à portée de main."
      },
      {
        title: "Conversion sans besoin de logiciel",
        description: "Pour convertir votre GIF en PDF, vous n'avez besoin d'aucun logiciel. Avec PDFEquips, la conversion se fait dans le cloud pour un service rapide depuis n'importe quel appareil. Il suffit de télécharger, de convertir, de s'asseoir et de se détendre."
      }
    ]
  },
  TIFF_to_PDF: {
    title: "TIFF en PDF",
    seoTitle: "Convertir TIFF en PDF - Convertisseur gratuit",
    description: "Convertir des fichiers d'image TIFF en documents PDF",
    color: "#e45453",
    type: ".tiff",
    to: "/tiff-to-pdf",
    keywords: "TIFF en PDF, convertir TIFF en PDF, convertisseur gratuit de TIFF en PDF",
    features: [
      {
        title: "Convertisseur rapide de TIFF en PDF",
        description: "Convertissez vos images TIFF en documents PDF rapidement et efficacement. Notre outil assure un processus de conversion sans faille en quelques clics."
      },
      {
        title: "Aucun identifiant requis",
        description: "Accédez à notre plateforme sans tracas, sans besoin de fournir des identifiants. Profitez des services de conversion TIFF en PDF instantanés sans complications de connexion."
      },
      {
        title: "Conversion robuste basée sur le cloud",
        description: "Profitez d'une conversion robuste de TIFF en PDF basée sur le cloud pour un service rapide depuis n'importe quel appareil. Téléchargez simplement vos fichiers TIFF, convertissez et téléchargez vos documents PDF en toute simplicité."
      }
    ]
  },
  BMP_to_PDF: {
    title: "BMP en PDF",
    seoTitle: "Convertir BMP en PDF - Convertisseur gratuit",
    description: "Convertir des fichiers d'image BMP en documents PDF",
    color: "#573b26",
    type: ".bmp",
    to: "/bmp-to-pdf",
    keywords: "BMP en PDF, convertir BMP en PDF, convertisseur gratuit de BMP en PDF",
    features: [
      {
        title: "Conversion rapide",
        description: "Convertissez rapidement les images BMP en documents PDF avec notre processus de conversion rapide. Obtenez vos fichiers PDF en quelques secondes."
      },
      {
        title: "Moteur robuste",
        description: "Profitez d'un moteur de conversion robuste qui garantit une conversion BMP en PDF précise et fiable à chaque fois, en maintenant la qualité et l'intégrité."
      },
      {
        title: "Traitement sécurisé",
        description: "Notre convertisseur priorise la sécurité, garantissant que toutes les conversions BMP en PDF sont traitées en toute sécurité. Vos fichiers sont protégés tout au long du processus."
      }
    ]
  },
  SVG_to_PDF: {
    title: "SVG en PDF",
    seoTitle: "Convertir SVG en PDF - Convertisseur gratuit",
    description: "Convertir des fichiers d'image SVG en documents PDF",
    color: "#ffb338",
    type: ".svg",
    to: "/svg-to-pdf",
    keywords: "SVG en PDF, convertir SVG en PDF, convertisseur gratuit de SVG en PDF",
    features: [
      {
        title: "Réorganisez les SVG",
        description: "Réorganisez facilement les images SVG avant la conversion pour personnaliser la séquence dans votre document PDF."
      },
      {
        title: "Conversion rapide",
        description: "Convertissez rapidement les images SVG en documents PDF avec notre processus de conversion rapide. Obtenez vos fichiers PDF en quelques secondes."
      },
      {
        title: "Moteur robuste",
        description: "Profitez d'un moteur de conversion robuste qui garantit une conversion SVG en PDF précise et fiable à chaque fois, en maintenant la qualité et l'intégrité."
      }
    ]
  },
  WebP_to_PDF: {
    title: "WebP en PDF",
    seoTitle: "Convertir WebP en PDF - Convertisseur gratuit",
    description: "Convertir des fichiers d'image WebP en documents PDF",
    color: "#6fc21f",
    type: ".webp",
    to: "/webp-to-pdf",
    keywords: "WebP en PDF, convertir WebP en PDF, convertisseur gratuit de WebP en PDF",
    features: [
      {
        title: "Conversion de haute qualité",
        description: "Profitez d'une conversion de haute qualité des images WebP en documents PDF, préservant la résolution et la clarté des images."
      },
      {
        title: "Agencement facile des pages",
        description: "Disposez facilement les pages dans votre document PDF, garantissant la séquence souhaitée pour vos images WebP converties."
      },
      {
        title: "Prise en charge de plusieurs images",
        description: "Convertissez plusieurs images WebP en un seul document PDF, permettant une organisation et un partage faciles des images."
      }
    ]
  },
  HEIF_to_PDF: {
    title: "HEIF/HEIC en PDF",
    seoTitle: "Convertir HEIF/HEIC en PDF - Convertisseur gratuit",
    description: "Convertir des fichiers d'image HEIF/HEIC en documents PDF",
    color: "#c376b8",
    type: ".heif, .heic",
    to: "/heif-heic-to-pdf",
    keywords: "HEIF en PDF, HEIC en PDF, convertir HEIF en PDF, convertir HEIC en PDF, convertisseur gratuit de HEIF en PDF, convertisseur gratuit de HEIC en PDF",
    features: [
      {
        title: "Conversion de haute qualité",
        description: "Convertissez des images HEIF/HEIC en documents PDF de haute qualité, garantissant une clarté et une résolution d'image optimales."
      },
      {
        title: "Conversion par lots",
        description: "Convertissez efficacement plusieurs images HEIF/HEIC en un seul document PDF en une seule fois, économisant du temps et des efforts pour les conversions en masse."
      },
      {
        title: "Compatibilité multiplateforme",
        description: "Accédez à notre convertisseur depuis n'importe quel appareil ou plateforme pour convertir des images HEIF/HEIC en format PDF sans effort."
      }
    ]
  },
  PDF_to_JPG: {
    title: "PDF en JPG",
    seoTitle: "Convertir PDF en JPG - Convertisseur gratuit",
    description: "Convertir des fichiers PDF en fichiers image JPG",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
    keywords: "PDF en JPG, convertir PDF en JPG, convertisseur gratuit de PDF en JPG",
    features: [
      {
        title: "Outil rapide et simple pour convertir des PDF en JPG",
        description: "Glissez-déposez simplement votre fichier dans la zone désignée ci-dessus pour le convertir rapidement de PDF en JPG. De plus, vous pouvez personnaliser les paramètres tels que la marge, l'orientation et la taille."
      },
      {
        title: "Protection garantie des fichiers",
        description: "Notre cryptage TLS assure une sécurité constante pour vos PDF. Vos fichiers sont inaccessibles à quiconque, et nous les supprimons automatiquement de nos serveurs après la conversion pour une tranquillité d'esprit supplémentaire."
      },
      {
        title: "Conversion de haute qualité",
        description: "PDFEquips permet aux utilisateurs de transformer des PDF en fichiers JPG de haute qualité avec ses technologies de conversion avancées. Il maintient 100% de la qualité originale."
      }
    ]
  },
  PDF_to_PNG: {
    title: "PDF vers PNG",
    seoTitle: "Convertir PDF en PNG - Convertisseur gratuit",
    description: "Convertir des fichiers PDF en fichiers d'image PNG",
    color: "#3498db",
    type: ".pdf",
    to: "/pdf-to-png",
    keywords: "PDF en PNG, convertir PDF en PNG, convertisseur gratuit de PDF en PNG",
    features: [
      {
        title: "Interface conviviale",
        description: "Notre convertisseur PDF en PNG offre une interface intuitive et facile à utiliser, rendant le processus de conversion fluide pour les utilisateurs de tous niveaux."
      },
      {
        title: "Conserver la qualité de l'image",
        description: "Profitez d'images PNG haute résolution sans aucune perte de qualité. Notre convertisseur préserve la qualité originale de vos images PDF pendant le processus de conversion."
      },
      {
        title: "Conversion par lots",
        description: "Convertissez efficacement plusieurs pages ou documents PDF en images PNG en une seule fois. Gagnez du temps et des efforts avec notre fonctionnalité de conversion par lots simplifiée."
      }
    ]
  },
  PDF_to_GIF: {
    title: "PDF vers GIF",
    seoTitle: "Convertir PDF en GIF - Convertisseur gratuit",
    description: "Convertir des fichiers PDF en fichiers d'image GIF",
    color: "#636e72",
    type: ".pdf",
    to: "/pdf-to-gif",
    keywords: "PDF en GIF, convertir PDF en GIF, convertisseur gratuit de PDF en GIF",
    features: [
      {
        title: "Extraction d'images",
        description: "Extrayez des images des documents PDF et convertissez-les au format GIF, en préservant la qualité et la transparence de l'image."
      },
      {
        title: "Sortie personnalisable",
        description: "Personnalisez les paramètres de sortie de vos images GIF, y compris la résolution, la fréquence d'images et la palette de couleurs, pour répondre à vos besoins."
      },
      {
        title: "Prise en charge des documents multi-pages",
        description: "Convertissez des documents PDF multi-pages en une série d'images GIF, en conservant la séquence et l'ordre des pages pour chaque GIF."
      }
    ]
  },
  PDF_to_TIFF: {
    title: "PDF vers TIFF",
    seoTitle: "Convertir PDF en TIFF - Convertisseur gratuit",
    description: "Convertir des fichiers PDF en fichiers d'image TIFF",
    color: "#e45453",
    type: ".pdf",
    to: "/pdf-to-tiff",
    keywords: "PDF en TIFF, convertir PDF en TIFF, convertisseur gratuit de PDF en TIFF",
    features: [
      {
        title: "Conversion robuste basée sur le cloud",
        description: "Profitez d'une conversion robuste de PDF en TIFF basée sur le cloud pour un service rapide depuis n'importe quel appareil. Téléchargez simplement vos documents PDF, convertissez et téléchargez vos images TIFF sans effort."
      },
      {
        title: "Aucun identifiant requis",
        description: "Accédez à notre plateforme sans tracas, sans besoin de fournir des identifiants. Profitez des services de conversion PDF en TIFF instantanés sans complications de connexion."
      },
      {
        title: "Convertisseur rapide de PDF en TIFF",
        description: "Convertissez vos documents PDF en images TIFF rapidement et efficacement. Notre outil assure un processus de conversion sans faille en quelques clics."
      }
    ]
  },
  PDF_to_BMP: {
    title: "PDF vers BMP",
    seoTitle: "Convertir PDF en BMP - Convertisseur gratuit",
    description: "Convertir des fichiers PDF en fichiers d'image BMP",
    color: "#573b26",
    type: ".pdf",
    to: "/pdf-to-bmp",
    keywords: "PDF en BMP, convertir PDF en BMP, convertisseur gratuit de PDF en BMP",
    features: [
      {
        title: "Traitement sécurisé",
        description: "Notre convertisseur priorise la sécurité, garantissant que toutes les conversions PDF en BMP sont traitées en toute sécurité. Vos fichiers sont protégés tout au long du processus."
      },
      {
        title: "Moteur robuste",
        description: "Profitez d'un moteur de conversion robuste qui garantit une conversion PDF en BMP précise et fiable à chaque fois, en maintenant la qualité et l'intégrité."
      },
      {
        title: "Conversion rapide",
        description: "Convertissez rapidement les documents PDF en images BMP avec notre processus de conversion rapide. Obtenez vos fichiers BMP en quelques secondes."
      }
    ]
  },
  PDF_to_SVG: {
    title: "PDF vers SVG",
    seoTitle: "Convertir PDF en SVG - Convertisseur gratuit",
    description: "Convertir des fichiers PDF en fichiers d'image vectorielle SVG",
    color: "#ffb338",
    type: ".pdf",
    to: "/pdf-to-svg",
    keywords: "PDF en SVG, convertir PDF en SVG, convertisseur gratuit de PDF en SVG",
    features: [
      {
        title: "Conversion de graphiques vectoriels",
        description: "Convertissez des graphiques vectoriels PDF au format SVG pour des images évolutives et de haute qualité qui peuvent être redimensionnées sans perte de qualité."
      },
      {
        title: "Préserver le texte et les graphiques",
        description: "Maintenez le texte et les graphiques originaux de vos fichiers PDF pendant le processus de conversion pour garantir précision et fidélité."
      },
      {
        title: "Prise en charge des documents multi-pages",
        description: "Convertissez des documents PDF multi-pages en plusieurs fichiers SVG, en conservant la séquence et l'ordre des pages pour chaque image SVG."
      }
    ]
  },
  PDF_to_WebP: {
    title: "PDF vers WebP",
    seoTitle: "Convertir PDF en WebP - Convertisseur gratuit",
    description: "Convertir des fichiers PDF en fichiers d'image WebP",
    color: "#6fc21f",
    type: ".pdf",
    to: "/pdf-to-webp",
    keywords: "PDF en WebP, convertir PDF en WebP, convertisseur gratuit de PDF en WebP",
    features: [
      {
        title: "Extraction d'images",
        description: "Extrayez des images des documents PDF et convertissez-les au format WebP, en préservant la qualité et la transparence de l'image."
      },
      {
        title: "Conversion de haute qualité",
        description: "Profitez d'une conversion de haute qualité des documents PDF en images WebP, garantissant une clarté et une résolution d'image optimales."
      },
      {
        title: "Conversion par lots",
        description: "Convertissez plusieurs pages ou documents du format PDF au format WebP en une seule fois, économisant du temps et des efforts pour les conversions en masse."
      }
    ]
  },
  PDF_to_HEIF: {
    title: "PDF vers HEIF/HEIC",
    seoTitle: "Convertir PDF en HEIF/HEIC - Convertisseur gratuit",
    description: "Convertir des fichiers PDF en fichiers d'image HEIF/HEIC",
    color: "#c376b8",
    type: ".pdf",
    to: "/pdf-to-heif-heic",
    keywords: "PDF en HEIF, PDF en HEIC, convertir PDF en HEIF, convertir PDF en HEIC, convertisseur gratuit de PDF en HEIF, convertisseur gratuit de PDF en HEIC",
    features: [
      {
        title: "Extraction d'images",
        description: "Extrayez des images des documents PDF et convertissez-les au format HEIF/HEIC, en préservant la qualité et la transparence de l'image."
      },
      {
        title: "Conversion de haute qualité",
        description: "Profitez d'une conversion de haute qualité des fichiers PDF en images HEIF/HEIC, garantissant une clarté et une résolution d'image optimales."
      },
      {
        title: "Prise en charge de plusieurs formats",
        description: "Convertissez vos fichiers PDF au format HEIF/HEIC ainsi qu'à d'autres formats d'image pour répondre à vos préférences."
      }
    ]
  },
  Image_to_PDF: {
    title: "Image vers PDF",
    seoTitle: "Convertir des images en PDF - Convertisseur gratuit",
    description: "Convertir des fichiers image (JPG, PNG, BMP, TIFF, GIF, SVG, WebP, HEIF) en documents PDF",
    color: "#3498db",
    type: "image",
    to: "/image-to-pdf",
    keywords: "image en PDF, convertir image en PDF, convertisseur gratuit d'image en PDF",
    features: [
      {
        title: "Protection garantie des fichiers",
        description: "Notre chiffrement TLS assure une sécurité constante pour vos images. Vos fichiers sont inaccessibles à quiconque et nous les supprimons automatiquement de nos serveurs après la conversion pour une tranquillité d'esprit accrue."
      },
      {
        title: "Outil rapide et simple pour convertir des images en PDF",
        description: "Il vous suffit de glisser-déposer votre fichier dans la zone désignée ci-dessus pour le convertir rapidement à partir de divers formats d'image en PDF. De plus, vous pouvez personnaliser des paramètres tels que la marge, l'orientation et la taille."
      },
      {
        title: "Conversion de haute qualité",
        description: "PDFEquips permet aux utilisateurs de transformer des images en fichiers PDF de haute qualité grâce à ses technologies avancées de conversion. Il préserve 100% de la qualité originale."
      }
    ]
  },

  PDF_to_Image: {
    title: "PDF vers Image",
    seoTitle: "Convertir des PDF en images - Convertisseur gratuit",
    description: "Convertir des documents PDF en fichiers image (JPG, PNG, BMP, TIFF, GIF, SVG, WebP, HEIF)",
    color: "#e74c3c",
    type: ".pdf",
    to: "/pdf-to-image",
    keywords: "PDF en image, convertir PDF en image, convertisseur gratuit de PDF en image",
    features: [
      {
        title: "Protection garantie des fichiers",
        description: "Notre chiffrement TLS assure une sécurité constante pour vos PDFs. Vos fichiers sont inaccessibles à quiconque et nous les supprimons automatiquement de nos serveurs après la conversion pour une tranquillité d'esprit accrue."
      },
      {
        title: "Outil rapide et simple pour convertir des PDF en images",
        description: "Il vous suffit de glisser-déposer votre fichier PDF dans la zone désignée ci-dessus pour le convertir rapidement en différents formats d'image. De plus, vous pouvez choisir le format d'image désiré et les paramètres de qualité."
      },
      {
        title: "Conversion de haute qualité",
        description: "PDFEquips permet aux utilisateurs de transformer des documents PDF en fichiers image de haute qualité grâce à ses technologies avancées de conversion. Il préserve 100% de la qualité originale."
      }
    ]
  }
}

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
    "pdf-to-jpg": [
      "Conversion de fichiers PDF en JPG réussie !",
      "Conversion de fichier PDF en JPG réussie !",
    ],
    "pdf-to-svg": [
      "Les fichiers PDF ont été convertis en SVG !",
      "Le fichier PDF a été converti en SVG !",
    ],
    "pdf-to-png": [
      "Les fichiers PDF ont été convertis en PNG !",
      "Le fichier PDF a été converti en PNG !",
    ],
    "pdf-to-gif": [
      "Les fichiers PDF ont été convertis en GIF !",
      "Le fichier PDF a été converti en GIF !",
    ],
    "pdf-to-tiff": [
      "Les fichiers PDF ont été convertis en TIFF !",
      "Le fichier PDF a été converti en TIFF !",
    ],
    "pdf-to-bmp": [
      "Les fichiers PDF ont été convertis en BMP !",
      "Le fichier PDF a été converti en BMP !",
    ],
    "pdf-to-webp": [
      "Les fichiers PDF ont été convertis en WEBP !",
      "Le fichier PDF a été converti en WEBP !",
    ],
    "pdf-to-heif-heic": [
      "Les fichiers PDF ont été convertis en HEIF/HEIC !",
      "Le fichier PDF a été converti en HEIF/HEIC !",
    ],
    "image-to-pdf": [
      "Les fichiers image ont été convertis en PDF !",
      "Le fichier image a été converti en PDF !",
    ],
    "pdf-to-image": [
      "Les fichiers PDF ont été convertis en images !",
      "Le fichier PDF a été converti en image !",
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
    "pdf-to-jpg": [
      "Télécharger les fichiers JPG convertis",
      "Télécharger le fichier JPG converti",
    ],
    "pdf-to-svg": [
      "Télécharger les fichiers SVG convertis",
      "Télécharger le fichier SVG converti",
    ],
    "pdf-to-png": [
      "Télécharger les fichiers PNG convertis",
      "Télécharger le fichier PNG converti",
    ],
    "pdf-to-gif": [
      "Télécharger les fichiers GIF convertis",
      "Télécharger le fichier GIF converti",
    ],
    "pdf-to-tiff": [
      "Télécharger les fichiers TIFF convertis",
      "Télécharger le fichier TIFF converti",
    ],
    "pdf-to-bmp": [
      "Télécharger les fichiers BMP convertis",
      "Télécharger le fichier BMP converti",
    ],
    "pdf-to-webp": [
      "Télécharger les fichiers WEBP convertis",
      "Télécharger le fichier WEBP converti",
    ],
    "pdf-to-heif-heic": [
      "Télécharger les fichiers HEIF/HEIC convertis",
      "Télécharger le fichier HEIF/HEIC converti",
    ],
    "image-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "pdf-to-image": [
      "Télécharger les fichiers image convertis",
      "Télécharger le fichier image converti",
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
    "pdf-to-jpg": "Retour à PDF vers JPG",
    "pdf-to-svg": "Retour à PDF vers SVG",
    "pdf-to-png": "Retour à PDF vers PNG",
    "pdf-to-gif": "Retour à PDF vers GIF",
    "pdf-to-tiff": "Retour à PDF vers TIFF",
    "pdf-to-bmp": "Retour à PDF vers BMP",
    "pdf-to-webp": "Retour à PDF vers WEBP",
    "pdf-to-heif-heic": "Retour à PDF vers HEIF/HEIC",
    "image-to-pdf": "Retour à IMAGE vers PDF",
    "pdf-to-image": "Retour à PDF vers IMAGE",
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
    pdf_to_jpg: "Options de conversion de PDF en JPG",
    pdf_to_svg: "Options de conversion de PDF en SVG",
    pdf_to_png: "Options de conversion de PDF en PNG",
    pdf_to_gif: "Options de conversion de PDF en GIF",
    pdf_to_tiff: "Options de conversion de PDF en TIFF",
    pdf_to_bmp: "Options de conversion de PDF en BMP",
    pdf_to_webp: "Options de conversion de PDF en WebP",
    pdf_to_heif_heic: "Options de conversion de PDF en HEIF/HEIC",
    image_to_pdf: "Options de conversion d'IMAGE en PDF",
    pdf_to_image: "Options de conversion de PDF en IMAGE",
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
    pdf_to_jpg: "Convertir en JPG",
    pdf_to_svg: "Convertir en SVG",
    pdf_to_png: "Convertir en PNG",
    pdf_to_gif: "Convertir en GIF",
    pdf_to_tiff: "Convertir en TIFF",
    pdf_to_bmp: "Convertir en BMP",
    pdf_to_webp: "Convertir en WebP",
    pdf_to_heif_heic: "Convertir en HEIF/HEIC",
    image_to_pdf: "Convertir en PDF",
    pdf_to_image: "Convertir en IMAGE",
  },
  pages: "pages",
  page: "page",
  options_content: {
    image_to_pdf: {
      info: "Sélectionnez dans le menu déroulant le format d'image auquel vous souhaitez convertir :",
      placeholder: "Sélectionnez le format d'image..."
    }
  }
};



export const footer: _footer = {
  brand: "PDFEquips",
  terms: "conditions",
  conditions: "conditions d'utilisation",
  privacy_policy: "politique de confidentialité",
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
