"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/gho-pay/Navbar";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { ConnectKitProvider } from "connectkit";
import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import { useAccount } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { ProgressBar } from "~~/components/scaffold-eth/ProgressBar";
import { useAccountBalance } from "~~/hooks/scaffold-eth";
import { useDarkMode } from "~~/hooks/scaffold-eth/useDarkMode";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { appChains } from "~~/services/web3/wagmiConnectors";

const GhoPayApp = ({ children }: { children: React.ReactNode }) => {
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
  const { address } = useAccount();
  const { balance } = useAccountBalance(address);
  const price = useGlobalState(state => state.nativeCurrencyPrice);
  const targetNetwork = useGlobalState(state => state.targetNetwork);

  useEffect(() => {
    console.log("TARGET_NETWORK: ", targetNetwork);
  }, [targetNetwork]);

  useEffect(() => {
    console.log("ADDRESS: ", address);
    console.log("USER BALANCE: ", balance);
  }, [address, balance]);

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="relative flex flex-col flex-1">{children}</main>
      </div>
      <Toaster />
    </>
  );
};

export const GhoPayAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <WagmiConfig config={wagmiConfig}>
      <ProgressBar />
      <ConnectKitProvider
        onConnect={({ address, connectorId }: { address?: string; connectorId?: string }) => {
          console.log("ADDRESS: ", address);
          console.log("CONNECTOR_ID: ", connectorId);
        }}
        onDisconnect={() => {
          console.log("DISCONNECTED");
        }}
        debugMode
        customTheme={
          {
            // // "--ck-overlay-background": "rgba(255, 0, 0, 0.5)",
            // "--ck-font-family": "Inter",
            // "--ck-body-color": "#27284A",
            // "--ck-border-radius": "1rem",
            // "--ck-overlay-background": "rgba(0, 0, 0, 0.08)",
            // "--ck-overlay-backdrop-filter": "blur(0px)",
            // "--ck-primary-button-color": "#27284A",
            // "--ck-primary-button-background": "#67e8f9",
            // "--ck-primary-button-box-shadow": "0 0 0 0 rgba(255, 255, 255, 0)",
            // "--ck-primary-button-border-radius": "0.5rem",
            // "--ck-primary-button-font-weight": "600",
            // "--ck-primary-button-hover-color": "#27284A",
            // "--ck-primary-button-hover-background": "#0891b2",
            // "--ck-primary-button-hover-box-shadow": "0 0 0 0 rgba(255, 255, 255, 0)",
            // "--ck-primary-button-active-background": "#1F1E27",
            // "--ck-primary-button-active-box-shadow": "0 0 0 0 rgba(255, 255, 255, 0)",
            // "--ck-secondary-button-color": "#27284A",
            // "--ck-secondary-button-background": "#facc15",
          }
        }
      >
        <RainbowKitProvider
          chains={appChains.chains}
          avatar={BlockieAvatar}
          theme={isDarkMode ? darkTheme() : lightTheme()}
        >
          <GhoPayApp>{children}</GhoPayApp>
        </RainbowKitProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};
