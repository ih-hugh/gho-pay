"use client";

import React from "react";
import { useGhoPayContext } from "./GhoPayContext";
import { GhoPayLogo } from "@/components/assets/GhoPayLogo";
import { USDCLogo } from "@/components/assets/USDCLogo";
import * as markets from "@bgd-labs/aave-address-book";
import { ethers } from "ethers";
import { useWizard } from "react-use-wizard";
import { useAccount } from "wagmi";

export const GhoPayConfirming = () => {
  const { balanceDue } = useGhoPayContext();
  const { address } = useAccount();
  const { nextStep, previousStep } = useWizard();

  async function handleConfirm() {
    await nextStep();
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const signer = provider.getSigner();
    const erc20Abi = [
      // Minimal ABI for ERC20 transfer
      "function balanceOf(address owner) view returns (uint256)",
      "function transfer(address to, uint amount) returns (bool)",
    ];

    const tokenAddress = markets.AaveV3Sepolia.ASSETS.GHO.UNDERLYING; // Replace with the contract address of the token
    const contract = new ethers.Contract(tokenAddress, erc20Abi, signer);
    const recipient = address; // Recipient address
    const amount = ethers.utils.parseUnits(balanceDue.toString(), 18); // Amount to transfer, e.g., 1.0 tokens (adjust decimal)

    try {
      const transaction = await contract.transfer(recipient, amount);
      await transaction.wait();
      console.log("Transaction successful:", transaction);
      await nextStep();
    } catch (error) {
      console.error("Transaction failed:", error);
      previousStep();
    }
  }

  return (
    <div className="flex flex-col items-center bg-base-200 rounded-2xl shadow-2xl pt-10 px-12 pb-16  max-w-[600px] w-full max-h-[360px] h-full">
      <div className="flex items-center gap-3 ">
        <div className="flex flex-col items-center self-stretch">
          <GhoPayLogo className=" scale-125" />
        </div>
      </div>
      <div className="flex justify-between items-start self-stretch grow-basis-0 flex-nowrap h-full py-12">
        <div className="flex gap-4 items-start ">
          <div className="flex items-center gap-3.5  bg-base-100 rounded-lg p-2">
            <USDCLogo className="" />
          </div>
          <div className="flex flex-col gap-2 items-start ">
            <span className="text-lg font-light text-base-content  whitespace-nowrap">Loan Amount</span>
            <span className="text-2xl font-bold  text-center whitespace-nowrap8">2,500</span>
            <div className="flex justify-center items-center gap-2 ">
              <span className="text-xs font-bold text-secondary  whitespace-nowrap">Variable APY</span>
              <div className="w-[3px] h-5 bg-secondary" />
              <span className="text-sm font-bold text-secondary  whitespace-nowrap">8%</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-end grow basis-0 flex-nowrap ">
          <span className="text-sm self-stretch font-normal text-base-content  text-right whitespace-nowrap">
            Choose how to payback your loan:
          </span>
          <div className="flex flex-col gap-2 items-end ">
            <div className="flex justify-end items-center gap-2.5 ">
              <span className="text-xs font-bold text-base-content  text-right whitespace-nowrap">Pay back later</span>
              <div className="flex justify-center items-center rounded-full border-2 border-warning 8 w-3 h-3 p-1">
                {/* IMAGE HERE */}
              </div>
            </div>
            <div className="flex justify-end items-center gap-2.5 ">
              <span className="text-xs font-bold text-base-content  text-right whitespace-nowrap">Pay back now</span>
              <div className="flex justify-center items-center rounded-full border-2 border-neutral 2 w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      <button
        className="flex items-center self-end bg-primary rounded-lg border-none 4 pointer p-3 gap-2 w-28 h-9"
        onClick={handleConfirm}
      >
        <span className="text-sm font-bold text-primary-content  whitespace-nowrap">Confirm Loan</span>
      </button>
    </div>
  );
};
