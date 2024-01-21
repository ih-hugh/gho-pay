"use client";

import React from "react";
import Image from "next/image";

type GhoPayModalButtonProps = {
  toggleModal: () => void;
};

export const GhoPayModalButton: React.FC<GhoPayModalButtonProps> = ({ toggleModal }) => (
  <button
    className="btn btn-primary flex w-[168px] flex-nowrap bg-gradient-to-b from-[#0891B2] to-[#67E8F9] shadow-[0_10px_30px_0_rgba(0,0,0,0.25)]"
    onClick={toggleModal}
  >
    <span className="h-[17px] text-[14px] font-bold leading-[16.943px] text-[#26284a] whitespace-nowrap flex items-center justify-center">
      Pay with
    </span>{" "}
    <Image src="/logoicon.png" width={100} height={30} alt="GhoPay Button" quality={100} priority />
  </button>
);
