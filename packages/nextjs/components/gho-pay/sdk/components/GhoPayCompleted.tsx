import Link from "next/link";
import { GradientText } from "../../GradientText";
import { GhoPayLogo } from "@/components/assets/GhoPayLogo";
import { GhoTokenLogo } from "@/components/assets/GhoTokenLogo";
import { PayWithGhoPayLogo } from "@/components/assets/PayWithGhoPayLogo";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export const GhoPayCompleted = () => {
  return (
    <div className="flex flex-col items-center bg-base-200 rounded-2xl shadow-2xl p-10  max-w-[600px] w-full max-h-[360px] h-full">
      <div className="flex items-center gap-3 ">
        <div className="flex flex-col items-center  ">
          <GhoPayLogo className=" scale-125 z-2" />
        </div>
      </div>
      <div className="flex flex-col w-full py-10">
        <div className="flex">
          <div className="flex flex-col items-start max-w-52 w-full">
            <div className="flex flex-col">
              <PayWithGhoPayLogo className=" w-48 h-48 -mb-2" />
              <Link href="#" className="text-xs whitespace-nowrap text-center underline leading-3">
                View on OpenSea
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center w-1/2">
            <div className="flex items-center ">
              {/* <LeftRightIcon className="" /> */}

              <div className="w-8 h-8 bg-base-100 rounded-full  ">
                <GhoTokenLogo className="" />
              </div>
              <div className="w-8 h-8  ">
                <CheckCircleIcon className="w-8 h-8" />
              </div>
            </div>
            <span className=" text-2xl font-normal whitespace-nowrap">
              <GradientText color="blue">Your purchase is complete!</GradientText>
            </span>
            <span className=" text-md font-normal text-slate-200 leading-4">
              You just made a purchase with GHO! You can go back and see your loan on Aave or have a look at your credit
              and balances.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
