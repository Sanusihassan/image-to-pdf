import type {
  tool as _tool,
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
    title: "تحويل JPG إلى PDF",
    seoTitle: "تحويل JPG إلى PDF - محول مجاني عبر الإنترنت",
    description: "تحويل ملفات الصور JPG إلى مستندات PDF",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
    keywords: "تحويل JPG إلى PDF, محول JPG إلى PDF, تحويل الصور إلى PDF, تحويل JPG, تحويل الملفات",
    features: [
      {
        title: "حماية مضمونة للملفات",
        description: "يضمن تشفير TLS لدينا الأمان المستمر لصور JPEG الخاصة بك. ملفاتك غير قابلة للوصول لأي شخص، ونحن نحذفها تلقائيًا من خوادمنا بعد التحويل لزيادة راحة البال."
      },
      {
        title: "أداة سريعة وبسيطة لتحويل JPG إلى PDF",
        description: "ما عليك سوى سحب الملف وإفلاته في المنطقة المخصصة أعلاه لتحويله بسرعة من JPG إلى PDF. بالإضافة إلى ذلك، يمكنك تخصيص الإعدادات مثل الهوامش، الاتجاه، والحجم."
      },
      {
        title: "تحويل بجودة عالية",
        description: "يتيح PDFEquips للمستخدمين تحويل الصور إلى ملفات PDF بجودة عالية باستخدام تقنياته المتقدمة في التحويل. يحافظ على 100٪ من الجودة الأصلية."
      }
    ]
  },
  PNG_to_PDF: {
    title: "تحويل PNG إلى PDF",
    seoTitle: "تحويل PNG إلى PDF - محول مجاني عبر الإنترنت",
    description: "تحويل ملفات الصور PNG إلى مستندات PDF",
    color: "#3498db",
    type: ".png",
    to: "/png-to-pdf",
    keywords: "تحويل PNG إلى PDF, محول PNG إلى PDF, تحويل الصور إلى PDF, تحويل PNG, تحويل الملفات",
    features: [
      {
        title: "نحن نولي الأولوية لخصوصيتك",
        description: "لا يرى ملفاتك سوى أنت فقط - كما ينبغي أن يكون. يستخدم PDFEquips تشفير TLS لضمان الأمان في جميع نقل الملفات. تتم معالجة جميع الملفات تلقائيًا."
      },
      {
        title: "احتفظ بالدقة الأصلية لملفات PNG",
        description: "يمكنك تحويل صور PNG إلى ملفات PDF، مما يقلل فعليًا من حجم صور PNG. مع تقنيات التحويل المتقدمة من PDFEquips، يتم الحفاظ على الدقة الأصلية لصور PNG، مما يضمن عدم فقدان الجودة على الإطلاق."
      },
      {
        title: "تحويل بدون الحاجة إلى برامج",
        description: "لتحويل PNG إلى PDF، لا تحتاج إلى أي برامج. مع PDFEquips، يحدث التحويل في السحابة للحصول على خدمة سريعة من أي جهاز. فقط قم بالتحميل، التحويل، والاسترخاء."
      }
    ],
  },
  GIF_to_PDF: {
    title: "تحويل GIF إلى PDF",
    seoTitle: "تحويل GIF إلى PDF - محول مجاني عبر الإنترنت",
    description: "تحويل ملفات الصور GIF إلى مستندات PDF",
    color: "#636e72",
    type: ".gif",
    to: "/gif-to-pdf",
    keywords: "تحويل GIF إلى PDF, محول GIF إلى PDF, تحويل الصور إلى PDF, تحويل GIF, تحويل الملفات",
    features: [
      {
        title: "محول سريع من GIF إلى PDF",
        description: "مع هذه الأداة المفيدة، يستغرق تحويل صورة GIF إلى مستند PDF بضع ثوانٍ فقط. ببساطة قم بتحميل صورة GIF المتحركة الخاصة بك، قم بتخصيص إعدادات الإخراج، واحفظ ملفك. إنه سريع ومريح ومجاني تمامًا."
      },
      {
        title: "لا حاجة لتسجيل الدخول",
        description: "ادخل إلى منصتنا دون تعقيدات تسجيل الدخول. نحن نحترم وقتك وخصوصيتك من خلال تقديم خدمات تحويل سلسة في متناول يدك."
      },
      {
        title: "تحويل بدون الحاجة إلى برامج",
        description: "لتحويل GIF إلى PDF، لا تحتاج إلى أي برامج. مع PDFEquips، يحدث التحويل في السحابة للحصول على خدمة سريعة من أي جهاز. فقط قم بالتحميل، التحويل، والاسترخاء."
      }
    ],
  },
  TIFF_to_PDF: {
    title: "تحويل TIFF إلى PDF",
    seoTitle: "تحويل TIFF إلى PDF - محول مجاني عبر الإنترنت",
    description: "تحويل ملفات الصور TIFF إلى مستندات PDF",
    color: "#e45453",
    type: ".tiff",
    to: "/tiff-to-pdf",
    keywords: "تحويل TIFF إلى PDF, محول TIFF إلى PDF, تحويل الصور إلى PDF, تحويل TIFF, تحويل الملفات",
    features: [
      {
        title: "محول سريع من TIFF إلى PDF",
        description: "قم بتحويل صور TIFF إلى مستندات PDF بسرعة وكفاءة. تضمن أداتنا عملية تحويل سلسة في بضع نقرات فقط."
      },
      {
        title: "لا حاجة لتسجيل الدخول",
        description: "ادخل إلى منصتنا بسهولة دون الحاجة إلى أي بيانات تسجيل دخول. استمتع بخدمات تحويل TIFF إلى PDF الفورية دون تعقيدات تسجيل الدخول."
      },
      {
        title: "تحويل قوي قائم على السحابة",
        description: "استمتع بخدمة تحويل TIFF إلى PDF السريعة من أي جهاز مع الاعتماد على السحابة. ببساطة قم بتحميل ملفات TIFF الخاصة بك، التحويل، وتحميل مستندات PDF بسهولة."
      }
    ],
  },
  BMP_to_PDF: {
    title: "تحويل BMP إلى PDF",
    seoTitle: "تحويل BMP إلى PDF - محول مجاني عبر الإنترنت",
    description: "تحويل ملفات الصور BMP إلى مستندات PDF",
    color: "#573b26",
    type: ".bmp",
    to: "/bmp-to-pdf",
    keywords: "تحويل BMP إلى PDF, محول BMP إلى PDF, تحويل الصور إلى PDF, تحويل BMP, تحويل الملفات",
    features: [
      {
        title: "تحويل سريع",
        description: "قم بتحويل صور BMP إلى مستندات PDF بسرعة من خلال عملية التحويل السريعة لدينا. احصل على ملفات PDF جاهزة في ثوانٍ."
      },
      {
        title: "محرك قوي",
        description: "استمتع بمحرك تحويل قوي يضمن تحويل دقيق وموثوق من BMP إلى PDF في كل مرة، مع الحفاظ على الجودة والنزاهة."
      },
      {
        title: "معالجة آمنة",
        description: "أداة التحويل الخاصة بنا تضمن الأمان، حيث يتم معالجة جميع تحويلات BMP إلى PDF بشكل آمن. ملفاتك محمية طوال العملية."
      }
    ],
  },
  SVG_to_PDF: {
    title: "تحويل SVG إلى PDF",
    seoTitle: "تحويل SVG إلى PDF - محول مجاني عبر الإنترنت",
    description: "تحويل ملفات الصور SVG إلى مستندات PDF",
    color: "#ffb338",
    type: ".svg",
    to: "/svg-to-pdf",
    keywords: "تحويل SVG إلى PDF, محول SVG إلى PDF, تحويل الصور إلى PDF, تحويل SVG, تحويل الملفات",
    features: [
      {
        title: "إعادة ترتيب صور SVG",
        description: "يمكنك بسهولة إعادة ترتيب صور SVG قبل التحويل لتخصيص الترتيب في مستند PDF الخاص بك."
      },
      {
        title: "تحويل سريع",
        description: "قم بتحويل صور SVG إلى مستندات PDF بسرعة من خلال عملية التحويل السريعة لدينا. احصل على ملفات PDF جاهزة في ثوانٍ."
      },
      {
        title: "محرك قوي",
        description: "استمتع بمحرك تحويل قوي يضمن تحويل دقيق وموثوق من SVG إلى PDF في كل مرة، مع الحفاظ على الجودة والنزاهة."
      }
    ],
  },
  WebP_to_PDF: {
    title: "تحويل WebP إلى PDF",
    seoTitle: "تحويل WebP إلى PDF - محول مجاني عبر الإنترنت",
    description: "تحويل ملفات الصور WebP إلى مستندات PDF",
    color: "#6fc21f",
    type: ".webp",
    to: "/webp-to-pdf",
    keywords: "تحويل WebP إلى PDF, محول WebP إلى PDF, تحويل الصور إلى PDF, تحويل WebP, تحويل الملفات",
    features: [
      {
        title: "تحويل عالي الجودة",
        description: "استمتع بتحويل عالي الجودة لصور WebP إلى مستندات PDF، مع الحفاظ على دقة الصورة ووضوحها."
      },
      {
        title: "ترتيب الصفحات بسهولة",
        description: "يمكنك ترتيب الصفحات في مستند PDF بسهولة، لضمان الترتيب المطلوب لصور WebP المحولة."
      },
      {
        title: "دعم تعدد الصور",
        description: "قم بتحويل صور WebP متعددة إلى مستند PDF واحد، مما يتيح لك تنظيم الصور ومشاركتها بسهولة."
      }
    ],
  },
  HEIF_to_PDF: {
    title: "تحويل HEIF/HEIC إلى PDF",
    seoTitle: "تحويل HEIF/HEIC إلى PDF - محول مجاني عبر الإنترنت",
    description: "تحويل ملفات الصور HEIF/HEIC إلى مستندات PDF",
    color: "#c376b8",
    type: ".heif, .heic",
    to: "/heif-heic-to-pdf",
    keywords: "تحويل HEIF إلى PDF, تحويل HEIC إلى PDF, محول HEIF إلى PDF, محول HEIC إلى PDF, تحويل الصور إلى PDF, تحويل HEIF, تحويل HEIC, تحويل الملفات",
    features: [
      {
        title: "تحويل عالي الجودة",
        description: "قم بتحويل صور HEIF/HEIC إلى مستندات PDF بجودة عالية، مع ضمان وضوح الصورة ودقتها المثلى."
      },
      {
        title: "تحويل دفعة واحدة",
        description: "قم بتحويل صور HEIF/HEIC متعددة إلى مستند PDF واحد بكفاءة، مما يوفر الوقت والجهد لتحويلات كبيرة."
      },
      {
        title: "التوافق عبر الأنظمة",
        description: "يمكنك الوصول إلى محولنا من أي جهاز أو منصة لتحويل صور HEIF/HEIC إلى صيغة PDF بسهولة."
      }
    ],
  },
  PDF_to_JPG: {
    title: "PDF إلى JPG",
    seoTitle: "تحويل PDF إلى JPG - محول مجاني عبر الإنترنت",
    description: "تحويل ملفات PDF إلى ملفات صور JPG",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
    keywords: "تحويل PDF إلى JPG, محول PDF إلى JPG, تحويل PDF إلى صور, تحويل PDF إلى JPEG, تحويل الملفات",
    features: [
      {
        title: "أداة سريعة وبسيطة لتحويل PDF إلى JPG",
        description: "ببساطة قم بسحب وإسقاط ملفك في المنطقة المحددة أعلاه لتحويله بسرعة من PDF إلى JPG. بالإضافة إلى ذلك، يمكنك تخصيص الإعدادات مثل الهامش، الاتجاه، والحجم."
      },
      {
        title: "حماية مضمونة للملفات",
        description: "يضمن تشفير TLS لدينا الأمان المستمر لملفات PDF الخاصة بك. ملفاتك غير قابلة للوصول لأي شخص، ونحن نحذفها تلقائيًا من خوادمنا بعد التحويل لزيادة راحة البال."
      },
      {
        title: "تحويل بجودة عالية",
        description: "يتيح PDFEquips للمستخدمين تحويل مستندات PDF إلى ملفات JPG بجودة عالية باستخدام تقنياته المتقدمة في التحويل. يحافظ على 100٪ من الجودة الأصلية."
      }
    ],
  },
  PDF_to_PNG: {
    title: "تحويل PDF إلى PNG",
    seoTitle: "تحويل ملف PDF إلى PNG عبر الإنترنت - محول مجاني من PDF إلى صورة PNG",
    description: "تحويل ملفات PDF إلى ملفات صور PNG",
    color: "#3498db",
    type: ".pdf",
    to: "/pdf-to-png",
    keywords: "تحويل PDF إلى PNG, محول PDF إلى PNG, تحويل PDF إلى صور, تحويل PDF, تحويل الملفات",
    features: [
      {
        title: "واجهة سهلة الاستخدام",
        description: "يتميز محول PDF إلى PNG بواجهة سهلة الاستخدام وبسيطة، مما يجعل عملية التحويل سلسة للمستخدمين من جميع المستويات."
      },
      {
        title: "الحفاظ على جودة الصورة",
        description: "استمتع بصور PNG عالية الدقة دون فقدان الجودة. محولنا يحافظ على الجودة الأصلية لصور PDF أثناء عملية التحويل."
      },
      {
        title: "تحويل دفعة واحدة",
        description: "قم بتحويل صفحات أو مستندات PDF متعددة إلى صور PNG في وقت واحد بكفاءة. وفر الوقت والجهد من خلال ميزة التحويل الدفعي المتكاملة لدينا."
      }
    ],
  },
  PDF_to_GIF: {
    title: "تحويل PDF إلى GIF",
    seoTitle: "تحويل ملف PDF إلى GIF عبر الإنترنت - محول مجاني من PDF إلى صورة GIF",
    description: "تحويل ملفات PDF إلى ملفات صور GIF",
    color: "#636e72",
    type: ".pdf",
    to: "/pdf-to-gif",
    keywords: "تحويل PDF إلى GIF, محول PDF إلى GIF, تحويل PDF إلى صور, تحويل PDF, تحويل الملفات",
    features: [
      {
        title: "استخراج الصور",
        description: "قم باستخراج الصور من مستندات PDF وتحويلها إلى صيغة GIF، مع الحفاظ على جودة الصورة والشفافية."
      },
      {
        title: "إخراج قابل للتخصيص",
        description: "يمكنك تخصيص إعدادات الإخراج لصور GIF الخاصة بك، بما في ذلك الدقة، معدل الإطارات، ولوحة الألوان، لتناسب احتياجاتك."
      },
      {
        title: "دعم الصفحات المتعددة",
        description: "قم بتحويل مستندات PDF متعددة الصفحات إلى سلسلة من صور GIF، مع الحفاظ على تسلسل وترتيب الصفحات لكل GIF."
      }
    ],
  },
  PDF_to_TIFF: {
    title: "تحويل PDF إلى TIFF",
    seoTitle: "تحويل ملف PDF إلى TIFF عبر الإنترنت - محول مجاني من PDF إلى صورة TIFF",
    description: "تحويل ملفات PDF إلى ملفات صور TIFF",
    color: "#e45453",
    type: ".pdf",
    to: "/pdf-to-tiff",
    keywords: "تحويل PDF إلى TIFF, محول PDF إلى TIFF, تحويل PDF إلى صور, تحويل PDF, تحويل الملفات",
    features: [
      {
        title: "تحويل قوي قائم على السحابة",
        description: "استمتع بخدمة تحويل PDF إلى TIFF السريعة من أي جهاز مع الاعتماد على السحابة. ببساطة قم بتحميل مستندات PDF الخاصة بك، التحويل، وتحميل صور TIFF بسهولة."
      },
      {
        title: "لا حاجة لتسجيل الدخول",
        description: "ادخل إلى منصتنا بسهولة دون الحاجة إلى أي بيانات تسجيل دخول. استمتع بخدمات تحويل PDF إلى TIFF الفورية دون تعقيدات تسجيل الدخول."
      },
      {
        title: "محول سريع من PDF إلى TIFF",
        description: "قم بتحويل مستندات PDF الخاصة بك إلى صور TIFF بسرعة وكفاءة. تضمن أداتنا عملية تحويل سلسة في بضع نقرات فقط."
      }
    ],
  },
  PDF_to_BMP: {
    title: "تحويل PDF إلى BMP",
    seoTitle: "تحويل ملف PDF إلى BMP عبر الإنترنت - محول مجاني من PDF إلى صورة BMP",
    description: "تحويل ملفات PDF إلى ملفات صور BMP",
    color: "#573b26",
    type: ".pdf",
    to: "/pdf-to-bmp",
    keywords: "تحويل PDF إلى BMP, محول PDF إلى BMP, تحويل PDF إلى صور, تحويل PDF, تحويل الملفات",
    features: [
      {
        title: "معالجة آمنة",
        description: "أداة التحويل الخاصة بنا تضمن الأمان، حيث يتم معالجة جميع تحويلات PDF إلى BMP بشكل آمن. ملفاتك محمية طوال العملية."
      },
      {
        title: "محرك قوي",
        description: "استمتع بمحرك تحويل قوي يضمن تحويل دقيق وموثوق من PDF إلى BMP في كل مرة، مع الحفاظ على الجودة والنزاهة."
      },
      {
        title: "تحويل سريع",
        description: "قم بتحويل مستندات PDF إلى صور BMP بسرعة من خلال عملية التحويل السريعة لدينا. احصل على ملفات BMP جاهزة في ثوانٍ."
      }
    ],
  },
  PDF_to_SVG: {
    title: "تحويل PDF إلى SVG",
    seoTitle: "تحويل ملف PDF إلى SVG عبر الإنترنت - محول مجاني من PDF إلى صورة SVG",
    description: "تحويل ملفات PDF إلى ملفات صور SVG الشعاعية",
    color: "#ffb338",
    type: ".pdf",
    to: "/pdf-to-svg",
    keywords: "تحويل PDF إلى SVG, محول PDF إلى SVG, تحويل PDF إلى صور, تحويل PDF, تحويل الملفات",
    features: [
      {
        title: "تحويل الرسومات المتجهة",
        description: "قم بتحويل الرسومات المتجهة من PDF إلى صيغة SVG للحصول على صور قابلة للتوسيع وعالية الجودة يمكن تغيير حجمها دون فقدان الجودة."
      },
      {
        title: "الحفاظ على النصوص والرسومات",
        description: "احفظ النصوص والرسومات الأصلية من ملفات PDF الخاصة بك أثناء عملية التحويل لضمان الدقة والأصالة."
      },
      {
        title: "دعم الصفحات المتعددة",
        description: "قم بتحويل مستندات PDF متعددة الصفحات إلى ملفات SVG متعددة، مع الحفاظ على تسلسل وترتيب الصفحات لكل صورة SVG."
      }
    ],
  },
  PDF_to_WebP: {
    title: "تحويل PDF إلى WebP",
    seoTitle: "تحويل ملف PDF إلى WebP عبر الإنترنت - محول مجاني من PDF إلى صورة WebP",
    description: "تحويل ملفات PDF إلى ملفات صور WebP",
    color: "#6fc21f",
    type: ".pdf",
    to: "/pdf-to-webp",
    keywords: "تحويل PDF إلى WebP, محول PDF إلى WebP, تحويل PDF إلى صور, تحويل PDF, تحويل الملفات",
    features: [
      {
        title: "استخراج الصور",
        description: "قم باستخراج الصور من مستندات PDF وتحويلها إلى صيغة WebP، مع الحفاظ على جودة الصورة والشفافية."
      },
      {
        title: "تحويل عالي الجودة",
        description: "استمتع بتحويل عالي الجودة لمستندات PDF إلى صور WebP، مع ضمان وضوح الصورة ودقتها المثلى."
      },
      {
        title: "تحويل دفعة واحدة",
        description: "قم بتحويل صفحات أو مستندات متعددة من PDF إلى صيغة WebP في وقت واحد، مما يوفر الوقت والجهد لتحويلات كبيرة."
      }
    ],
  },
  PDF_to_HEIF: {
    title: "تحويل PDF إلى HEIF/HEIC",
    seoTitle: "تحويل ملف PDF إلى HEIF/HEIC عبر الإنترنت - محول مجاني من PDF إلى صورة HEIF",
    description: "تحويل ملفات PDF إلى ملفات صور HEIF/HEIC",
    color: "#c376b8",
    type: ".pdf",
    to: "/pdf-to-heif-heic",
    keywords: "تحويل PDF إلى HEIF, تحويل PDF إلى HEIC, محول PDF إلى HEIF, محول PDF إلى HEIC, تحويل PDF إلى صور, تحويل PDF, تحويل الملفات",
    features: [
      {
        title: "استخراج الصور",
        description: "قم باستخراج الصور من مستندات PDF وتحويلها إلى صيغة HEIF/HEIC، مع الحفاظ على جودة الصورة والشفافية."
      },
      {
        title: "تحويل عالي الجودة",
        description: "استمتع بتحويل عالي الجودة لملفات PDF إلى صور HEIF/HEIC، مع ضمان وضوح الصورة ودقتها المثلى."
      },
      {
        title: "دعم تنسيقات متعددة",
        description: "قم بتحويل ملفات PDF الخاصة بك إلى صيغة HEIF/HEIC بالإضافة إلى صيغ صور أخرى لتناسب تفضيلاتك."
      }
    ],
  },
  Image_to_PDF: {
    title: "تحويل الصور إلى PDF",
    seoTitle: "تحويل الصور إلى ملف PDF عبر الإنترنت - محول صور مجاني إلى PDF",
    description: "تحويل ملفات الصور (JPG، PNG، BMP، TIFF، GIF، SVG، WebP، HEIF) إلى مستندات PDF",
    color: "#3498db",
    type: "image",
    to: "/image-to-pdf",
    keywords: "تحويل الصور إلى PDF, محول الصور إلى PDF, تحويل JPG إلى PDF, تحويل PNG إلى PDF, تحويل BMP إلى PDF, تحويل TIFF إلى PDF, تحويل GIF إلى PDF, تحويل SVG إلى PDF, تحويل WebP إلى PDF, تحويل HEIF إلى PDF, تحويل الملفات",
    features: [
      {
        title: "حماية مضمونة للملفات",
        description: "حماية مضمونة للملفات الخاصة بك من خلال تشفير TLS. ملفاتك غير متاحة لأي شخص، ونقوم بحذفها تلقائيًا من خوادمنا بعد التحويل لمزيد من الطمأنينة."
      },
      {
        title: "أداة سريعة وبسيطة لتحويل الصور إلى PDF",
        description: "قم بسحب ملفك ببساطة وإسقاطه في المنطقة المخصصة أعلاه لتحويله بسرعة من تنسيقات الصور المختلفة إلى PDF. بالإضافة إلى ذلك، يمكنك تخصيص الإعدادات مثل الهامش والاتجاه والحجم."
      },
      {
        title: "تحويل عالي الجودة",
        description: "PDFEquips يسمح للمستخدمين بتحويل الصور إلى ملفات PDF عالية الجودة باستخدام تقنيات التحويل المتقدمة. يحافظ على 100% من الجودة الأصلية."
      }
    ]
  },
  PDF_to_Image: {
    title: "PDF إلى صورة",
    seoTitle: "تحويل مستندات PDF إلى صور - محول مجاني من PDF إلى صورة",
    description: "تحويل مستندات PDF إلى ملفات صور (JPG، PNG، BMP، TIFF، GIF، SVG، WebP، HEIF)",
    color: "#e74c3c",
    type: ".pdf",
    to: "/pdf-to-image",
    keywords: "تحويل PDF إلى صور, محول PDF إلى صور, تحويل PDF إلى JPG, تحويل PDF إلى PNG, تحويل PDF إلى BMP, تحويل PDF إلى TIFF, تحويل PDF إلى GIF, تحويل PDF إلى SVG, تحويل PDF إلى WebP, تحويل PDF إلى HEIF, تحويل الملفات",
    features: [
      {
        title: "حماية مضمونة للملفات",
        description: "حماية مضمونة للملفات الخاصة بك من خلال تشفير TLS. ملفاتك غير متاحة لأي شخص، ونقوم بحذفها تلقائيًا من خوادمنا بعد التحويل لمزيد من الطمأنينة."
      },
      {
        title: "أداة سريعة وبسيطة لتحويل PDF إلى صور",
        description: "قم بسحب ملفك PDF ببساطة وإسقاطه في المنطقة المخصصة أعلاه لتحويله بسرعة إلى تنسيقات صور مختلفة. بالإضافة إلى ذلك، يمكنك اختيار تنسيق الصورة المطلوب وإعدادات الجودة."
      },
      {
        title: "تحويل عالي الجودة",
        description: "PDFEquips يسمح للمستخدمين بتحويل مستندات PDF إلى ملفات صور عالية الجودة باستخدام تقنيات التحويل المتقدمة. يحافظ على 100% من الجودة الأصلية."
      }
    ]
  }
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
    "pdf-to-jpg": [
      "تم تحويل ملفات PDF إلى JPG!",
      "تم تحويل ملف PDF إلى JPG!",
    ],
    "pdf-to-svg": [
      "تم تحويل ملفات PDF إلى SVG!",
      "تم تحويل ملف PDF إلى SVG!",
    ],
    "pdf-to-png": [
      "تم تحويل ملفات PDF إلى PNG!",
      "تم تحويل ملف PDF إلى PNG!",
    ],
    "pdf-to-gif": [
      "تم تحويل ملفات PDF إلى GIF!",
      "تم تحويل ملف PDF إلى GIF!",
    ],
    "pdf-to-tiff": [
      "تم تحويل ملفات PDF إلى TIFF!",
      "تم تحويل ملف PDF إلى TIFF!",
    ],
    "pdf-to-bmp": [
      "تم تحويل ملفات PDF إلى BMP!",
      "تم تحويل ملف PDF إلى BMP!",
    ],
    "pdf-to-webp": [
      "تم تحويل ملفات PDF إلى WEBP!",
      "تم تحويل ملف PDF إلى WEBP!",
    ],
    "pdf-to-heif-heic": [
      "تم تحويل ملفات PDF إلى HEIF/HEIC!",
      "تم تحويل ملف PDF إلى HEIF/HEIC!",
    ],
    "image-to-pdf": [
      "تم تحويل ملفات الصور إلى PDF!",
      "تم تحويل ملف الصورة إلى PDF!"
    ],
    "pdf-to-image": [
      "تم تحويل ملفات PDF إلى صور!",
      "تم تحويل ملف PDF إلى صورة!"
    ]
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
    "pdf-to-jpg": [
      "تحميل ملفات JPG المحولة",
      "تحميل ملف JPG المحول"
    ],
    "pdf-to-svg": [
      "تحميل ملفات SVG المحولة",
      "تحميل ملف SVG المحول"
    ],
    "pdf-to-png": [
      "تحميل ملفات PNG المحولة",
      "تحميل ملف PNG المحول"
    ],
    "pdf-to-gif": [
      "تحميل ملفات GIF المحولة",
      "تحميل ملف GIF المحول"
    ],
    "pdf-to-tiff": [
      "تحميل ملفات TIFF المحولة",
      "تحميل ملف TIFF المحول"
    ],
    "pdf-to-bmp": [
      "تحميل ملفات BMP المحولة",
      "تحميل ملف BMP المحول"
    ],
    "pdf-to-webp": [
      "تحميل ملفات WEBP المحولة",
      "تحميل ملف WEBP المحول"
    ],
    "pdf-to-heif-heic": [
      "تحميل ملفات HEIF/HEIC المحولة",
      "تحميل ملف HEIF/HEIC المحول"
    ],
    "image-to-pdf": [
      "تنزيل ملفات PDF المحولة",
      "تنزيل ملف PDF المحول"
    ],
    "pdf-to-image": [
      "تنزيل ملفات الصور المحولة",
      "تنزيل ملف الصورة المحول"
    ]
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
    "pdf-to-jpg": "العودة إلى PDF إلى JPG",
    "pdf-to-svg": "العودة إلى تحويل PDF إلى SVG",
    "pdf-to-png": "العودة إلى تحويل PDF إلى PNG",
    "pdf-to-gif": "العودة إلى تحويل PDF إلى GIF",
    "pdf-to-tiff": "العودة إلى تحويل PDF إلى TIFF",
    "pdf-to-bmp": "العودة إلى تحويل PDF إلى BMP",
    "pdf-to-webp": "العودة إلى تحويل PDF إلى WEBP",
    "pdf-to-heif-heic": "العودة إلى تحويل PDF إلى HEIF/HEIC",
    "image-to-pdf": "العودة إلى تحويل الصورة إلى PDF",
    "pdf-to-image": "العودة إلى تحويل PDF إلى صورة"
  }
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
    pdf_to_jpg: "خيارات تحويل ملف PDF إلى JPG",
    pdf_to_svg: "خيارات تحويل PDF إلى SVG",
    pdf_to_png: "خيارات تحويل PDF إلى PNG",
    pdf_to_gif: "خيارات تحويل PDF إلى GIF",
    pdf_to_tiff: "خيارات تحويل PDF إلى TIFF",
    pdf_to_bmp: "خيارات تحويل PDF إلى BMP",
    pdf_to_webp: "خيارات تحويل PDF إلى WEBP",
    pdf_to_heif_heic: "خيارات تحويل PDF إلى HEIF/HEIC",
    image_to_pdf: "تحويل إلى PDF",
    pdf_to_image: "تحويل إلى صورة"
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
    pdf_to_jpg: "تحويل إلى JPG",
    pdf_to_svg: "تحويل إلى SVG",
    pdf_to_png: "تحويل إلى PNG",
    pdf_to_gif: "تحويل إلى GIF",
    pdf_to_tiff: "تحويل إلى TIFF",
    pdf_to_bmp: "تحويل إلى BMP",
    pdf_to_webp: "تحويل إلى WEBP",
    pdf_to_heif_heic: "تحويل إلى HEIF/HEIC",
    image_to_pdf: "تحويل إلى PDF",
    pdf_to_image: "تحويل إلى صورة"
  },
  pages: "صفحات",
  page: "صفحة واحدة",
  options_content: {
    image_to_pdf: {
      info: "اختر من القائمة المنسدلة تنسيق الصورة الذي ترغب في تحويله إليه:",
      placeholder: "اختر تنسيق الصورة..."
    }
  },
  cta: "عرض الخطط",
};


export const footer: _footer = {
  brand: "PDFEquips",
  terms: "الشروط",
  conditions: "والأحكام",
  privacy_policy: "سياسة الخصوصية",
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
  PASSWORD_REQUIRED: {
    message: "ملف PDF يتطلب كلمة مرور.",
    code: "PASSWORD_REQUIRED",
  },
  INCORRECT_PASSWORD: {
    message: "كلمة المرور التي أدخلتها غير صحيحة.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "لقد وصلت إلى الحد اليومي للاستخدام. يرجى ترقية خطتك لمواصلة استخدام الميزة بدون انقطاع.",
    code: "MAX_DAILY_USAGE",
  },
  MAX_PAGES_EXCEEDED: {
    message: "يتجاوز ملف PDF الحد الأقصى لعدد الصفحات وهو 50 صفحة.",
    code: "ERR_MAX_PAGES_EXCEEDED",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "تم اكتشاف مانع الإعلانات",
  description: "لاحظنا أنك تستخدم مانع الإعلانات. يرجى التفكير في تعطيله أو الترقية إلى النسخة المميزة للحصول على تجربة خالية من الإعلانات!",
  reloadPage: "إعادة تحميل الصفحة",
  upgradeToPremium: "الترقية إلى النسخة المميزة"
}