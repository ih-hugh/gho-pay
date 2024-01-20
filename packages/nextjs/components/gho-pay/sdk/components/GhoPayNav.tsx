import React from "react";
import { useWizard } from "react-use-wizard";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

type GhoPayNavProps = {
  previousStep?: () => void;
  nextStep?: () => void;
  disabled?: boolean;
};

export const GhoPayNav: React.FC<GhoPayNavProps> = ({ previousStep, nextStep, disabled }) => {
  const { handleStep, previousStep: _previouStep, nextStep: _nextStep } = useWizard();

  handleStep(() => {
    console.log("STUFF_HANDLER: ");
  });

  const __previousStep = previousStep || _previouStep;
  const __nextStep = nextStep || _nextStep;

  return (
    <div className="w-full space-x-5 max-w-[600px] absolute mt-5 ml-5 z-10">
      <button disabled={disabled} className=" text-black" onClick={() => __previousStep()}>
        <ArrowLeftIcon className="w-8 h-8 text-warning" />
      </button>
      <button disabled={disabled} className=" text-black" onClick={() => __nextStep()}>
        <ArrowRightIcon className="w-8 h-8 text-warning" />
      </button>
    </div>
  );
};
