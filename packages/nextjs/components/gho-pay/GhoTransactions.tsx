import { FC } from "react";

export const GhoTransactions: FC<any> = () => {
  return (
    <div className="main-container flex-col mt-10 mb-10 flex w-[1000px] gap-[24px] items-start flex-nowrap relative mx-auto my-0">
      <div className="main-container mt-10 mb-10 flex flex-col gap-4 items-start max-w-md   p-6 rounded-lg">
        <span className="text-sm font-semibold uppercase text-[#fff] opacity-70">Activity</span>
        <h1 className="text-2xl font-bold text-[#fff] leading-tight">
          Instant Access, <br /> No Onboarding Required
        </h1>
        <p className="text-[#fff] opacity-70 text-base">
          GHO Pay is designed for simplicity. No extensive onboarding needed - if you have assets on Aave, you are ready
          to unlock the full potential.
        </p>
        <a href="https://staging.aave.com/" className="flex items-center mt-4 text-[#8b5cf6]">
          Learn about GHO
        </a>
      </div>

      <div className="main-container flex w-[1000px] flex-col items-start flex-nowrap bg-[#1e1e27] rounded-[8px] relative shadow-[0_10px_30px_0_rgba(0,0,0,0.25)] mx-auto my-0">
        <div className="flex flex-col gap-px items-start self-stretch shrink-0 flex-nowrap relative">
          <div className="flex h-[61px] flex-col gap-px justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#232436] rounded-tl-[8px] rounded-tr-[8px] rounded-br-none rounded-bl-none relative z-[1]">
            <span className="flex h-[26px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[15px] font-medium leading-[26px] text-[#fafafa] absolute top-[17px] left-[3.85%] text-left whitespace-nowrap z-[2]">
              Reciever
            </span>
            <span className="flex h-[26px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[15px] font-medium leading-[26px] text-[#fafafa] absolute top-[17px] left-[22.39%] text-left whitespace-nowrap z-[3]">
              Platform
            </span>
            <span className="flex h-[26px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[15px] font-medium leading-[26px] text-[#fafafa] absolute top-[17px] left-[40.26%] text-left whitespace-nowrap z-[4]">
              Loan Status
            </span>
            <span className="flex h-[26px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[15px] font-medium leading-[26px] text-[#fafafa] absolute top-[17px] left-[58.97%] text-left whitespace-nowrap z-[5]">
              Transaction
            </span>
            <div className="h-0 self-stretch shrink-0 bg-[url(../assets/images/70000b96-fa2b-409b-9d33-5ea6c284cd99.png)] bg-cover bg-no-repeat border-solid border border-[#a3a5d3] relative z-[6]" />
          </div>
        </div>
        <div className="flex pt-[16px] pr-[45px] pb-[16px] pl-[45px] flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[7]">
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[8]">
            <div className="flex flex-col gap-[4px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[9]">
              <div className="h-[34px] self-stretch shrink-0 relative z-10">
                <div className="flex w-full gap-[18px] items-center flex-nowrap absolute top-0 left-0 z-[11]">
                  <div className="flex w-[165px] flex-col items-start shrink-0 flex-nowrap relative z-[12]">
                    <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[16.943px] text-[#fafafa] relative text-left whitespace-nowrap z-[13]">
                      ENS Domain
                    </span>
                    <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#67e8f9] relative text-left whitespace-nowrap z-[14]">
                      0x6778498GHJJSR7788
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[4px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[15]">
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[16.943px] text-[#fafafa] relative text-left whitespace-nowrap z-[16]">
                OpenSea
              </span>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#67e8f9] relative text-left whitespace-nowrap z-[17]">
                Contract Address
              </span>
            </div>
            <div className="flex flex-col gap-[8px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[18]">
              <button className="flex w-[76px] pt-[7px] pr-[20px] pb-[7px] pl-[20px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#ffc70a] rounded-[22.5px] border-none relative z-[19] pointer">
                <span className="flex w-[36px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#2d345a] relative text-center whitespace-nowrap z-20">
                  Open
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-[4px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[21]">
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[16.943px] text-[#0891b2] relative text-left whitespace-nowrap z-[22]">
                Tx Type
              </span>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#67e8f9] relative text-left whitespace-nowrap z-[23]">
                Date: DD/MM/YYYY
              </span>
            </div>
            <div className="flex flex-col gap-[8px] justify-center items-end self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[24]">
              <button className="flex w-[123px] h-[36px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[8px] items-center shrink-0 flex-nowrap bg-[#67e8f9] rounded-[8px] border-none relative z-[25] pointer">
                <div className="flex w-[99px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-[26]">
                  <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[17px] text-[#26284a] relative text-left whitespace-nowrap z-[27]">
                    Close Position
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex pt-[16px] pr-[45px] pb-[16px] pl-[45px] flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[28]">
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[29]">
            <div className="flex flex-col gap-[4px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-30">
              <div className="h-[34px] self-stretch shrink-0 relative z-[31]">
                <div className="flex w-full gap-[18px] items-center flex-nowrap absolute top-0 left-0 z-[32]">
                  <div className="flex w-[165px] flex-col items-start shrink-0 flex-nowrap relative z-[33]">
                    <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[16.943px] text-[#fafafa] relative text-left whitespace-nowrap z-[34]">
                      ENS Domain
                    </span>
                    <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#67e8f9] relative text-left whitespace-nowrap z-[35]">
                      0x6778498GHJJSR7788
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[4px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[36]">
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[16.943px] text-[#fafafa] relative text-left whitespace-nowrap z-[37]">
                OpenSea
              </span>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#67e8f9] relative text-left whitespace-nowrap z-[38]">
                Contract Address
              </span>
            </div>
            <div className="flex flex-col gap-[8px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[39]">
              <button className="flex w-[91px] pt-[7px] pr-[22px] pb-[7px] pl-[22px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#2d345a] rounded-[22.5px] border-none relative z-40 pointer">
                <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#fafafa] relative text-left whitespace-nowrap z-[41]">
                  Closed
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-[4px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[42]">
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[16.943px] text-[#0891b2] relative text-left whitespace-nowrap z-[43]">
                Tx Type
              </span>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#67e8f9] relative text-left whitespace-nowrap z-[44]">
                Date: DD/MM/YYYY
              </span>
            </div>
            <div className="flex flex-col gap-[8px] justify-center items-end self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[45]">
              <button className="flex w-[59px] h-[36px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[8px] items-center shrink-0 flex-nowrap bg-[#0891b2] rounded-[8px] border-none relative z-[46] pointer">
                <div className="flex w-[35px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-[47]">
                  <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[17px] text-[#a0fff3] relative text-left whitespace-nowrap z-[48]">
                    View
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex pt-[16px] pr-[45px] pb-[16px] pl-[45px] flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[49]">
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-50">
            <div className="flex flex-col gap-[4px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[51]">
              <div className="h-[34px] self-stretch shrink-0 relative z-[52]">
                <div className="flex w-full gap-[18px] items-center flex-nowrap absolute top-0 left-0 z-[53]">
                  <div className="flex w-[165px] flex-col items-start shrink-0 flex-nowrap relative z-[54]">
                    <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[16.943px] text-[#fafafa] relative text-left whitespace-nowrap z-[55]">
                      ENS Domain
                    </span>
                    <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#67e8f9] relative text-left whitespace-nowrap z-[56]">
                      0x6778498GHJJSR7788
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[4px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[57]">
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[16.943px] text-[#fafafa] relative text-left whitespace-nowrap z-[58]">
                OpenSea
              </span>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#67e8f9] relative text-left whitespace-nowrap z-[59]">
                Contract Address
              </span>
            </div>
            <div className="flex flex-col gap-[8px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[60]">
              <button className="flex w-[94px] pt-[7px] pr-[20px] pb-[7px] pl-[20px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#67e8f9] rounded-[22.5px] border-none relative z-[61] pointer">
                <span className="flex w-[54px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#2d345a] relative text-center whitespace-nowrap z-[62]">
                  Pending
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-[4px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[63]">
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[16.943px] text-[#0891b2] relative text-left whitespace-nowrap z-[64]">
                Tx Type
              </span>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Inter'] text-[14px] font-normal leading-[16.943px] text-[#67e8f9] relative text-left whitespace-nowrap z-[65]">
                Date: DD/MM/YYYY
              </span>
            </div>
            <div className="flex flex-col gap-[8px] justify-center items-end self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[66]">
              <button className="flex w-[123px] h-[36px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[8px] items-center shrink-0 flex-nowrap bg-[#0891b2] rounded-[8px] border-none relative z-[67] pointer">
                <div className="flex w-[99px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-[68]">
                  <span className="h-[17px] shrink-0 basis-auto font-['Inter'] text-[14px] font-bold leading-[17px] text-[#a0fff3] relative text-left whitespace-nowrap z-[69]">
                    Block Explorer
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
