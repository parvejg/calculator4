import { useState } from "react";
import "./Calculator.css";
export const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const  buttonHandler = (e) => {
 setInputValue(inputValue + e.target.value);
  };
  const operationHandler = (e) => {
    setInputValue(inputValue + e.target.value)
  };
  return (
    <div className="calculator-wrapper">
      <div class="calculator">
        <input
          type="text"
          id="display"
          value={inputValue}
          disabled
        />
        <div class="buttons">
          <button class="num" value="AC" onClick={(e) => setInputValue("")}>
            AC
          </button>
          <button
            class="num"
            value="De"
            onClick={(e) => setInputValue(inputValue.slice(0, -1))}
          >
            De
          </button>
          <button class="num" value="%" onClick={(e)=>operationHandler(e)}>
            %
          </button>
          <button class="operator" value="/" onClick={(e)=>operationHandler(e)}>
            /
          </button>
          <button class="num" value="7" onClick={ (e)=>buttonHandler(e)}>
            7
          </button>
          <button class="num" value="8" onClick={ (e)=>buttonHandler(e)}>
            8
          </button>
          <button class="num" value="9" onClick={ (e)=>buttonHandler(e)}>
            9
          </button>
          <button class="operator" value="*" onClick={(e)=>operationHandler(e)}>
            *
          </button>
          <button class="num" value="4" onClick={ (e)=>buttonHandler(e)}>
            4
          </button>
          <button class="num" value="5" onClick={ (e)=>buttonHandler(e)}>
            5
          </button>
          <button class="num" value="6" onClick={ (e)=>buttonHandler(e)}>
            6
          </button>
          <button class="operator" value="-" onClick={(e)=>operationHandler(e)}>
            -
          </button>
          <button class="num" value="1" onClick={ (e)=>buttonHandler(e)}>
            1
          </button>
          <button class="num" value="2" onClick={ (e)=>buttonHandler(e)}>
            2
          </button>
          <button class="num" value="3" onClick={ (e)=>buttonHandler(e)}>
            3
          </button>
          <button class="operator" value="+" onClick={(e)=>operationHandler(e)}>
            +
          </button>
          <button class="zero" value="0" onClick={ (e)=>buttonHandler(e)}>
            0
          </button>
          <button class="num" value="." onClick={(e)=>operationHandler(e)}>
            .
          </button>
          <button class="num" value="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
};
