import React from "react";
import type { edit_page, Paths } from "../../src/content";

export interface OptionsProps {
  tool: Paths;
  edit_page: edit_page;
  lang: string;
}

import { ImageOptions } from "./Options/ImageOptions";
import { ImageToPDFOptions } from "./Options/ImageToPDFOptions";
import { PDFToImageOptions } from "./Options/PDFToImageOptions";
import { PDFToGifOptions } from "./Options/PDFToGifOptions";
import { useSelector } from "react-redux";
import type { ToolState } from "../../src/store";
import { CTABtn } from "./Options/CTABtn";

const LimitationMsg = ({
  lang,
  edit_page,
}: {
  edit_page: edit_page;
  lang: string;
}) => {
  const limitationMsg = useSelector(
    (state: { tool: ToolState }) => state.tool.limitationMsg
  );
  return limitationMsg ? (
    <div className="limitation-alert" role="alert">
      {limitationMsg}
      <CTABtn cta={edit_page.cta} lang={lang} />
    </div>
  ) : null;
};

const Options = ({ tool, edit_page, lang }: OptionsProps) => {
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
    return (
      <>
        <PDFToGifOptions content={edit_page.pdfToGifContent} />
        <LimitationMsg edit_page={edit_page} lang="" />
      </>
    );
  } else if (tool.endsWith("to-pdf")) {
    return (
      <>
        <ImageToPDFOptions
          tool={tool}
          content={edit_page.imageToPDFOptionsContent}
        />
        <LimitationMsg edit_page={edit_page} lang="" />
      </>
    );
  } else if (tool.startsWith("pdf-to")) {
    return (
      <>
        <PDFToImageOptions
          content={edit_page.pdfToImageOptionsContent}
          tool={tool}
        />
        <LimitationMsg edit_page={edit_page} lang="" />
      </>
    );
  }

  return null;
};

export default Options;
