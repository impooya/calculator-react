import { useState } from "react";
import { isValidMathEquation } from "../utils";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "./calculator.scss";

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
    <div className="basic-calculator">
      <h1>result: {result}</h1>
      <div style={{ gap: "12px", display: "flex" }}>
        <InputText
          type="text"
          onChange={(e) => set_equation(e.target.value)}
          value={equation}
        />
        <Button onClick={onclick}>=</Button>
      </div>
    </div>
  );
};
