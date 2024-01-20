"use client";

import { GhoPayAvatarLogo } from "@/components/assets/GhoPayAvatarLogo";
import { GhoPayCopyLogo } from "@/components/assets/GhoPayCopyLogo";
import { Hero } from "@/components/gho-pay/Hero";

/** playground imports */
// import { GhoPay } from "@/components/gho-pay/sdk/GhoPay";
// import { GhoPayModal } from "@/components/gho-pay/sdk/components/GhoPayModal";
// import { GhoPayModalButton } from "@/components/gho-pay/sdk/components/GhoPayModalButton";
// import { useModal } from "@/components/gho-pay/sdk/hooks/useModal";
import type { NextPage } from "next";

const Home: NextPage = () => {
  // const { isShowing, toggle } = useModal();

  return (
    <>
      <div className="flex items-center flex-col static">
        <Hero>
          <div className="-space-y-3">
            <GhoPayAvatarLogo className="mx-auto relative left-7" />
            <GhoPayCopyLogo className="mx-auto" />
          </div>

          <h3 className="font-bold text-2xl w-full flex flex-col mt-1">
            Decentralized Payments SDK and Credit Card
            <sub className="font-thin text-sm tracking-wide">Unleash the Buying Power of your Aave Assets with GHO</sub>
          </h3>
        </Hero>
        {/* <div>
          <GhoPayModalButton toggleModal={toggle} />
          <GhoPayModal isShowing={isShowing} hide={toggle}>
            <GhoPay showHeader />
          </GhoPayModal>
        </div> */}
      </div>
    </>
  );
};

export default Home;
