import { useState } from "react";
import { isValidMathEquation } from "../utils";

export const Calculator = () => {
  let [result, set_result] = useState("no result");
  let [equation, set_equation] = useState("");
  function onclick() {
    if (isValidMathEquation(equation)) {
      set_result(eval(equation));
    } else {
      set_result("invalid equation");
    }
  }
  return (
    <>
      <p>result: {result}</p>
      <input
        type="text"
        onChange={(e) => set_equation(e.target.value)}
        value={equation}
      />
      <button onClick={onclick}>=</button>
    </>
  );
};
