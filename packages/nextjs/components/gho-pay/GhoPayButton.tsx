import { FC } from "react";

export const GhoPayButton: FC<any> = () => {
  return (
    <div className="main-container items-center justify-center bg-gradient-to-b from-[#0891B2] to-[#67E8F9] flex w-[184px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[7px]  flex-nowrap rounded-[8px] relative shadow-[0_10px_30px_0_rgba(0,0,0,0.25)] mx-auto my-0">
      <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[16.943px] text-[#26284a] relative text-left whitespace-nowrap flex items-center justify-center">
        Pay with
      </span>
      <div className="flex w-[57px] h-[19px] items-center shrink-0 flex-nowrap bg-[url(/logoicon.png)] bg-cover bg-no-repeat relative z-[4] justify-center" />
    </div>
  );
};
