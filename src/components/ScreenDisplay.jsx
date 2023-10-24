import React from "react";

const ScreenDisplay = ({ result }) => {
  return (
    <div className="display">
      <span className="digitValue">{result}</span>
    </div>
  );
};

export default ScreenDisplay;
