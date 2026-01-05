import React from "react";
import type { edit_page, Paths } from "../../src/content";

export interface OptionsProps {
  tool: Paths;
  edit_page: edit_page;
}

import { ImageOptions } from "./Options/ImageOptions";
import { ImageToPDFOptions } from "./Options/ImageToPDFOptions";
import { PDFToImageOptions } from "./Options/PDFToImageOptions";
import { PDFToGifOptions } from "./Options/PDFToGifOptions";

const Options = ({ tool, edit_page }: OptionsProps) => {
  if (tool === "pdf-to-image") {
    return (
      <>
        <ImageOptions content={edit_page.options_content.image_to_pdf} />
        <PDFToImageOptions
          content={edit_page.pdfToImageOptionsContent}
          tool={tool}
        />
      </>
    );
  } else if (tool === "pdf-to-gif") {
    return <PDFToGifOptions content={edit_page.pdfToGifContent} />;
  } else if (tool.endsWith("to-pdf")) {
    return (
      <ImageToPDFOptions
        tool={tool}
        content={edit_page.imageToPDFOptionsContent}
      />
    );
  } else if (tool.startsWith("pdf-to")) {
    return (
      <>
        <PDFToImageOptions
          content={edit_page.pdfToImageOptionsContent}
          tool={tool}
        />
      </>
    );
  }

  return null;
};

export default Options;
