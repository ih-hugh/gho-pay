import { GhoPayAvatarLogo } from "@/components/assets/GhoPayAvatarLogo";
import { GhoPayCopyLogo } from "@/components/assets/GhoPayCopyLogo";
import { GhoCreditCard } from "@/components/gho-pay/GhoCreditCard";
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
        <GhoCreditCard
          creditLimit={"$10,000"}
          enabledAssets={[]}
          ensDomainName={"Joelcodes.eth"}
          userAddress={"01223...9870"}
        />
      </div>
    </>
  );
};

export default Home;
