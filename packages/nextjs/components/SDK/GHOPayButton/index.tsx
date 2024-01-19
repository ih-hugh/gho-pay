import React, { useState } from "react";
import Image from "next/image";
import GHOSuperButton from "../GHOSuperButton";

// Define the structure of the state using an interface
interface CurrencyOption {
  amount: number;
  value: number;
}

interface PaymentPopupState {
  creditLimit: number;
  apr: number;
  subtotal: number;
  fees: number;
  total: number;
  currencies: {
    [key: string]: CurrencyOption;
  };
  creditSpent: number;
}

const PaymentPopup: React.FC = () => {
  // Use the interface for state type checking
  const [data] = useState<PaymentPopupState>({
    creditLimit: 15750,
    apr: 4,
    subtotal: 2500.78,
    fees: 0.78,
    total: 2500.78,
    currencies: {
      usdc: { amount: 2686, value: 2400 },
      eth: { amount: 0.68, value: 1099 },
      wbtc: { amount: 0.56, value: 11550 },
    },
    creditSpent: 5060,
  });

  return (
    <div className="flex flex-col bg-white rounded-[1.5rem] shadow-xl w-full max-w-2xl p-8">
      <div className="flex justify-center items-center mb-6">
        <Image className="max-w-[120px]" src="logo.png" alt="" />
      </div>

      <div className=" flex grid-cols-2 space-x-40	">
        <div className="flex flex-col">
          <div className="flex justify-left items-center mb-6">
            <Image src="aave.png" alt="" />
          </div>
          <div className="flex justify-left items-center mb-6 space-x-3">
            <span className="text-2xl font-bold text-gray-700">Credit Limit</span>
            <span className="text-lg text-gray-400">Fixed APR | {data.apr}%</span>
          </div>

          <div className="text-5xl font-bold text-purple-700 mb-6">${data.creditLimit.toLocaleString()}</div>
        </div>

        {/* <div className="grid grid-cols-3 gap-4 mb-6">
        {Object.entries(data.currencies).map(([key, currency]) => (
          <div key={key} className="flex flex-col items-center justify-center">
            <span className="text-xs font-semibold text-gray-600">{key.toUpperCase()}</span>
            <span className="text-lg">
              {currency.amount} / ${currency.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div> */}

        <div className="flex flex-col justify-end">
          <div className="pt-4">
            <div className="flex justify-end mb-1">
              <span className="text-gray-700">Subtotal</span>
              {/* <span className="font-semibold">${data.subtotal.toFixed(2)}</span> */}
            </div>
            <div className="flex justify-end mb-1">
              <span className="text-gray-700">Estimated Fees</span>
              {/* <span className="font-semibold">${data.fees.toFixed(2)}</span> */}
            </div>

            <div className="flex justify-end mt-2">
              <span className="text-2xl font-bold">Total</span>
            </div>

            <div className="flex justify-end mb-6">
              <span className="text-2xl font-bold">${data.total.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <GHOSuperButton text="Confirm Purchase" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
