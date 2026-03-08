import { useState } from "react";

const StarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="#00b67a"
    stroke="#00b67a"
    strokeWidth="1.5"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export interface TrustpilotCTAContent {
  prompt: string; // e.g. "Happy with the result?"
  cta: string; // e.g. "Rate us"
  conjunction: string; // e.g. "on"
  platformName: string; // e.g. "Trustpilot"
  href: string; // e.g. "https://www.trustpilot.com/review/pdfequips.com"
}

interface TrustpilotCTAProps {
  content: TrustpilotCTAContent;
}

export default function TrustpilotCTA({ content }: TrustpilotCTAProps) {
  const [hovered, setHovered] = useState(false);
  const { prompt, cta, conjunction, platformName, href } = content;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => e.stopPropagation()}
      className={`inline-flex mt-2 items-center gap-2.5 px-4.5 py-2.5 rounded-lg border transition-all duration-200 cursor-pointer no-underline
        ${
          hovered
            ? "border-[#00b67a] bg-[#f5fdf9] shadow-[0_2px_12px_rgba(0,182,122,0.12)]"
            : "border-[#e4e4e4] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
        }`}
    >
      {/* Stars */}
      <span className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <StarIcon key={i} />
        ))}
      </span>

      {/* Divider */}
      <span className="w-px h-5 bg-[#e4e4e4] shrink-0" />

      {/* Text */}
      <span className="text-[13px] text-[#444] font-sans whitespace-nowrap leading-none">
        {prompt} <span className="text-[#00b67a] font-semibold">{cta}</span>
      </span>

      {/* Trustpilot branding */}
      <span className="flex items-center gap-1 ml-0.5">
        <span className="text-[11px] text-[#888] font-sans whitespace-nowrap">
          {conjunction}
        </span>
        <span className="inline-flex items-center justify-center w-4.5 h-4.5 bg-[#00b67a] rounded-[3px] shrink-0">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </span>
        <span className="text-[13px] font-bold text-[#191919] font-sans tracking-tight">
          {platformName}
        </span>
      </span>
    </a>
  );
}
