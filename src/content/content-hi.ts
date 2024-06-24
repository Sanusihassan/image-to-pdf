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
    title: "JPG से PDF",
    seoTitle: "ऑनलाइन JPG को PDF में बदलें - मुफ्त JPG से PDF कनवर्टर",
    description: "JPG छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#f1c40f",
    type: ".jpg",
    to: "/jpg-to-pdf",
    features: [
      {
        title: "फ़ाइलों के लिए गारंटीकृत सुरक्षा",
        description: "हमारा TLS एन्क्रिप्शन आपके JPEGs के लिए लगातार सुरक्षा सुनिश्चित करता है। आपकी फ़ाइलें किसी के लिए भी अप्राप्य हैं, और हम उन्हें रूपांतरण के बाद अपने सर्वरों से स्वचालित रूप से हटा देते हैं ताकि आपको और भी अधिक शांति मिल सके।"
      },
      {
        title: "JPG को PDF में बदलने के लिए तेज़ और सरल उपकरण",
        description: "JPG को PDF में तेजी से बदलने के लिए बस अपनी फ़ाइल को ऊपर निर्दिष्ट क्षेत्र में खींचें और छोड़ें। इसके अतिरिक्त, आप मार्जिन, ओरिएंटेशन और आकार जैसी सेटिंग्स को अनुकूलित कर सकते हैं।"
      },
      {
        title: "उच्च-गुणवत्ता रूपांतरण",
        description: "PDFEquips उपयोगकर्ताओं को अपनी उन्नत रूपांतरण प्रौद्योगिकियों के साथ छवियों को उच्च-गुणवत्ता वाले PDF फ़ाइलों में बदलने की अनुमति देता है। यह मूल गुणवत्ता का 100% बनाए रखता है।"
      }
    ]
  },
  PNG_to_PDF: {
    title: "PNG से PDF",
    seoTitle: "ऑनलाइन PNG को PDF में बदलें - मुफ्त PNG से PDF कनवर्टर",
    description: "PNG छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#3498db",
    type: ".png",
    to: "/png-to-pdf",
    features: [
      {
        title: "आपकी गोपनीयता को प्राथमिकता दी गई है",
        description: "केवल आपके द्वारा आपके फ़ाइलों को कोई नहीं देखता—जैसा होना चाहिए। PDFEquips सुरक्षा के लिए सभी फ़ाइल ट्रांसफर में TLS एन्क्रिप्शन का उपयोग करता है। सभी फ़ाइलें स्वचालित रूप से प्रोसेस की जाती हैं।"
      },
      {
        title: "PNG फ़ाइलों के लिए मूल रिज़ॉल्यूशन बनाए रखें",
        description: "आप PNG छवियों को PDF फ़ाइलों में बदल सकते हैं, इससे PNG छवियों का आकार कम हो जाता है। PDFEquips के एडवांस्ड PDF कनवर्टर तकनीकों के साथ, PNG छवियों का मूल रिज़ॉल्यूशन संरक्षित रहता है, जिससे कोई गुणवत्ता का नुक़सान नहीं होता है।"
      },
      {
        title: "सॉफ़्टवेयर की आवश्यकता नहीं है, केवल अपलोड करें और बदलें",
        description: "PNG को PDF में बदलने के लिए आपको कोई सॉफ़्टवेयर की आवश्यकता नहीं है। PDFEquips के साथ, बदलाव क्लाउड में होता है ताकि किसी भी डिवाइस से त्वरित सेवा मिले। सिर्फ़ अपलोड करें, बदलें, आराम से बैठें और आराम करें।"
      }
    ]
  },
  GIF_to_PDF: {
    title: "GIF से PDF",
    seoTitle: "ऑनलाइन GIF को PDF में बदलें - मुफ्त GIF से PDF कनवर्टर",
    description: "GIF छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#636e72",
    type: ".gif",
    to: "/gif-to-pdf",
    features: [
      {
        title: "तेज GIF से PDF कनवर्टर",
        description: "इस उपयोगी टूल के साथ, GIF छवि को PDF दस्तावेज में बदलना केवल कुछ सेकंड में होता है। आप अपनी एनिमेटेड GIF छवि को अपलोड करें, आउटपुट सेटिंग्स को कस्टमाइज़ करें, और अपनी फ़ाइल को सेव करें। यह तेज, सुविधाजनक, और पूरी तरह से मुफ़्त है।"
      },
      {
        title: "लॉगिन की आवश्यकता नहीं है",
        description: "हमारे प्लेटफ़ॉर्म का उपयोग करने के लिए लॉगिन की परेशानियाँ नहीं हैं। हम आपके समय और गोपनीयता का सम्मान करते हैं और आपके हाथों में संवर्धित कन्वर्शन सेवाएं प्रदान करते हैं।"
      },
      {
        title: "सॉफ़्टवेयर की आवश्यकता नहीं है, केवल अपलोड करें और बदलें",
        description: "GIF को PDF में बदलने के लिए आपको कोई सॉफ़्टवेयर की आवश्यकता नहीं है। PDFEquips के साथ, बदलाव क्लाउड में होता है ताकि किसी भी डिवाइस से त्वरित सेवा मिले। सिर्फ़ अपलोड करें, बदलें, आराम से बैठें, और आराम करें।"
      }
    ]
  },
  TIFF_to_PDF: {
    title: "TIFF से PDF",
    seoTitle: "ऑनलाइन TIFF को PDF में बदलें - मुफ्त TIFF से PDF कनवर्टर",
    description: "TIFF छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#e45453",
    type: ".tiff",
    to: "/tiff-to-pdf",
    features: [
      {
        title: "तेज़ TIFF से PDF कनवर्टर",
        description: "अपनी TIFF छवियों को दस्तावेज़ PDF में तेज़ी से और दक्षता से कनवर्ट करें। हमारा टूल कुछ क्लिक में एक सहायक कनवर्ट प्रक्रिया सुनिश्चित करता है।"
      },
      {
        title: "लॉगिन की आवश्यकता नहीं है",
        description: "हमारे प्लेटफ़ॉर्म का उपयोग करने के लिए लॉगिन की परेशानियाँ मुफ़्त हैं। किसी भी लॉगिन संकट के बिना तत्काल TIFF से PDF कनवर्टर सेवाओं का आनंद लें।"
      },
      {
        title: "बहुत जोरदार क्लाउड-आधारित कनवर्टर",
        description: "किसी भी डिवाइस से त्वरित सेवा के लिए एक जोरदार क्लाउड-आधारित TIFF से PDF कनवर्टर अनुभव करें। बस अपनी TIFF फ़ाइलें अपलोड करें, कनवर्ट करें, और अपनी PDF छवियों को बिना किसी परेशानी के डाउनलोड करें।"
      }
    ]
  },
  BMP_to_PDF: {
    title: "BMP से PDF",
    seoTitle: "ऑनलाइन BMP को PDF में बदलें - मुफ्त BMP से PDF कनवर्टर",
    description: "BMP छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#573b26",
    type: ".bmp",
    to: "/bmp-to-pdf",
    features: [
      {
        title: "तेज कनवर्टर",
        description: "हमारे तेज कनवर्टर प्रक्रिया के साथ बिना किसी देरी के BMP छवियों को PDF दस्तावेज़ में तेजी से कनवर्ट करें। कुछ सेकंड में आपकी PDF फ़ाइलें तैयार हो जाती हैं।"
      },
      {
        title: "मजबूत इंजन",
        description: "एक मजबूत कनवर्टर इंजन का अनुभव करें जो हर बार सटीक और विश्वसनीय BMP से PDF कनवर्टर सुनिश्चित करता है, गुणवत्ता और अखंडता को बनाए रखते हुए।"
      },
      {
        title: "सुरक्षित प्रोसेसिंग",
        description: "हमारा कनवर्टर सुरक्षा को प्राथमिकता देता है, सुनिश्चित करता है कि सभी BMP से PDF कनवर्शन सुरक्षित रूप से प्रोसेस किए जाते हैं। आपकी फ़ाइलें प्रक्रिया के दौरान सुरक्षित रहती हैं।"
      }
    ]
  },
  SVG_to_PDF: {
    title: "SVG से PDF",
    seoTitle: "ऑनलाइन SVG को PDF में बदलें - मुफ्त SVG से PDF कनवर्टर",
    description: "SVG छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#ffb338",
    type: ".svg",
    to: "/svg-to-pdf",
    features: [
      {
        title: "SVG को दोबारा क्रमबद्ध करें",
        description: "आसानी से SVG छवियों को कनवर्ट करने से पहले अपने PDF दस्तावेज़ की क्रमबद्धता को अनुकूलित करें।"
      },
      {
        title: "तेज कनवर्टर",
        description: "हमारे तेज कनवर्टर प्रक्रिया के साथ बिना किसी देरी के SVG छवियों को PDF दस्तावेज़ में तेजी से कनवर्ट करें। कुछ सेकंड में आपकी PDF फ़ाइलें तैयार हो जाती हैं।"
      },
      {
        title: "मजबूत इंजन",
        description: "एक मजबूत कनवर्टर इंजन का अनुभव करें जो हर बार सटीक और विश्वसनीय SVG से PDF कनवर्टर सुनिश्चित करता है, गुणवत्ता और अखंडता को बनाए रखते हुए।"
      }
    ]
  },
  WebP_to_PDF: {
    title: "WebP से PDF",
    seoTitle: "ऑनलाइन WebP को PDF में बदलें - मुफ्त WebP से PDF कनवर्टर",
    description: "WebP छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#6fc21f",
    type: ".webp",
    to: "/webp-to-pdf",
    features: [
      {
        title: "उच्च गुणवत्ता कनवर्टर",
        description: "वेबपी छवियों को PDF दस्तावेज़ में उच्च गुणवत्ता की कनवर्टर अनुभव करें, छवि रिज़ॉल्यूशन और स्पष्टता को संरक्षित करते हुए।"
      },
      {
        title: "पृष्ठों को आसानी से व्यवस्थित करें",
        description: "आपकी पीडीएफ़ दस्तावेज़ में पृष्ठों की क्रमबद्धता को आसानी से व्यवस्थित करें, जिससे आपकी वेबपी छवियों के लिए चयनित क्रम हो।"
      },
      {
        title: "मल्टी-छवि समर्थन",
        description: "एक ही समय में कई वेबपी छवियों को एकल पीडीएफ़ दस्तावेज़ में कनवर्ट करें, जिससे छवियों को आसानी से व्यवस्थित और साझाकृति की जा सके।"
      }
    ]
  },
  HEIF_to_PDF: {
    title: "HEIF/HEIC से PDF",
    seoTitle: "ऑनलाइन HEIF/HEIC को PDF में बदलें - मुफ्त HEIF/HEIC से PDF कनवर्टर",
    description: "HEIF/HEIC छवि फ़ाइलों को PDF दस्तावेज़ों में बदलें",
    color: "#c376b8",
    type: ".heif, .heic",
    to: "/heif-heic-to-pdf",
    features: [
      {
        title: "उच्च गुणवत्ता कनवर्टर",
        description: "HEIF/HEIC छवियों को PDF दस्तावेज़ में उच्च गुणवत्ता के साथ कनवर्ट करें, छवि स्पष्टता और रिज़ॉल्यूशन को सुनिश्चित करते हुए।"
      },
      {
        title: "बैच कनवर्शन",
        description: "एक ही समय में कई HEIF/HEIC छवियों को एकल PDF दस्तावेज़ में तेजी से कनवर्ट करें, बड़े अनुच्छेदों के लिए समय और प्रयास बचाएं।"
      },
      {
        title: "क्रॉस-प्लेटफ़ॉर्म संगतता",
        description: "किसी भी डिवाइस या प्लेटफ़ॉर्म से हमारे कनवर्टर तक पहुंचें और HEIF/HEIC छवियों को पीडीएफ़ स्वरूप में संरचित रूप से कनवर्ट करें।"
      }
    ]
  },
  PDF_to_JPG: {
    title: "PDF से JPG में",
    seoTitle: "PDF से JPG में - PDF फ़ाइलों को JPG छवि फ़ाइलों में बदलें",
    description: "PDF फ़ाइलों को JPG छवि फ़ाइलों में बदलें",
    color: "#f1c40f",
    type: ".pdf",
    to: "/pdf-to-jpg",
    features: [
      {
        title: "उच्च गुणवत्ता कनवर्टर",
        description: "HEIF/HEIC छवियों को PDF दस्तावेज़ में उच्च गुणवत्ता के साथ कनवर्ट करें, छवि स्पष्टता और रिज़ॉल्यूशन को सुनिश्चित करते हुए।"
      },
      {
        title: "बैच कनवर्शन",
        description: "एक ही समय में कई HEIF/HEIC छवियों को एकल PDF दस्तावेज़ में तेजी से कनवर्ट करें, बड़े अनुच्छेदों के लिए समय और प्रयास बचाएं।"
      },
      {
        title: "क्रॉस-प्लेटफ़ॉर्म संगतता",
        description: "किसी भी डिवाइस या प्लेटफ़ॉर्म से हमारे कनवर्टर तक पहुंचें और HEIF/HEIC छवियों को पीडीएफ़ स्वरूप में संरचित रूप से कनवर्ट करें।"
      }
    ]
  },
  PDF_to_PNG: {
    title: "पीडीएफ से पीएनजी में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को पीएनजी में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को पीएनजी छवि फ़ाइलों में बदलें",
    color: "#3498db",
    type: ".pdf",
    to: "/pdf-to-png",
    features: [
      {
        title: "उपयोगकर्ता-मित्र संवाद",
        description: "हमारा PDF-से-PNG कनवर्टर एक आसान और उपयोगकर्ता-मित्र इंटरफ़ेस देशकों और सभी कौशल स्तर के उपयोगकर्ताओं के लिए कन्वर्ट प्रक्रिया को सुगम बनाता है।"
      },
      {
        title: "छवि गुणवत्ता को बनाए रखें",
        description: "छवि के गुणवत्ता में कोई कमी न होने दें। हमारा कनवर्टर कनवर्ट प्रक्रिया के दौरान आपकी PDF छवियों की मूल गुणवत्ता को संरक्षित रखता है।"
      },
      {
        title: "बैच कनवर्टर",
        description: "एक ही समय में कई पीडीएफ़ फ़ाइलों को बड़ी रफ्तार से PNG फ़ाइलों में बदलें, ताकि आपका समय और प्रयास बचे।"
      }
    ]
  },

  PDF_to_GIF: {
    title: "पीडीएफ से जीआईएफ़ में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को जीआईएफ़ में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को जीआईएफ़ छवि फ़ाइलों में बदलें",
    color: "#636e72",
    type: ".pdf",
    to: "/pdf-to-gif",
    features: [
      {
        title: "छवि निकालना",
        description: "PDF दस्तावेज़ से छवियाँ निकालें और उन्हें GIF प्रारूप में बदलें, छवि गुणवत्ता और पारदर्शिता को संरक्षित रखते हुए।"
      },
      {
        title: "कस्टमाइज़ किए गए आउटपुट",
        description: "अपनी GIF छवियों के लिए आउटपुट सेटिंग्स को customize करें, जैसे कि रेज़ोल्यूशन, फ्रेम दर, और और कई अन्य।"
      },
      {
        title: "कम्प्रेस्ड और हाई-क्वालिटी आउटपुट",
        description: "हमारा कनवर्टर छवियों को एक कंप्रेस्ड GIF में समाहित करता है जो गुणवत्ता को संरक्षित रखता है, गुणवत्ता कमी के बिना।"
      }
    ]
  },
  PDF_to_TIFF: {
    title: "पीडीएफ से टिफ़ में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को टिफ़ में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को टिफ़ छवि फ़ाइलों में बदलें",
    color: "#e45453",
    type: ".pdf",
    to: "/pdf-to-tiff",
    features: [
      {
        title: "गुणवत्ता के साथ कनवर्टर",
        description: "हमारा PDF से TIFF कनवर्टर कार्यक्षमता और गुणवत्ता के मामले में सुप्रसिद्ध है। आपकी छवियों का गुणवत्ता बनाए रखने के लिए आधुनिक तकनीकों का उपयोग करें।"
      },
      {
        title: "डॉक्युमेंट कनवर्टर",
        description: "हमारा कनवर्टर आपके डॉक्युमेंट्स को PDF से TIFF में अनुप्रयुक्त बनाने के लिए विशेषता से तैयार किया गया है।"
      },
      {
        title: "बैच कनवर्टर",
        description: "एक ही समय में कई PDF फ़ाइलों को बड़ी रफ्तार से TIFF फ़ाइलों में बदलें, जिससे समय और प्रयास बचे।"
      }
    ]
  },

  PDF_to_BMP: {
    title: "पीडीएफ से बीएमपी में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को बीएमपी में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को बीएमपी छवि फ़ाइलों में बदलें",
    color: "#573b26",
    type: ".pdf",
    to: "/pdf-to-bmp",
    features: [
      {
        title: "सुरक्षित प्रोसेसिंग",
        description: "हमारा कनवर्टर सुरक्षा को प्राथमिकता देता है, जिससे सभी PDF से BMP कनवर्शन सुरक्षित रूप से प्रोसेस किए जाते हैं। आपकी फ़ाइलें प्रक्रिया के दौरान सुरक्षित रहती हैं।"
      },
      {
        title: "मजबूत इंजन",
        description: "हर बार सही और विश्वसनीय PDF से BMP कनवर्शन सुनिश्चित करने के लिए एक मजबूत कनवर्शन इंजन का अनुभव करें, गुणवत्ता और पूर्णता को बनाए रखता है।"
      },
      {
        title: "त्वरित कनवर्शन",
        description: "हमारी तेज़ कनवर्शन प्रक्रिया के साथ त्वरित रूप से PDF दस्तावेज़ को BMP छवियों में कनवर्ट करें। अपनी BMP फ़ाइलें सेकंडों में तैयार करें।"
      }
    ]
  },

  PDF_to_SVG: {
    title: "पीडीएफ से स्वग में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को स्वग में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को स्वग वेक्टर छवि फ़ाइलों में बदलें",
    color: "#ffb338",
    type: ".pdf",
    to: "/pdf-to-svg",
    features: [
      {
        title: "वेक्टर ग्राफ़िक्स कनवर्शन",
        description: "विस्तारयोज्य और उच्च गुणवत्ता छवियों के लिए PDF वेक्टर ग्राफ़िक्स को SVG प्रारूप में कनवर्ट करें, जो गुणवत्ता की कोई कमी के बिना बदले जा सकते हैं।"
      },
      {
        title: "मजबूत टेक्स्ट और ग्राफ़िक्स का बनाए रखना",
        description: "कनवर्शन प्रक्रिया के दौरान अपने PDF फाइलों के मूल टेक्स्ट और ग्राफ़िक्स को बनाए रखें ताकि सटीकता और वफ़ादारी सुनिश्चित की जा सके।"
      },
      {
        title: "मल्टी-पेज समर्थन",
        description: "बहु-पृष्ठ PDF दस्तावेज़ को मल्टीपल SVG फ़ाइलों में कनवर्ट करें, हर SVG छवि के लिए पृष्ठों की क्रमबद्धता और क्रम को बनाए रखें।"
      }
    ]
  },
  PDF_to_WebP: {
    title: "पीडीएफ से वेबपी में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को वेबपी में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को वेबपी छवि फ़ाइलों में बदलें",
    color: "#6fc21f",
    type: ".pdf",
    to: "/pdf-to-webp",
    features: [
      {
        title: "छवि निकालना",
        description: "PDF दस्तावेज़ से छवियाँ निकालें और उन्हें WebP प्रारूप में बदलें, छवि गुणवत्ता और पारदर्शिता को संरक्षित रखते हुए।"
      },
      {
        title: "हाई-क्वालिटी कनवर्शन",
        description: "PDF दस्तावेज़ को WebP छवियों में उच्च गुणवत्ता कनवर्ट करने का अनुभव करें, जिससे छवि क्लैरिटी और रेज़ोल्यूशन सुनिश्चित हो।"
      },
      {
        title: "बैच कनवर्शन",
        description: "एक साथ बहुत से पृष्ठों या दस्तावेज़ों को PDF से WebP प्रारूप में कनवर्ट करें, जिससे बड़ी संख्या में कनवर्शन के लिए समय और प्रयास बचाएं।"
      }
    ]
  },

  PDF_to_HEIF: {
    title: "पीडीएफ से हीफ/हीइस में बदलें",
    seoTitle: "ऑनलाइन पीडीएफ को हीफ/हीइस में बदलें - मुफ्त पीडीएफ से छवि परिवर्तक",
    description: "पीडीएफ फ़ाइलों को हीफ/हीइस छवि फ़ाइलों में बदलें",
    color: "#c376b8",
    type: ".pdf",
    to: "/pdf-to-heif-heic",
    features: [
      {
        title: "छवि निकालना",
        description: "PDF दस्तावेज़ से छवियाँ निकालें और उन्हें HEIF/HEIC प्रारूप में बदलें, छवि गुणवत्ता और पारदर्शिता को संरक्षित रखते हुए।"
      },
      {
        title: "हाई-क्वालिटी कनवर्शन",
        description: "PDF फ़ाइलों को HEIF/HEIC छवियों में उच्च गुणवत्ता कनवर्ट करने का अनुभव करें, जिससे छवि क्लैरिटी और रेज़ोल्यूशन सुनिश्चित हो।"
      },
      {
        title: "मल्टीपल फ़ॉर्मेट समर्थन",
        description: "अपनी पसंद के हिसाब से PDF फ़ाइलों को HEIF/HEIC प्रारूप के साथ अन्य छवि प्रारूपों में कनवर्ट करें।"
      }
    ]
  },
  Image_to_PDF: {
    title: "Image vers PDF",
    seoTitle: "Convertir des Images en PDF en ligne - Convertisseur gratuit d'images en PDF",
    description: "Convertir des fichiers image (JPG, PNG, BMP, TIFF, GIF, SVG, WebP, HEIF) en documents PDF",
    color: "#3498db",
    type: "image",
    to: "/image-to-pdf",
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
    seoTitle: "Convertir des PDF en Images en ligne - Convertisseur gratuit de PDF en image",
    description: "Convertir des documents PDF en fichiers image (JPG, PNG, BMP, TIFF, GIF, SVG, WebP, HEIF)",
    color: "#e74c3c",
    type: ".pdf",
    to: "/pdf-to-image",
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
};

export const downloadFile: _downloadFile = {
  titles: {
    "jpg-to-pdf": [
      "JPG फ़ाइलें PDF में परिवर्तित की गई हैं!",
      "JPG फ़ाइल PDF में परिवर्तित की गई है!",
    ],
    "svg-to-pdf": [
      "SVG फ़ाइलें PDF में परिवर्तित की गई हैं!",
      "SVG फ़ाइल PDF में परिवर्तित की गई है!",
    ],
    "png-to-pdf": [
      "PNG फ़ाइलें PDF में परिवर्तित की गई हैं!",
      "PNG फ़ाइल PDF में परिवर्तित की गई है!",
    ],
    "gif-to-pdf": [
      "GIF फ़ाइलें PDF में परिवर्तित की गई हैं!",
      "GIF फ़ाइल PDF में परिवर्तित की गई है!",
    ],
    "tiff-to-pdf": [
      "TIFF फ़ाइलें PDF में परिवर्तित की गई हैं!",
      "TIFF फ़ाइल PDF में परिवर्तित की गई है!",
    ],
    "bmp-to-pdf": [
      "BMP फ़ाइलें PDF में परिवर्तित की गई हैं!",
      "BMP फ़ाइल PDF में परिवर्तित की गई है!",
    ],
    "webp-to-pdf": [
      "WEBP फ़ाइलें PDF में परिवर्तित की गई हैं!",
      "WEBP फ़ाइल PDF में परिवर्तित की गई है!",
    ],
    "heif-heic-to-pdf": [
      "HEIF/HEIC फ़ाइलें PDF में परिवर्तित की गई हैं!",
      "HEIF/HEIC फ़ाइल PDF में परिवर्तित की गई है!",
    ],
    "pdf-to-jpg": [
      "PDF फ़ाइलें JPG में परिवर्तित की गई हैं!",
      "PDF फ़ाइल JPG में परिवर्तित की गई है!",
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
    "image-to-pdf": [
      "छवि फ़ाइलें PDF में परिवर्तित की गई हैं!",
      "छवि फ़ाइल PDF में परिवर्तित की गई है!",
    ],
    "pdf-to-image": [
      "PDF फ़ाइलें छवि में परिवर्तित की गई हैं!",
      "PDF फ़ाइल छवि में परिवर्तित की गई है!",
    ],
  },

  btnText: {
    "jpg-to-pdf": [
      "डाउनलोड की गई परिवर्तित PDF फ़ाइलें",
      "डाउनलोड की गई परिवर्तित PDF फ़ाइल",
    ],
    "svg-to-pdf": [
      "डाउनलोड की गई परिवर्तित PDF फ़ाइलें",
      "डाउनलोड की गई परिवर्तित PDF फ़ाइल",
    ],
    "png-to-pdf": [
      "डाउनलोड की गई परिवर्तित PDF फ़ाइलें",
      "डाउनलोड की गई परिवर्तित PDF फ़ाइल",
    ],
    "gif-to-pdf": [
      "डाउनलोड की गई परिवर्तित PDF फ़ाइलें",
      "डाउनलोड की गई परिवर्तित PDF फ़ाइल",
    ],
    "tiff-to-pdf": [
      "डाउनलोड की गई परिवर्तित PDF फ़ाइलें",
      "डाउनलोड की गई परिवर्तित PDF फ़ाइल",
    ],
    "bmp-to-pdf": [
      "डाउनलोड की गई परिवर्तित PDF फ़ाइलें",
      "डाउनलोड की गई परिवर्तित PDF फ़ाइल",
    ],
    "webp-to-pdf": [
      "डाउनलोड की गई परिवर्तित PDF फ़ाइलें",
      "डाउनलोड की गई परिवर्तित PDF फ़ाइल",
    ],
    "heif-heic-to-pdf": [
      "डाउनलोड की गई परिवर्तित PDF फ़ाइलें",
      "डाउनलोड की गई परिवर्तित PDF फ़ाइल",
    ],
    "pdf-to-jpg": [
      "डाउनलोड की गई परिवर्तित JPG फ़ाइलें",
      "डाउनलोड की गई परिवर्तित JPG फ़ाइल",
    ],
    "pdf-to-svg": [
      "डाउनलोड की गई परिवर्तित SVG फ़ाइलें",
      "डाउनलोड की गई परिवर्तित SVG फ़ाइल",
    ],
    "pdf-to-png": [
      "डाउनलोड की गई परिवर्तित PNG फ़ाइलें",
      "डाउनलोड की गई परिवर्तित PNG फ़ाइल",
    ],
    "pdf-to-gif": [
      "डाउनलोड की गई परिवर्तित GIF फ़ाइलें",
      "डाउनलोड की गई परिवर्तित GIF फ़ाइल",
    ],
    "pdf-to-tiff": [
      "डाउनलोड की गई परिवर्तित TIFF फ़ाइलें",
      "डाउनलोड की गई परिवर्तित TIFF फ़ाइल",
    ],
    "pdf-to-bmp": [
      "डाउनलोड की गई परिवर्तित BMP फ़ाइलें",
      "डाउनलोड की गई परिवर्तित BMP फ़ाइल",
    ],
    "pdf-to-webp": [
      "डाउनलोड की गई परिवर्तित WEBP फ़ाइलें",
      "डाउनलोड की गई परिवर्तित WEBP फ़ाइल",
    ],
    "pdf-to-heif-heic": [
      "डाउनलोड की गई परिवर्तित HEIF/HEIC फ़ाइलें",
      "डाउनलोड की गई परिवर्तित HEIF/HEIC फ़ाइल",
    ],
    "image-to-pdf": [
      "डाउनलोड की गई परिवर्तित PDF फ़ाइलें",
      "डाउनलोड की गई परिवर्तित PDF फ़ाइल",
    ],
    "pdf-to-image": [
      "डाउनलोड की गई परिवर्तित छवि फ़ाइलें",
      "डाउनलोड की गई परिवर्तित छवि फ़ाइल",
    ],
  },

  backTo: {
    "jpg-to-pdf": "JPG से PDF वापस",
    "svg-to-pdf": "SVG से PDF वापस",
    "png-to-pdf": "PNG से PDF वापस",
    "gif-to-pdf": "GIF से PDF वापस",
    "tiff-to-pdf": "TIFF से PDF वापस",
    "bmp-to-pdf": "BMP से PDF वापस",
    "webp-to-pdf": "WebP से PDF वापस",
    "heif-heic-to-pdf": "HEIF/HEIC से PDF वापस",
    "pdf-to-jpg": "PDF से JPG वापस",
    "pdf-to-svg": "PDF से SVG वापस",
    "pdf-to-png": "PDF से PNG वापस",
    "pdf-to-gif": "PDF से GIF वापस",
    "pdf-to-tiff": "PDF से TIFF वापस",
    "pdf-to-bmp": "PDF से BMP वापस",
    "pdf-to-webp": "PDF से WebP वापस",
    "pdf-to-heif-heic": "PDF से HEIF/HEIC वापस",
    "image-to-pdf": "छवि से PDF वापस",
    "pdf-to-image": "PDF से छवि वापस",
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
    pdf_to_svg: "PDF से SVG विकल्प",
    pdf_to_png: "PDF से PNG विकल्प",
    pdf_to_gif: "PDF से GIF विकल्प",
    pdf_to_tiff: "PDF से TIFF विकल्प",
    pdf_to_bmp: "PDF से BMP विकल्प",
    pdf_to_webp: "PDF से WebP विकल्प",
    pdf_to_heif_heic: "PDF से HEIF/HEIC विकल्प",
    image_to_pdf: "चित्र से PDF विकल्प",
    pdf_to_image: "PDF से चित्र विकल्प"
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "अधिक फ़ाइलें जोड़ें",
  action_buttons: {
    jpg_to_pdf: "PDF में परिवर्तित करें",
    png_to_pdf: "PDF में परिवर्तित करें",
    gif_to_pdf: "PDF में परिवर्तित करें",
    tiff_to_pdf: "PDF में परिवर्तित करें",
    bmp_to_pdf: "PDF में परिवर्तित करें",
    svg_to_pdf: "PDF में परिवर्तित करें",
    webp_to_pdf: "PDF में परिवर्तित करें",
    heif_heic_to_pdf: "PDF में परिवर्तित करें",
    pdf_to_jpg: "JPG में परिवर्तित करें",
    pdf_to_svg: "SVG में परिवर्तित करें",
    pdf_to_png: "PNG में परिवर्तित करें",
    pdf_to_gif: "GIF में परिवर्तित करें",
    pdf_to_tiff: "TIFF में परिवर्तित करें",
    pdf_to_bmp: "BMP में परिवर्तित करें",
    pdf_to_webp: "WebP में परिवर्तित करें",
    pdf_to_heif_heic: "HEIF/HEIC में परिवर्तित करें",
    image_to_pdf: "PDF में परिवर्तित करें",
    pdf_to_image: "चित्र में परिवर्तित करें"
  },
  pages: "पेज",
  page: "पेज",
  options_content: {
    image_to_pdf: {
      info: "ड्रॉपडाउन से चयन करें जिस छवि प्रारूप में आप परिवर्तित करना चाहते हैं:",
      placeholder: "छवि प्रारूप का चयन करें..."
    }
  }
}


export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "शर्तें",
  conditions: "उपयोग की शर्तें",
  privacy_policy: "गोपनीयता नीति",
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
