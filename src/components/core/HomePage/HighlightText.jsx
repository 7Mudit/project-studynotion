import React from "react";

const HighlightText = ({ text , gradient }) => {
  return (
    <span
      className="font-bold"
      style={{
        background:gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;
