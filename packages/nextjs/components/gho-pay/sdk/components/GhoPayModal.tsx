"use client";

import React from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { XCircleIcon } from "@heroicons/react/24/solid";

type ModalProps = {
  isShowing: boolean;
  hide: () => void;
  children: React.ReactNode;
};

export const GhoPayModal: React.FC<ModalProps> = ({ isShowing, hide, children }) => {
  const backdropVariants = {
    hidden: { opacity: 0, transitionEnd: { display: "none" } },
    visible: { opacity: 1, display: "block" },
  };

  const modalVariants = {
    hidden: { scale: 0.9, opacity: 0, transitionEnd: { display: "none" } },
    visible: {
      scale: [1.1, 1],
      opacity: 1,
      display: "block",
      transition: { duration: 0.5 },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return typeof window === "object" ? (
    createPortal(
      <motion.div
        className="fixed inset-0 z-40 bg-black bg-opacity-50"
        variants={backdropVariants}
        initial="hidden"
        animate={isShowing ? "visible" : "hidden"}
        exit="hidden"
      >
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
          <motion.div
            className="bg-base-200 shadow-lg overflow-hidden max-w-[600px] max-h-[360px] w-full rounded-3xl relative"
            variants={modalVariants}
            initial="hidden"
            animate={isShowing ? "visible" : "hidden"}
            exit="exit"
          >
            <div className="absolute top-0 right-0 mt-5 mr-5 z-50">
              <button type="button" className="text-warning" onClick={hide}>
                <XCircleIcon className="w-8 h-8" />
              </button>
            </div>
            <div>{children}</div>
          </motion.div>
        </div>
      </motion.div>,
      document.body,
    )
  ) : (
    <></>
  );
};
