import { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import type { errors as _, edit_page, Paths } from "../src/content";
import Files from "./DisplayFile/Files";
type propTypes = {
  extension: string;
  pages: string;
  page: string;
  lang: string;
  errors: _;
  edit_page: edit_page;
  path: Paths;
};

const DisplayFile = ({
  extension,
  pages,
  page,
  lang,
  errors,
  edit_page,
  path,
}: propTypes) => {
  const [toolTipSizes, setToolTipSizes] = useState<string[]>([]);

  return (
    <>
      <Files
        errors={errors}
        extension={extension}
        setToolTipSizes={setToolTipSizes}
        toolTipSizes={toolTipSizes}
        loader_text={edit_page.loader_text}
        fileDetailProps={[pages, page, lang]}
        path={path}
      />
    </>
  );
};

export default DisplayFile;
