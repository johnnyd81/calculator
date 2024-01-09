import React from "react";

const ScreenDisplay = ({ result }) => {
  //displays the result of the calculation to the calculator screen
  return (
    <div className="display">
      <span className="digitValue">{result}</span>
    </div>
  );
};

export default ScreenDisplay;
