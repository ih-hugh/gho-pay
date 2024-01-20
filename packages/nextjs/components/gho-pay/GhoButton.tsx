import { FC, ReactNode } from "react";

interface GhoButtonProps {
  url: string;
  children: ReactNode;
}

export const GhoButton: FC<GhoButtonProps> = ({ url, children }) => {
  return (
    <div className="flex w-[168.032px] h-[36px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[8px] items-center shrink-0 flex-nowrap rounded-[8px] relative z-[6]">
      <a target="_blank" rel="noopener noreferrer" href={url}>
        <button className="flex justify-center w-[168.032px] h-[36px] p-2 items-center gap-2 rounded-lg bg-gradient-to-b from-[#0891B2] to-[#67E8F9]">
          <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[17px] text-[#26284a] relative whitespace-nowrap z-[8]">
            {children}
          </span>
        </button>
      </a>
    </div>
  );
};
