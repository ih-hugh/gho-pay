"use client";

import { useEffect, useState } from "react";
import { GhoPayAvatarLogo } from "@/components/assets/GhoPayAvatarLogo";
import { GhoPayCopyLogo } from "@/components/assets/GhoPayCopyLogo";
import { GhoBalanceInfo } from "@/components/gho-pay/GhoBalanceInfo";
import { GhoCreditCard } from "@/components/gho-pay/GhoCreditCard";
import { GhoDemoPage } from "@/components/gho-pay/GhoDemoPage";
import { GhoTransactions } from "@/components/gho-pay/GhoTransactions";
import { Hero } from "@/components/gho-pay/Hero";
import { useAccountBalance } from "@/hooks/scaffold-eth";
import type { NextPage } from "next";
import { isAddress } from "viem";
import { useAccount, useEnsName } from "wagmi";

// import { Address as AddressType } from "viem";
// import { useEnsAvatar} from "wagmi";

/** playground imports */
// import { GhoPay } from "@/components/gho-pay/sdk/GhoPay";
// import { GhoPayModal } from "@/components/gho-pay/sdk/components/GhoPayModal";
// import { GhoPayModalButton } from "@/components/gho-pay/sdk/components/GhoPayModalButton";
// import { useModal } from "@/components/gho-pay/sdk/hooks/useModal";

const Home: NextPage = () => {
  // const { isShowing, toggle } = useModal();

  const { address } = useAccount();
  const { balance } = useAccountBalance(address);
  const { data: fetchedEns } = useEnsName({ address, enabled: isAddress(address ?? ""), chainId: 1 });
  // const { data: fetchedEnsAvatar } = useEnsAvatar({
  //   name: fetchedEns,
  //   enabled: Boolean(fetchedEns),
  //   chainId: 1,
  //   cacheTime: 30_000,
  // });

  const [ens, setEns] = useState<string | null>();
  // const [ensAvatar, setEnsAvatar] = useState<string | null>();

  useEffect(() => {
    console.log("ENS: ", fetchedEns);
    setEns(fetchedEns);
  }, [fetchedEns]);

  // useEffect(() => {
  //   console.log("ENS_AVATAR: ", fetchedEnsAvatar);
  //   setEnsAvatar(fetchedEnsAvatar);
  // }, [fetchedEnsAvatar]);

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
            <sub className="font-thin text-sm tracking-wide mb-48">
              Unleash the Buying Power of your Aave Assets with GHO
            </sub>
          </h3>
        </Hero>
        {/* <div>
          <GhoPayModalButton toggleModal={toggle} />
          <GhoPayModal isShowing={isShowing} hide={toggle}>
            <GhoPay showHeader />
          </GhoPayModal>
        </div> */}
        <div className="flex space-y-36 flex-col bg-gradient-to-b from-[#242536] to-[#191920] w-full">
          <GhoCreditCard creditLimit={balance} enabledAssets={[]} ensDomainName={ens} userAddress={address} />
          <GhoBalanceInfo />
          <GhoTransactions />
          <GhoDemoPage />
        </div>
      </div>
    </>
  );
};

export default Home;
