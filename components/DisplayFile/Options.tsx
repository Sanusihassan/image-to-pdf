import React from "react";
import type { edit_page as _, Paths } from "../../src/content";

export interface OptionsProps {
  tool: Paths;
  edit_page: _;
}
import { ImageOptions } from "./Options/ImageOptions";
import { ImageToPDFOptions } from "./Options/ImageToPDFOptions";

const Options = ({ tool, edit_page }: OptionsProps) => {
  if (tool === "image-to-pdf") {
    return <ImageOptions content={edit_page.options_content.image_to_pdf} />;
  } else if (tool.includes("to-pdf")) {
    return (
      <ImageToPDFOptions
        tool={tool}
        content={edit_page.imageToPDFOptionsContent}
      />
    );
  }
};

export default Options;
