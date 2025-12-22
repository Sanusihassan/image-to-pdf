import { type Action, type Dispatch } from "@reduxjs/toolkit";
import type { errors as _ } from "../content/content";
import { getMimeTypesFromPath, SUPPORTED_IMAGE_MIME_TYPES, validateFiles } from "../utils";
import { setField } from "../store";
import type { Paths } from "../content";

export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: Dispatch<Action>,
  setFiles: (files: FileList | File[]) => void,
  errors: typeof _,
  files: File[],
  path: Paths
) => {
  const _files = (e.target?.files as FileList) || null;
  const finalFiles = [...files, ...Array.from(!_files ? [] : _files)];

  const mimeTypes = getMimeTypesFromPath(path);

  const { isValid } = validateFiles(
    finalFiles,
    dispatch,
    errors,
    SUPPORTED_IMAGE_MIME_TYPES
  );

  if (isValid) {
    setFiles(finalFiles);
    const originalFileSize = finalFiles.reduce(
      (total, file) => total + file.size,
      0
    );

    dispatch(
      setField({
        originalFileSize,
      })
    );
  }
};
