import React from "react";

type GhoPayModalButtonProps = {
  toggleModal: () => void;
};

export const GhoPayModalButton: React.FC<GhoPayModalButtonProps> = ({ toggleModal }) => (
  <button className="btn btn-primary" onClick={toggleModal}>
    Open Modal
  </button>
);
