import type { edit_page as _ } from "../../content";
import { Alert } from "react-bootstrap";
import { InformationCircleIcon } from "@heroicons/react/solid";
import React from 'react';
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  StylesConfig,
  OptionProps
} from 'react-select';




export interface OptionsProps {
  layout?: string;
  edit_page: _;
}


// Define image formats options
const imageFormats = [
  { value: 'JPG', label: 'JPG' },
  { value: 'PNG', label: 'PNG' },
  { value: 'BMP', label: 'BMP' },
  { value: 'TIFF', label: 'TIFF' },
  { value: 'GIF', label: 'GIF' },
  { value: 'SVG', label: 'SVG' },
  { value: 'WebP', label: 'WebP' },
  { value: 'HEIF', label: 'HEIF' },
];

// Interface for image format option
interface ImageFormatOption {
  value: string;
  label: string;
}

// Define custom styles for react-select
const customStyles: StylesConfig<ImageFormatOption, false> = {
  option: (
    base: CSSObjectWithLabel,
    state: OptionProps<ImageFormatOption, false, GroupBase<ImageFormatOption>>
  ) => ({
    ...base,
    backgroundColor: state.isSelected ? '#273c75' : 'white',
    color: state.isSelected ? 'white' : 'black',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: state.isSelected ? '#273c75' : '#ddd',
      color: state.isSelected ? 'white' : 'black',
    },
  }),
  control: (base: CSSObjectWithLabel) => ({
    ...base,
    border: `1px solid #ced4da`, // example border style
    boxShadow: 'none',
    '&:hover': {
      border: `1px solid #ced4da`, // example hover border style
    },
  }),
};

const ImageOptions = ({ content }: { content: { info: string; placeholder: string } }) => {
  return (
    <div className="body">
      <Alert variant="info">
        <InformationCircleIcon className="icon" />{" "}
        {content.info}
      </Alert>
      <Select
        options={imageFormats}
        styles={customStyles}
        placeholder={content.placeholder}
      />
    </div>
  );
};



const Options = ({ layout, edit_page }: OptionsProps) => {
  return <>
    {layout === "image" ? <ImageOptions content={edit_page.options_content.image_to_pdf} /> : null}
  </>
};

export default Options;
