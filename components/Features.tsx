import QuickIcon from "./icons/QuickIcon";
import { BiSelectMultiple } from "react-icons/bi";
import { CiLock } from "react-icons/ci";
import { useSelector } from "react-redux";
import { PiFileImageThin } from "react-icons/pi";
import RobustIcon from "./icons/Features/Robust";
import { IoMdOptions } from "react-icons/io";
import NoEmailIcon from "./icons/Features/NoEmail";
import { SiSvg } from "react-icons/si";
import { PiHandshake } from "react-icons/pi";
import EasyIcon from "./icons/Features/Easy";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { MdOutlineHighQuality } from "react-icons/md";
import { TbDownloadOff } from "react-icons/tb";
import { FastForwardIcon } from "@heroicons/react/solid";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import { AiOutlineOrderedList } from "react-icons/ai";
import type { toType } from "../src/content/content";
import type { ToolState } from "../src/store";

export const Features = ({
  features,
  tool,
}: {
  features: { title: string; description: string }[];
  tool: toType;
}) => {
  const stateShowTool = useSelector(
    (state: { tool: ToolState }) => state.tool.showTool
  );

  const iconsMap: {
    [K in toType]: any;
  } = {
    "/jpg-to-pdf": [RobustIcon, QuickIcon, MdOutlineHighQuality],
    "/png-to-pdf": [CiLock, RobustIcon, TbDownloadOff],
    "/gif-to-pdf": [QuickIcon, NoEmailIcon, TbDownloadOff],
    "/bmp-to-pdf": [FastForwardIcon, RobustIcon, CiLock],
    "/image-to-pdf": [QuickIcon, CiLock, RobustIcon],
    "/pdf-to-image": [CiLock, QuickIcon, RobustIcon],
    "/pdf-to-png": [EasyIcon, MdOutlineHighQuality, BiSelectMultiple],
    "/pdf-to-jpg": [FastForwardIcon, CiLock, MdOutlineHighQuality],
    "/pdf-to-gif": [PiFileImageThin, IoMdOptions, RiCheckboxMultipleLine],
    "/pdf-to-bmp": [CiLock, RobustIcon, QuickIcon],
    "/webp-to-pdf": [MdOutlineHighQuality, EasyIcon, RiCheckboxMultipleLine],
    "/heif-heic-to-pdf": [
      MdOutlineHighQuality,
      RiCheckboxMultipleLine,
      PiHandshake,
    ],
    "/svg-to-pdf": [AiOutlineOrderedList, QuickIcon, RobustIcon],
    "/pdf-to-svg": [SiSvg, RiCharacterRecognitionLine, RiCheckboxMultipleLine],
    "/pdf-to-tiff": [RobustIcon, NoEmailIcon, QuickIcon],
    "/pdf-to-webp": [
      PiFileImageThin,
      MdOutlineHighQuality,
      RiCheckboxMultipleLine,
    ],
    "/pdf-to-heif-heic": [
      PiFileImageThin,
      MdOutlineHighQuality,
      RiCheckboxMultipleLine,
    ],
    "/tiff-to-pdf": [QuickIcon, NoEmailIcon, RobustIcon],
  };
  // @ts-ignore
  const icons = iconsMap[tool];
  return (
    <div className={`features${stateShowTool ? "" : " d-none"}`}>
      {features.map(({ title, description }, i) => {
        const Icon = icons[i];
        return (
          <div className="feature">
            <Icon className="feature-icon" />
            <div className="title">{title}</div>
            <p className="description">{description}</p>
          </div>
        );
      })}
    </div>
  );
};
