import { useState } from "react";
import Calculator from "./components/Calculator";

const btns = [
  "AC",
  "DEL",
  "/",
  1,
  2,
  3,
  "*",
  4,
  5,
  6,
  "+",
  7,
  8,
  9,
  "-",
  ".",
  0,
  "=",
];

function App() {
  const [result, setResult] = useState("");

  const taskHandler = (value) => {
    if (value === "AC") {
      setResult("");
    } else if (value === "DEL") {
      setResult(result ? Array.from(result).slice(0, -1).join("") : "");
    } else if (value === "=") {
      setResult(result ? eval(result) : result);
    } else {
      setResult(
        result.length === 0 ? value : result.toString().concat("", value)
      );
    }
  };

  return (
    <>
      <Calculator btns={btns} handler={taskHandler} result={result} />
    </>
  );
}

export default App;
