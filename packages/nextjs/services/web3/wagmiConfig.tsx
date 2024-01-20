import { getDefaultConfig } from "connectkit";
import { createConfig } from "wagmi";
import { appChains, wagmiConnectors } from "~~/services/web3/wagmiConnectors";

export const wagmiConfig = createConfig(
  getDefaultConfig({
    autoConnect: true,
    connectors: wagmiConnectors,
    publicClient: appChains.publicClient,
    chains: appChains.chains,
    // Required API Keys
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY, // or infuraId
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",

    // Required
    appName: "GhoPay",

    // Optional
    appDescription: "A Decentralized Payment App",
    // appUrl: "https://family.co", // your app's url
    // appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);
