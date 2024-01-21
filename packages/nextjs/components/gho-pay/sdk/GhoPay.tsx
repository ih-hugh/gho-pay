"use client";

import React from "react";
import { AnimatedStep } from "./components/AnimatedStep";
import { GhoPayBorrowing } from "./components/GhoPayBorrowing";
import { GhoPayChecking } from "./components/GhoPayChecking";
import { GhoPayCompleted } from "./components/GhoPayCompleted";
import { GhoPayConfirming } from "./components/GhoPayConfirming";
import { GhoPayContext } from "./components/GhoPayContext";
import { GhoPayNav } from "./components/GhoPayNav";
import { GhoPayStarting } from "./components/GhoPayStarting";
import { AnimatePresence } from "framer-motion";
import { Wizard, WizardProps } from "react-use-wizard";

type GhoPayProps = {
  showHeader?: boolean;
  balanceDue: number;
};

export const GhoPay: React.FC<GhoPayProps> = ({ showHeader, balanceDue }) => {
  const previousStep = React.useRef<number>(0);
  const components: React.ReactNode[] = [
    <GhoPayStarting key={"GhoPayStarting"} />,
    <GhoPayChecking key={"GhoPayChecking"} />,
    <GhoPayConfirming key={"GhoPayConfirming"} />,
    <GhoPayBorrowing key={"GhoPayBorrowing"} />,
    <GhoPayCompleted key={"GhoPayCompleted"} />,
  ];

  const wizardProps: WizardProps = {
    wrapper: <AnimatePresence initial={false} mode="wait" />,
  };

  wizardProps.header = showHeader ? <GhoPayNav /> : null;

  return (
    <GhoPayContext.Provider value={{ balanceDue }}>
      <Wizard {...wizardProps}>
        {components.map((component: React.ReactNode, index) => (
          <AnimatedStep key={index} previousStep={previousStep}>
            {component}
          </AnimatedStep>
        ))}
      </Wizard>
    </GhoPayContext.Provider>
  );
};
