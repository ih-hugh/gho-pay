import React, { useState } from "react";
import { AAVELogo } from "@/components/assets/AAVELogo";
import { BTCLogo } from "@/components/assets/BTCLogo";
import { GhoPayLogo } from "@/components/assets/GhoPayLogo";
import { USDCLogo } from "@/components/assets/USDCLogo";
import { WETHLogo } from "@/components/assets/WETHLogo";
import { GradientText } from "@/components/gho-pay/GradientText";
import classNames from "classnames";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

export const GhoPayStarting = () => {
  const [paymentAmount] = useState("2500.78");

  return (
    <div className="flex flex-col items-center bg-base-200 rounded-2xl shadow-2xl  max-w-[600px] w-full max-h-[360px]">
      <div className="flex items-center ">
        <div className="flex flex-col items-center grow basis-0   pt-10">
          <GhoPayLogo className=" scale-125 " />
        </div>
      </div>
      <div className="flex justify-between items-end flex-wrap   w-full pb-10 px-12">
        <div className="flex flex-col gap-2 items-start  ">
          <AAVELogo className="" />
          <div className="flex gap-8 items-center">
            <span className="text-lg font-light text-[#fafafa]  whitespace-nowrap ">Credit Limit</span>
          </div>
          <span className="justify-center items-start basis-auto text-2xl font-bold   text-center whitespace-nowrap ">
            <GradientText color="purple">$15,250</GradientText>
          </span>
          <span className="text-lg font-light text-[#fafafa]  whitespace-nowrap">Asset</span>
          <div className="flex gap-3 items-center">
            <div className="flex flex-col justify-center items-center bg-[#2d345a] rounded-lg p-2">
              <div className="w-12 h-12 ">
                <USDCLogo className="" />
              </div>
              <span className="justify-center items-start basis-auto text-lg font-bold text-[#fafafa]  text-center whitespace-nowrap">
                2,686
              </span>
              <span className="text-sm font-bold text-[#0891b2]  whitespace-nowrap">$2,400</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-12 h-12">
                <WETHLogo className="" />
              </div>
              <span className="justify-center items-start basis-auto text-lg font-bold text-[#fafafa]  text-center whitespace-nowrap">
                0.68
              </span>
              <span className="text-sm font-bold text-[#a3a5d3]  whitespace-nowrap">$1,099</span>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="w-12 h-12 bg-[#fafafa] rounded-full ">
                <BTCLogo className="" />
              </div>
              <span className="justify-center items-start basis-auto text-lg font-bold text-[#fafafa]  text-center whitespace-nowrap">
                0.58
              </span>
              <span className="text-sm font-bold text-[#a3a5d3]  whitespace-nowrap">$11,550</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-end ">
          <div className="flex gap-1 justify-end items-start ">
            <span className="text-sm font-normal text-[#fafafa]  whitespace-nowrap 3">Estimated Fees:</span>
            <span className="text-sm font-normal text-[#fafafa]  whitespace-nowrap 4">$0.78</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-lg font-light text-[#fafafa]  whitespace-nowrap 5">Total</span>
            <span
              className={classNames(
                "justify-center items-start  basis-auto text-2xl font-bold text-center whitespace-nowrap 6",
              )}
            >
              <GradientText color="blue">{paymentAmount}</GradientText>
            </span>
          </div>
          <div className="flex gap-3 items-center mb-3">
            <div className="flex items-start bg-[#2d345a] rounded-lg p-2 gap-2 ">
              <ArrowUturnLeftIcon className="h-5 w-5 text-[#0891b2]" />
            </div>
            <button className="flex items-center bg-[#67e8f9] rounded-lg border-none pointer p-3 gap-2">
              <div className="flex items-center">
                <span className="text-sm font-bold text-[#26284a]  whitespace-nowrap">Confirm Purchase</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
