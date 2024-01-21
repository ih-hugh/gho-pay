import { AAVELogo } from "@/components/assets/AAVELogo";
import { GhoPayLogo } from "@/components/assets/GhoPayLogo";
import { GhoTokenLogo } from "@/components/assets/GhoTokenLogo";
import { LeftRightIcon } from "@/components/assets/LeftRightIcon";

export const GhoPayBorrowing = () => {
  return (
    <div className="flex flex-col items-center bg-base-200 rounded-2xl shadow-2xl p-10  max-w-[600px] w-full max-h-[360px] h-full">
      <div className="flex items-center gap-3 ">
        <div className="flex flex-col items-center grow basis-0  ">
          <GhoPayLogo className=" scale-125" />
        </div>
      </div>
      <div className="flex py-12 gap-24 justify-center items-center flex-wrap">
        <div className="flex flex-col gap-4 items-center grow basis-0 max-w-md">
          <div className="flex items-center ">
            <div className="w-8 h-8  ">
              <AAVELogo className="" />
            </div>
            <LeftRightIcon className="" />

            <div className="w-8 h-8 bg-base-100 rounded-full  ">
              <GhoTokenLogo className="" />
            </div>
          </div>
          <span className=" text-2xl font-light text-primary text-center leading-8">
            Borrowing from Loan and Transferring
          </span>
          <span className=" text-md font-normal text-slate-200 text-center leading-4">
            Informational section that informs users on paying with GHO Loans vs Cashing their assets. (Taxes/Fees vs
            Loan APY)
          </span>
        </div>
      </div>
      <span className="relative flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
      </span>
    </div>
  );
};
