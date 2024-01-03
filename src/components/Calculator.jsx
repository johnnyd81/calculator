import React from "react";
import Button from "./Button";
import ScreenDisplay from "./ScreenDisplay";

const Calculator = ({ btns, handler, result }) => {
  //render each button in the btns array by using the Button component
  const renderedButtons = btns.map((btn, index) => {
    return (
      <Button
        key={index}
        className={index == 0 || index == 17 ? "span-two" : ""}
        handler={handler}
      >
        {btn}
      </Button>
    );
  });

  return (
    <div className="calc-container">
      <ScreenDisplay result={result} />
      {renderedButtons}
    </div>
  );
};

export default Calculator;
