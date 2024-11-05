import axios from "axios";
import { Dispatch, RefObject } from "react";
import { downloadConvertedFile } from "../downloadFile";
import type { errors as _ } from "../../content";
import { AnyAction } from "@reduxjs/toolkit";
import {
  resetErrorMessage,
  setField,
  supportedImageTypes
} from "../store";

export const handleUpload = async (
  e: React.FormEvent<HTMLFormElement>,
  downloadBtn: RefObject<HTMLAnchorElement>,
  dispatch: Dispatch<AnyAction>,
  state: {
    path: string;
    errorMessage: string;
    selectedImageFormat: supportedImageTypes
  },
  files: File[],
  errors: _,
  filesOnSubmit: string[],
  setFilesOnSubmit: (value: string[]) => void
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files) return;
  // Extract file names from the File[] array
  const fileNames = files.map((file) => file.name);

  // Check if every file name in files is present in filesOnSubmit
  const allFilesPresent = fileNames.every((fileName) =>
    filesOnSubmit.includes(fileName)
  );

  if (allFilesPresent && files.length === filesOnSubmit.length) {
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    return;
  }

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  formData.append("selectedImageFormat", state.selectedImageFormat);
  let url;
  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `/api/${state.path}`;
    // url = `https://5000-planetcreat-pdfequipsap-te4zoi6qkr3.ws-eu102.gitpod.io/${state.path}`;
  } else {
    url = `/api/${state.path}`;
  }
  if (state.errorMessage) {
    return;
  }
  // formData.append("compress_amount", String(state.compressPdf));
  const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");
  const mimeTypeLookupTable: {
    [key: string]: { outputFileMimeType: string; outputFileName: string };
  } = {
    "application/zip": {
      outputFileMimeType: "application/zip",
      outputFileName: `PDFEquips-${state.path}.zip`,
    },
    "application/pdf": {
      outputFileMimeType: "application/pdf",
      outputFileName: `${originalFileName}.pdf`,
    },
    "image/jpeg": {
      outputFileMimeType: "image/jpeg",
      outputFileName: `${originalFileName}.jpg`,
    },
    "image/png": {
      outputFileMimeType: "image/png",
      outputFileName: `${originalFileName}.png`,
    },
    "image/gif": {
      outputFileMimeType: "image/gif",
      outputFileName: `${originalFileName}.gif`,
    },
    "image/tiff": {
      outputFileMimeType: "image/tiff",
      outputFileName: `${originalFileName}.tiff`,
    },
    "image/bmp": {
      outputFileMimeType: "image/bmp",
      outputFileName: `${originalFileName}.bmp`,
    },
    "image/svg+xml": {
      outputFileMimeType: "image/svg+xml",
      outputFileName: `${originalFileName}.svg`,
    },
    "image/webp": {
      outputFileMimeType: "image/webp",
      outputFileName: `${originalFileName}.webp`,
    },
    "image/heif": {
      outputFileMimeType: "image/heif",
      outputFileName: `${originalFileName}.heif`,
    },
    "image/heic": {
      outputFileMimeType: "image/heic",
      outputFileName: `${originalFileName}.heic`,
    },
  };


  try {
    const response = await axios.post(url, formData, {
      responseType: "arraybuffer",
    });
    // const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");
    const mimeType = response.data.type || response.headers["content-type"];
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {
      outputFileMimeType: mimeType,
      outputFileName: "",
    };
    const { outputFileMimeType, outputFileName } = mimeTypeData;

    dispatch(setField({ showDownloadBtn: true }));
    downloadConvertedFile(
      response,
      outputFileMimeType,
      outputFileName,
      downloadBtn
    );
    setFilesOnSubmit(files.map(f => f.name));

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      dispatch(resetErrorMessage());
      dispatch(setField({ isSubmitted: false }));
    }
  } catch (error) {
    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));
      return;
    }
    dispatch(setField({ isSubmitted: false }));
  } finally {
    dispatch(setField({ isSubmitted: false }));
  }
};
