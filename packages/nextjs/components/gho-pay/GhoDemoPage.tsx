import { FC } from "react";
import { GhoButton } from "./GhoButton";
import { GradientText } from "./GradientText";
import { GhoPay } from "@/components/gho-pay/sdk/GhoPay";
import { GhoPayModal } from "@/components/gho-pay/sdk/components/GhoPayModal";
import { GhoPayModalButton } from "@/components/gho-pay/sdk/components/GhoPayModalButton";
import { useModal } from "@/components/gho-pay/sdk/hooks/useModal";

const DEMO_PURCHASE_AMOUNT = 20.0;
export const GhoDemoPage: FC<any> = () => {
  const { isShowing, toggle } = useModal();

  return (
    <div className="flex flex-col mb-20">
      <div className="mt-20 main-container flex w-[1000px] gap-[64px] items-start flex-nowrap relative mx-auto my-0">
        <div className="flex space-y-10 mb-12 w-[460px] flex-col gap-[16px] items-start shrink-0 flex-nowrap relative">
          <GradientText className="text-lg leading-10" color="blue">
            Demo
          </GradientText>
          <span className="flex w-[460px] h-[72px] justify-start items-start self-stretch shrink-0 font-['Inter'] text-[32px] font-bold leading-[36px] text-[#fafafa] relative text-left overflow-hidden z-[2]">
            What if you could participate <br />
            without the fees too?
          </span>
          <span className="flex w-[460px] h-[76px] justify-start items-start self-stretch shrink-0 font-['Inter'] text-[16px] font-light leading-[19.364px] text-[#fff] relative text-left z-[3]">
            Instead of constantly swapping assets and incurring gas fees and creating taxable events, just deposit your
            assets in AAVE!
            <br /> Then earn yield and make purchases with GHO backed by the value of your assets.
          </span>
        </div>
        <div className="flex tailwind pl-5 flex-col gap-[16px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[4]">
          <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Inter'] text-[18px] font-bold leading-[20px] text-[#ffc70a] relative text-left whitespace-nowrap z-[5]">
            Step 1:
          </span>
          <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Inter'] text-[16px] font-light leading-[19px] text-[#fff] relative text-left whitespace-nowrap z-[6]">
            Deposit assets on Aave or enable what you have already
          </span>
          <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
            <div className="w-[46.209px] h-[44px] shrink-0 bg-[url(../assets/images/709e7e50-be90-493b-bdbc-1cf787e52dd7.png)] bg-cover bg-no-repeat relative z-[8]" />
            <div className="flex w-[123px] h-[36px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[8px] items-center shrink-0 flex-nowrap rounded-[8px] relative z-[9]">
              <div className="flex w-[99px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-10">
                <GhoButton url={"https://staging.aave.com"}>Deposit Funds</GhoButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container flex w-[1000px] gap-[64px] items-start flex-nowrap relative mx-auto my-10">
        <div className="w-[480px] shadow-[0_10px_30px_0_rgba(0,0,0,0.25)] h-[480px] shrink-0 bg-[url(../assets/images/ffa17012-72a6-4f42-bcf6-8c319aa5c1f5.png)] bg-cover bg-no-repeat rounded-[32px] relative" />
        <div className="flex flex-col gap-[21px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[1]">
          <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Inter'] text-[18px] font-bold leading-[20px] text-[#ffc70a] relative text-left whitespace-nowrap z-[2]">
            Step 2:
          </span>
          <div className="self-stretch shrink-0 font-['Inter'] text-[16px] font-light leading-[19.364px] relative text-left z-[3]">
            <span className="font-['Inter'] text-[16px] font-light leading-[19.364px] text-[#fff] relative text-left">
              Buy this NFT right here with
            </span>
            <span className="font-['Inter'] text-[14px] font-bold leading-[19.364px] text-[#fff] relative text-left">
              ghopay -
            </span>
            <span className="font-['Inter'] text-[16px] font-light leading-[19.364px] text-[#fff] relative text-left">
              our simple button below!
            </span>
          </div>
          <span className="h-[36px] self-stretch shrink-0 basis-auto font-['Inter'] text-[32px] font-bold leading-[36px] text-[#fafafa] relative text-left whitespace-nowrap z-[4]">
            Pay with ghopay! #1
          </span>
          <span className="flex w-[456px] h-[57px] justify-start items-start self-stretch shrink-0 font-['Inter'] text-[16px] font-light leading-[19.364px] text-[#fff] relative text-left z-[5]">
            Demo NFT of how simple it can be to pay with ghopay a virtual on-chain credit card that allows users to
            purchase on-chain assets and experiences using GHO
          </span>
          <div className="flex w-[113px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[6] space-x-2">
            <div className="w-[32px] h-[32px] shrink-0 rounded-[100px] relative z-[7]">
              <div className="w-full h-full bg-[url(../assets/images/c8597f4f-b58d-454e-b78c-9c2d1f80e8d0.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[8]" />
            </div>
            <span className="flex w-[73px] h-[36px] justify-center items-center shrink-0 basis-auto font-['Inter'] text-[32px] font-bold leading-[36px] text-[#fafafa] relative text-center whitespace-nowrap z-[9]">
              20.00
            </span>
          </div>
          <div className="flex w-[184px] h-[90px] gap-[18px] items-center shrink-0 flex-nowrap relative z-10">
            <GhoPayModalButton toggleModal={toggle} />
          </div>
        </div>
      </div>
      <GhoPayModal isShowing={isShowing} hide={toggle}>
        <GhoPay showHeader balanceDue={DEMO_PURCHASE_AMOUNT} />
      </GhoPayModal>
    </div>
  );
};
