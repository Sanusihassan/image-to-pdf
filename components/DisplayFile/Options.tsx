// import type { edit_page as _ } from "../../content";
import { Alert } from "react-bootstrap";
import { InformationCircleIcon } from "@heroicons/react/solid";
import React from "react";
import type {
  CSSObjectWithLabel,
  GroupBase,
  StylesConfig,
  OptionProps,
  ClearIndicatorProps,
} from "react-select";
import Select from "react-select";
import { useDispatch } from "react-redux";
import type { edit_page as _ } from "../../src/content";

export interface OptionsProps {
  layout?: string;
  edit_page: _;
}
import { setField } from "../../src/store";
import type { supportedImageTypes } from "../../src/store";
// Define image formats options
const imageFormats: { value: supportedImageTypes; label: string }[] = [
  { value: "JPG", label: "JPG" },
  { value: "PNG", label: "PNG" },
  { value: "BMP", label: "BMP" },
  { value: "TIFF", label: "TIFF" },
  { value: "GIF", label: "GIF" },
  { value: "SVG", label: "SVG" },
  { value: "WebP", label: "WebP" },
  { value: "HEIF", label: "HEIF" },
];

// Interface for image format option
interface ImageFormatOption {
  value: supportedImageTypes; // Adjust to match supportedImageTypes
  label: string;
}

// Define custom styles for react-select
const customStyles: StylesConfig<
  ImageFormatOption,
  false,
  GroupBase<ImageFormatOption>
> = {
  option: (
    base: CSSObjectWithLabel,
    state: OptionProps<ImageFormatOption, false, GroupBase<ImageFormatOption>>
  ) => ({
    ...base,
    backgroundColor: state.isSelected ? "#273c75" : "white",
    color: state.isSelected ? "white" : "black",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: state.isSelected ? "#273c75" : "#ddd",
      color: state.isSelected ? "white" : "black",
    },
  }),
  control: (base: CSSObjectWithLabel) => ({
    ...base,
    border: `1px solid #ced4da`, // example border style
    boxShadow: "none",
    "&:hover": {
      border: `1px solid #ced4da`, // example hover border style
    },
  }),
  clearIndicator: (
    base: CSSObjectWithLabel,
    props: ClearIndicatorProps<
      ImageFormatOption,
      false,
      GroupBase<ImageFormatOption>
    >
  ) => ({
    ...base,
    cursor: "pointer",
    color: "#aaa",
    "&:hover": {
      color: "#333",
    },
  }),
};

const ImageOptions = ({
  content,
}: {
  content: { info: string; placeholder: string };
}) => {
  const dispatch = useDispatch();
  return (
    <div className="body">
      <Alert variant="info">
        <InformationCircleIcon className="icon" /> {content.info}
      </Alert>
      <Select
        options={imageFormats}
        // @ts-ignore
        styles={customStyles as unknown as ImageFormatOption}
        placeholder={content.placeholder}
        // @ts-ignore
        onChange={(v: { value: supportedImageTypes }) => {
          dispatch(
            setField({
              selectedImageFormat: v.value,
            })
          );
        }}
      />
    </div>
  );
};

const Options = ({ layout, edit_page }: OptionsProps) => {
  return (
    <>
      {layout === "image" ? (
        <ImageOptions content={edit_page.options_content.image_to_pdf} />
      ) : null}
    </>
  );
};

export default Options;
