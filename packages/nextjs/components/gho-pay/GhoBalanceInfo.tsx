import { FC } from "react";
import { GhoButton } from "./GhoButton";

export const GhoBalanceInfo: FC<any> = () => {
  return (
    <div className="main-container mt-10 mb-10 flex w-[1000px] gap-[24px] items-start flex-nowrap relative mx-auto my-0">
      <div className="flex w-[460px] flex-col gap-[16px] items-start shrink-0 flex-nowrap relative">
        <span className="h-[20px] shrink-0 basis-auto font-['Inter'] text-[18px] font-light leading-[20px] relative text-left whitespace-nowrap z-[1]">
          Balances
        </span>
        <div className="w-[460px] shrink-0 font-['Inter'] text-[32px] font-bold leading-[36px] relative text-left z-[2]">
          <span className="font-['Inter'] text-[32px] font-bold leading-[36px] text-[#fafafa] relative text-left">
            Generate Loans based on your Available Collateral on
          </span>
          <span className="font-['Inter'] text-[32px] font-light leading-[40px] text-[#9825c0] relative text-left">
            {" "}
            AAVE
          </span>
        </div>
        <span className="flex w-[460px] font-thin h-[38px] justify-start items-start shrink-0 font-['Inter'] text-[16px] font-light leading-[19.364px] text-[#fff] relative text-left z-[3]">
          See what assets you have enabled as collateral with us and use those to pay with GHO
        </span>
        <div className="flex w-[230.241px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[4]">
          <div className="w-[46.209px] h-[44px] shrink-0 bg-[url(../assets/images/0cc33b79-afcc-49c0-aa5e-51b0ffb4b0c9.png)] bg-cover bg-no-repeat relative z-[5]" />
          <GhoButton url="https://staging.aave.com/">Enable More Assets</GhoButton>
        </div>
      </div>
      <div className="flex w-[534.552px] gap-[24px] items-start shrink-0 flex-wrap relative z-[9]">
        <div className="flex w-[243px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[8px] items-start flex-nowrap bg-[#1e1e27] rounded-[16px] relative shadow-[0_10px_30px_0_rgba(0,0,0,0.25)] z-10">
          <span className="h-[24px] shrink-0 basis-auto font-['Inter'] text-[24px] font-light leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-[11]">
            USDC
          </span>
          <div className="flex w-[126px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[12]">
            <div className="w-[32px] h-[32px] shrink-0 rounded-[100px] relative z-[13]">
              <div className="w-full h-full bg-[url(../assets/images/629b303a-71cb-4609-a561-e7aa5dbe4e6f.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[14]" />
            </div>
            <span className="flex w-[86px] h-[36px] justify-center items-center shrink-0 basis-auto font-['Inter'] text-[32px] font-bold leading-[36px] text-[#fafafa] relative text-center whitespace-nowrap z-[15]">
              2,150
            </span>
          </div>
          <div className="flex w-[150px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[16]">
            <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#a3a5d3] relative text-left whitespace-nowrap z-[17]">
              Toal Spent
            </span>
            <div className="w-[3px] h-[19px] shrink-0 bg-[#a3a5d3] relative z-[18]" />
            <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#a3a5d3] relative text-left whitespace-nowrap z-[19]">
              100 GHO
            </span>
          </div>
          <button className="flex w-[72px] h-[33px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#2c345a] rounded-[8px] border-none absolute top-[27px] right-[24px] z-20 pointer">
            <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[16.943px] text-[#fafafa] relative text-left whitespace-nowrap z-[21]">
              Enabled
            </span>
          </button>
        </div>
        <div className="flex w-[242px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[8px] items-start flex-nowrap bg-[#1e1e27] rounded-[16px] relative shadow-[0_10px_30px_0_rgba(0,0,0,0.25)] z-[22]">
          <span className="h-[24px] shrink-0 basis-auto font-['Inter'] text-[24px] font-light leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-[23]">
            WETH
          </span>
          <div className="flex w-[85px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[24]">
            <div className="w-[32px] h-[32px] shrink-0 relative z-[25]">
              <div className="w-full h-full bg-[url(../assets/images/7ef7b579-d483-4262-993b-72c252bc802c.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 overflow-hidden z-[26]" />
            </div>
            <span className="flex w-[45px] h-[36px] justify-center items-center shrink-0 basis-auto font-['Inter'] text-[32px] font-bold leading-[36px] text-[#fafafa] relative text-center whitespace-nowrap z-[27]">
              1.3
            </span>
          </div>
          <div className="flex w-[157px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[28]">
            <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#a3a5d3] relative text-left whitespace-nowrap z-[29]">
              Total Spent
            </span>
            <div className="w-[3px] h-[19px] shrink-0 bg-[#a3a5d3] relative z-30" />
            <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#a3a5d3] relative text-left whitespace-nowrap z-[31]">
              500 GHO
            </span>
          </div>
          <button className="flex w-[72px] h-[33px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#2c345a] rounded-[8px] border-none absolute top-[27px] right-[24px] z-[32] pointer">
            <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[16.943px] text-[#fafafa] relative text-left whitespace-nowrap z-[33]">
              Enabled
            </span>
          </button>
        </div>
        <div className="flex w-[242px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[8px] items-start flex-nowrap bg-[#1e1e27] rounded-[16px] relative shadow-[0_10px_30px_0_rgba(0,0,0,0.25)] z-[22]">
          <span className="h-[24px] shrink-0 basis-auto font-['Inter'] text-[24px] font-light leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-[23]">
            ARB
          </span>
          <div className="flex w-[85px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[24]">
            <div className="w-[32px] h-[32px] shrink-0 relative z-[25]">
              <div className="w-full h-full bg-[url(/Arbitrum.svg)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 overflow-hidden z-[26]" />
            </div>
            <span className="flex w-[45px] h-[36px] justify-center items-center shrink-0 basis-auto font-['Inter'] text-[32px] font-bold leading-[36px] text-[#fafafa] relative text-center whitespace-nowrap z-[27]">
              1.3
            </span>
          </div>
          <div className="flex w-[157px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[28]">
            <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#a3a5d3] relative text-left whitespace-nowrap z-[29]">
              Total Spent
            </span>
            <div className="w-[3px] h-[19px] shrink-0 bg-[#a3a5d3] relative z-30" />
            <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#a3a5d3] relative text-left whitespace-nowrap z-[31]">
              10,000 GHO
            </span>
          </div>
          <button className="flex w-[72px] h-[33px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#2c345a] rounded-[8px] border-none absolute top-[27px] right-[24px] z-[32] pointer">
            <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[16.943px] text-[#fafafa] relative text-left whitespace-nowrap z-[33]">
              Enabled
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
