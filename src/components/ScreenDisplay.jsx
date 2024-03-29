import React from "react";

const ScreenDisplay = ({ result }) => {
  //displays the final result of the calculation on the calculator screen
  return (
    <div className="display">
      <span className="digitValue">{result}</span>
    </div>
  );
};

export default ScreenDisplay;
