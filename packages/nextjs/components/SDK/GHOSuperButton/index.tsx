import React from "react";

interface GHOSuperButtonProps {
  text?: string;
}

const GHOSuperButton: React.FC<GHOSuperButtonProps> = ({ text = "Hello World" }) => {
  const buttonStyle: React.CSSProperties = {
    background: "linear-gradient(180deg, #FFC70A 0%, #74BBBA 100%)",
    color: "black",
    padding: "10px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    position: "relative",
    overflow: "hidden",
  };

  const iconStyle: React.CSSProperties = {
    marginRight: "5px",
  };

  return (
    <button style={buttonStyle}>
      <span style={iconStyle}>★</span> {/* Replace with an actual icon component if needed */}
      {text}
    </button>
  );
};

export default GHOSuperButton;
