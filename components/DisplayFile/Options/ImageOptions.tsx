import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import type {
  StylesConfig,
  GroupBase,
  CSSObjectWithLabel,
  OptionProps,
  ClearIndicatorProps,
} from "react-select";
import Select from "react-select";
import { type supportedImageTypes, setField } from "../../../src/store";
import { InformationCircleIcon } from "@heroicons/react/solid";
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

export const ImageOptions = ({
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
