import { GhoPayAvatarLogo } from "@/components/assets/GhoPayAvatarLogo";
import { GhoPayCopyLogo } from "@/components/assets/GhoPayCopyLogo";
import { GhoBalanceInfo } from "@/components/gho-pay/GhoBalanceInfo";
import { GhoCreditCard } from "@/components/gho-pay/GhoCreditCard";
import { GhoDemoPage } from "@/components/gho-pay/GhoDemoPage";
import { GhoTransactions } from "@/components/gho-pay/GhoTransactions";
import { Hero } from "@/components/gho-pay/Hero";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col">
        <Hero>
          <div className="-space-y-3">
            <GhoPayAvatarLogo className="mx-auto relative left-7" />
            <GhoPayCopyLogo className="mx-auto" />
          </div>

          <h3 className="font-bold text-2xl w-full flex flex-col mt-1">
            Decentralized Payments SDK and Credit Card
            <sub className="font-thin text-sm tracking-wide mb-48">
              Unleash the Buying Power of your Aave Assets with GHO
            </sub>
          </h3>
        </Hero>
        <div className="flex space-y-36 flex-col bg-gradient-to-b from-[#242536] to-[#191920] w-full">
          <GhoCreditCard creditLimit={""} enabledAssets={[]} ensDomainName={""} userAddress={""} />

          <GhoBalanceInfo />
          <GhoTransactions />
          <GhoDemoPage />
        </div>
      </div>
    </>
  );
};

export default Home;
