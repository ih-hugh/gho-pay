"use client";

import React, { useEffect, useState } from "react";
import { ChainId, UiPoolDataProvider } from "@aave/contract-helpers";
import { formatUserSummary } from "@aave/math-utils";
import { formatReserves } from "@aave/math-utils";
import * as markets from "@bgd-labs/aave-address-book";
import dayjs from "dayjs";
import { ethers } from "ethers";

const Test = () => {
  const [userAddress, setUserAddress] = useState("");
  const [borrowableUSDC, setBorrowableUSDC] = useState("");

  useEffect(() => {
    // Initialize Aave and ethers.js here
  }, [userAddress]);

  // Connect to MetaMask or another Ethereum wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setUserAddress(accounts[0]);
        const provider = new ethers.providers.Web3Provider(window.ethereum as any);
        console.log(provider);
        // Setup Aave LendingPoolAddressesProvider and UiPoolDataProvider
        // ...
        // View contract used to fetch all reserves data (including market base currency data), and user reserves
        // Using Aave V3 Eth Mainnet address for demo
        const poolDataProviderContract = new UiPoolDataProvider({
          uiPoolDataProviderAddress: markets.AaveV3Sepolia.UI_POOL_DATA_PROVIDER,
          provider,
          chainId: ChainId.mainnet,
        });

        const getAAVEData = async () => {
          // Example function to get borrowable USDC
          const reserves = await poolDataProviderContract.getReservesHumanized({
            lendingPoolAddressProvider: markets.AaveV3Sepolia.POOL_ADDRESSES_PROVIDER,
          });
          const userReserves = await poolDataProviderContract.getUserReservesHumanized({
            lendingPoolAddressProvider: markets.AaveV3Sepolia.POOL_ADDRESSES_PROVIDER,
            user: accounts[0],
          });
          const reservesArray = reserves.reservesData;
          const baseCurrencyData = reserves.baseCurrencyData;
          const userReservesArray = userReserves.userReserves;

          const currentTimestamp = dayjs().unix();

          const formattedPoolReserves = formatReserves({
            reserves: reservesArray,
            currentTimestamp,
            marketReferenceCurrencyDecimals: baseCurrencyData.marketReferenceCurrencyDecimals,
            marketReferencePriceInUsd: baseCurrencyData.marketReferenceCurrencyPriceInUsd,
          });

          /*
- @param `currentTimestamp` Current UNIX timestamp in seconds, Math.floor(Date.now() / 1000)
- @param `marketReferencePriceInUsd` Input from [Fetching Protocol Data](#fetching-protocol-data), `reserves.baseCurrencyData.marketReferencePriceInUsd`
- @param `marketReferenceCurrencyDecimals` Input from [Fetching Protocol Data](#fetching-protocol-data), `reserves.baseCurrencyData.marketReferenceCurrencyDecimals`
- @param `userReserves` Input from [Fetching Protocol Data](#fetching-protocol-data), combination of `userReserves.userReserves` and `reserves.reservesArray`
- @param `userEmodeCategoryId` Input from [Fetching Protocol Data](#fetching-protocol-data), `userReserves.userEmodeCategoryId`
*/
          const userSummary = formatUserSummary({
            currentTimestamp,
            marketReferencePriceInUsd: baseCurrencyData.marketReferenceCurrencyPriceInUsd,
            marketReferenceCurrencyDecimals: baseCurrencyData.marketReferenceCurrencyDecimals,
            userReserves: userReservesArray,
            formattedReserves: formattedPoolReserves,
            userEmodeCategoryId: userReserves.userEmodeCategoryId,
          });

          setBorrowableUSDC(userSummary.totalBorrowsUSD);

          console.log("userSummary", userSummary);
          console.log("formattedPoolReserves", formattedPoolReserves);
        };
        getAAVEData();
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.log("MetaMask is not installed");
    }
  };

  return (
    <div className="container mx-auto my-10">
      <button onClick={connectWallet}>Connect Wallet</button>
      {userAddress && <p>User Address: {userAddress}</p>}
      {borrowableUSDC && <p>Borrowable USDC: {borrowableUSDC}</p>}
    </div>
  );
};

export default Test;
