"use client";

import { useEffect, useState } from "react";
import { ChainId, UiPoolDataProvider } from "@aave/contract-helpers";
import { formatUserSummary } from "@aave/math-utils";
import { formatReserves } from "@aave/math-utils";
import * as markets from "@bgd-labs/aave-address-book";
import dayjs from "dayjs";
import { ethers } from "ethers";

const useAaveData = (address: any) => {
  const [data, setData] = useState({
    formattedPoolReserves: {},
    userSummary: {},
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    if (!address || !window) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum as any);

    const poolDataProviderContract = new UiPoolDataProvider({
      uiPoolDataProviderAddress: markets.AaveV3Sepolia.UI_POOL_DATA_PROVIDER,
      provider,
      chainId: ChainId.mainnet,
    });

    const getAAVEData = async () => {
      try {
        const reserves = await poolDataProviderContract.getReservesHumanized({
          lendingPoolAddressProvider: markets.AaveV3Sepolia.POOL_ADDRESSES_PROVIDER,
        });
        const userReserves = await poolDataProviderContract.getUserReservesHumanized({
          lendingPoolAddressProvider: markets.AaveV3Sepolia.POOL_ADDRESSES_PROVIDER,
          user: address,
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

        const userSummary = formatUserSummary({
          currentTimestamp,
          marketReferencePriceInUsd: baseCurrencyData.marketReferenceCurrencyPriceInUsd,
          marketReferenceCurrencyDecimals: baseCurrencyData.marketReferenceCurrencyDecimals,
          userReserves: userReservesArray,
          formattedReserves: formattedPoolReserves,
          userEmodeCategoryId: userReserves.userEmodeCategoryId,
        });

        setData({ formattedPoolReserves, userSummary });
      } catch (error) {
        setError(error as any);
      } finally {
        setLoading(false);
      }
    };
    if (address && window) {
      getAAVEData();
    }
  }, [address]);

  return { data, loading, error };
};

export default useAaveData;
