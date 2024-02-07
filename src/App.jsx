import { useState } from "react";
import Calculator from "./components/Calculator";

//by looping over the btns array using map a button can be created from each array element of the btns array
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

  //the taskHandler function describes what each button needs to do
  //a normal number button just has to render the value of that button 
  //operation buttons like AC, DEL etc. has to be logically assigned
  const taskHandler = (value) => {
    //clears the content of the calculator display
    if (value === "AC") {
      setResult("");
    } else if (value === "DEL") {
      //by using the slice array method the final digit of the onscreen numbers can be deleted
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
