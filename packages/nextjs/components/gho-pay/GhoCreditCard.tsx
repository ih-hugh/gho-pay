"use client";

import { FC } from "react";
import { GradientText } from "./GradientText";
import useAaveData from "@/hooks/scaffold-eth/useAAVEData";
import { ConnectKitButton } from "connectkit";

interface GhoCreditCardProps {
  creditLimit: number | null;
  enabledAssets: GhoCreditCardAssets[];
  ensDomainName: string | null | undefined;
  userAddress: string | undefined;
  // Add other props as needed
}

interface GhoCreditCardAssets {
  name: string;
  icon: string;
}

export const GhoCreditCard: FC<GhoCreditCardProps> = ({ ensDomainName, userAddress }) => {
  const { data: aaveData }: any = useAaveData(userAddress);

  // useEffect(() => {
  //   console.log("AAVE DATA: ", aaveData);

  //   console.log(
  //     "USER_RESERVE: ",
  //     aaveData?.usersummary?.formattedPoolReserves?.map((poolReserves: any) => {
  //       console.log("POOL_RESERVES: ", poolReserves);
  //     }),
  //   );
  // }, [userAddress, aaveData]);

  return (
    <>
      {" "}
      {
        <div className="relative mx-auto my-0 z-50 -top-36 ">
          {!userAddress && (
            <div className="absolute inset-0 rounded-[16px]  bg-white bg-opacity-10 flex justify-center items-center z-50  ">
              <div className="flex flex-col items-center space-y-8">
                <div className="w-[46.209px] h-[44px] shrink-0 bg-[url(../assets/images/0cc33b79-afcc-49c0-aa5e-51b0ffb4b0c9.png)] bg-cover bg-no-repeat relative z-[5]" />
                {/* <GhoButton url="">Connect Wallet</GhoButton> */}
                <ConnectKitButton theme="retro" />
                <span>Connect Aave assets to see Credit Limit</span>
              </div>
            </div>
          )}

          <div
            className={` ${
              !userAddress && "blur-md"
            } main-container flex w-[529px] pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col gap-[16px] justify-center items-start flex-nowrap bg-[#1e1e27] relative shadow-[0_10px_30px_0_rgba(0,0,0,0.25)] mx-auto my-0 rounded-2xl`}
          >
            <div className="flex gap-[133px] items-start self-stretch shrink-0 flex-nowrap relative">
              <div className="flex w-[181px] flex-col gap-[16px] items-start shrink-0 flex-nowrap relative z-[1]">
                <span className="h-[20px] font- shrink-0 basis-auto font-['Inter'] text-[18px] font-light leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[2]">
                  Credit Limit
                </span>
                <GradientText className="text-[40px] leading-10" color="blue">
                  ${aaveData.userSummary?.availableBorrowsUSD?.toLocaleString("en-US", {}).slice(0, 12) ?? "0"}
                </GradientText>
                <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[16px] font-light leading-[19px] text-[#fff] relative text-left whitespace-nowrap z-[4]">
                  Loans Outstanding
                </span>
                <div className="flex">
                  ${aaveData.userSummary?.totalBorrowsUSD?.toLocaleString("en-US", {}).slice(0) ?? "0"}
                </div>
              </div>
              <div className="flex pt-[24px] pr-0 pb-0 pl-0 flex-col items-end grow shrink-0 basis-0 flex-nowrap relative z-[9]">
                <div className="w-[62px] h-[62px] shrink-0 bg-[url(~/assets/images/c24a90bf-dabf-426d-8019-126b3e784883.png)] bg-cover bg-no-repeat rounded-[100px] relative z-10" />
                <div className="flex w-[140.324px] items-center shrink-0 flex-nowrap relative z-[11]">
                  <div className="w-[71.324px] h-[71.097px] shrink-0 relative z-[12]">
                    <div className="w-full h-full bg-[url(../assets/images/a7d3ccd7-16b9-4bcc-91c1-a0b7cacb7653.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[0%] left-0 z-[13]" />
                    <div className="w-[72.81%] h-[56.67%] absolute top-[21.67%] left-[13.6%] z-[14]">
                      <div className="w-full h-full absolute top-0 left-0 z-[15]">
                        <div className="w-[377.01%] h-[719.89%] absolute top-[-618.31%] left-[-268.1%] z-[16]">
                          {/* <div className="w-[51.932px] h-[40.293px] bg-[url(../assets/images/0d7e9d46-b68d-41e7-bd80-3606503f6f0a.png)] bg-[length:100%_100%] bg-no-repeat relative z-[17] mt-0 mr-0 mb-0 ml-0" /> */}
                          <div className="flex w-[61.188px] h-[41.565px] justify-between items-center relative z-[19] mt-[208.208px] mr-0 mb-0 ml-[134.6px] top-10">
                            <div className="w-[29.273px] h-[41.564px] shrink-0 bg-[url(../assets/images/81e51355-bcc5-496d-987f-d8cd8892fab4.png)] bg-[length:100%_100%] bg-no-repeat relative z-[18]" />
                            <div className="w-[29.273px] h-[41.564px] shrink-0 bg-[url(../assets/images/b1ff7ef2-3aae-49ea-bfc0-da7cb294c52c.png)] bg-[length:100%_100%] bg-no-repeat relative z-[19]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[69px] h-[44px] shrink-0 bg-[url(../assets/images/85d4a8fa-4035-4e9b-ac70-19c6b22c20dd.png)] bg-cover bg-no-repeat rounded-[8px] relative z-20" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[21]">
              <span className="h-[19px] shrink-0 basis-auto font-['Exo_2'] text-[16px] font-medium leading-[19px] text-[#fff] relative text-left whitespace-nowrap z-[22]">
                {ensDomainName}
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Exo_2'] text-[16px] font-medium leading-[19px] text-[#fff] relative text-left whitespace-nowrap z-[23]">
                {userAddress?.slice(0, 8)}...{userAddress?.slice(-6)}
              </span>
            </div>
          </div>
        </div>
      }
    </>
  );
};
