import React from "react";
import { GhoPayLogo } from "@/components/assets/GhoPayLogo";
import { USDCLogo } from "@/components/assets/USDCLogo";

export const GhoPayConfirming = () => {
  return (
    <div className="flex flex-col items-center bg-base-200 rounded-2xl shadow-2xl pt-10 px-12 pb-16  max-w-[600px] w-full max-h-[360px] h-full">
      <div className="flex items-center gap-3 ">
        <div className="flex flex-col items-center self-stretch">
          <GhoPayLogo className=" scale-125" />
        </div>
      </div>
      <div className="flex justify-between items-start self-stretch grow-basis-0 flex-nowrap h-full py-12">
        <div className="flex gap-4 items-start ">
          <div className="flex items-center gap-3.5  bg-base-100 rounded-lg p-2">
            <USDCLogo className="" />
          </div>
          <div className="flex flex-col gap-2 items-start ">
            <span className="text-lg font-light text-base-content  whitespace-nowrap">Loan Amount</span>
            <span className="text-2xl font-bold  text-center whitespace-nowrap8">2,500</span>
            <div className="flex justify-center items-center gap-2 ">
              <span className="text-xs font-bold text-secondary  whitespace-nowrap">Variable APY</span>
              <div className="w-[3px] h-5 bg-secondary" />
              <span className="text-sm font-bold text-secondary  whitespace-nowrap">8%</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-end grow basis-0 flex-nowrap ">
          <span className="text-sm self-stretch font-normal text-base-content  text-right whitespace-nowrap">
            Choose how to payback your loan:
          </span>
          <div className="flex flex-col gap-2 items-end ">
            <div className="flex justify-end items-center gap-2.5 ">
              <span className="text-xs font-bold text-base-content  text-right whitespace-nowrap">Pay back later</span>
              <div className="flex justify-center items-center rounded-full border-2 border-warning 8 w-3 h-3 p-1">
                {/* IMAGE HERE */}
              </div>
            </div>
            <div className="flex justify-end items-center gap-2.5 ">
              <span className="text-xs font-bold text-base-content  text-right whitespace-nowrap">Pay back now</span>
              <div className="flex justify-center items-center rounded-full border-2 border-neutral 2 w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      <button className="flex items-center self-end bg-primary rounded-lg border-none 4 pointer p-3 gap-2 w-28 h-9">
        <span className="text-sm font-bold text-primary-content  whitespace-nowrap">Confirm Loan</span>
      </button>
    </div>
  );
};
