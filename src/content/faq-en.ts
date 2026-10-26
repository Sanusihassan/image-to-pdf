import type { FaqContent } from "./faq";

export const faq: FaqContent = {
  title: "Frequently Asked Questions",
  items: {
    "/pdf-to-jpg": [
      {
        question: "How do I convert a PDF to JPG?",
        answer: "Select your PDF or drag it into the area above. Choose «Page to JPG» to turn every page into an image, or «Extract Images» to save the images inside the PDF, then click «Convert to JPG».",
      },
      {
        question: "Is JPG the same as JPEG?",
        answer: "Yes. JPG and JPEG are two names for the same image format, so converting a PDF to JPG and converting a PDF to JPEG give you exactly the same files.",
      },
      {
        question: "Which image quality should I choose?",
        answer: "72 DPI is enough for the web, 150 DPI suits most uses, 300 DPI is for printing and 600 DPI for professional printing. Higher resolutions give sharper images and larger JPG files.",
      },
      {
        question: "Is it free to convert PDF to JPG?",
        answer: "Yes. It's free, needs no sign-up and runs in your browser on desktop, Android or iPhone, with nothing to install.",
      },
      {
        question: "Are my files safe?",
        answer: "Yes. Your files are transferred over an encrypted (TLS) connection and automatically deleted from our servers after processing.",
      },
    ],
    "/jpg-to-pdf": [
      {
        question: "How do I convert a JPG to PDF?",
        answer: "Click the select button or drag your JPG images into the area above. Optionally choose the page orientation, page size and margins, then click «Convert to PDF».",
      },
      {
        question: "How do I combine several JPG images into one PDF?",
        answer: "Add all your images and turn on «Merge all images into one PDF file». Your photos are combined into a single PDF document.",
      },
      {
        question: "Is it free to convert JPG to PDF?",
        answer: "Yes. Converting photos and JPG images to PDF is free, with no sign-up and no watermark, on desktop, Android or iPhone.",
      },
      {
        question: "Are my files safe?",
        answer: "Yes. Your files are transferred over an encrypted (TLS) connection and automatically deleted from our servers after processing.",
      },
    ],
    "/gif-to-pdf": [
      {
        question: "How do I convert a GIF to PDF?",
        answer: "Click the select button or drag your GIF images into the area above. Optionally choose the page orientation, page size and margins, then click «Convert to PDF».",
      },
      {
        question: "Can I combine several GIFs into one PDF?",
        answer: "Yes. Add all your GIF images and turn on «Merge all images into one PDF file» to get a single document.",
      },
      {
        question: "Is the GIF to PDF converter free?",
        answer: "Yes. It's free, needs no sign-up and adds no watermark.",
      },
      {
        question: "Are my files safe?",
        answer: "Yes. Your files are transferred over an encrypted (TLS) connection and automatically deleted from our servers after processing.",
      },
    ],
    "/heif-heic-to-pdf": [
      {
        question: "How do I convert a HEIC photo to PDF?",
        answer: "Select your HEIC or HEIF photos, or drag them into the area above, and click «Convert to PDF». There's no need to convert them to JPG first.",
      },
      {
        question: "What is a HEIC file?",
        answer: "HEIC (or HEIF) is the format iPhones use for photos by default. It takes less space than JPG, but many apps can't open it, so converting it to PDF makes it easy to share and print.",
      },
      {
        question: "Can I put several HEIC photos in one PDF?",
        answer: "Yes. Add all your photos and turn on «Merge all images into one PDF file».",
      },
      {
        question: "Are my files safe?",
        answer: "Yes. Your files are transferred over an encrypted (TLS) connection and automatically deleted from our servers after processing.",
      },
    ],
  },
};
