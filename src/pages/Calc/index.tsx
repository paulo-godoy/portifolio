import React, { useState } from "react";
import { evaluate } from "mathjs";
import {
  Button,
  ButtonRow,
  Calculator,
  CalculatorContainer,
  Container,
  ResultInput,
} from "./styles";

function CalculatorApp() {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (
    type: "action" | "value",
    value: string | number
  ) => {
    if (type === "action") {
      if (value === "c") {
        setInputValue("");
      } else if (
        value === "+" ||
        value === "-" ||
        value === "*" ||
        value === "/" ||
        value === "."
      ) {
        setInputValue((prevValue) => prevValue + value);
      } else if (value === "=") {
        try {
          const result = evaluate(inputValue); // Uso do mathjs
          setInputValue(result.toString());
        } catch (error) {
          setInputValue("Error");
        }
      }
    } else if (type === "value") {
      setInputValue((prevValue) => prevValue + value);
    }
  };

  return (
    <Container>
      <div className="container">
        <div className="row">
          <CalculatorContainer>
            <Calculator>
              <ResultInput
                id="resultado"
                type="text"
                value={inputValue}
                readOnly
              />
              <ButtonRow>
                <Button
                  operator
                  onClick={() => handleButtonClick("action", "c")}
                >
                  C
                </Button>
                <Button onClick={() => handleButtonClick("action", "/")}>
                  /
                </Button>
                <Button onClick={() => handleButtonClick("action", "*")}>
                  x
                </Button>
              </ButtonRow>
              <ButtonRow>
                <Button onClick={() => handleButtonClick("value", 7)}>7</Button>
                <Button onClick={() => handleButtonClick("value", 8)}>8</Button>
                <Button onClick={() => handleButtonClick("value", 9)}>9</Button>
                <Button onClick={() => handleButtonClick("action", "-")}>
                  -
                </Button>
              </ButtonRow>
              <ButtonRow>
                <Button onClick={() => handleButtonClick("value", 4)}>4</Button>
                <Button onClick={() => handleButtonClick("value", 5)}>5</Button>
                <Button onClick={() => handleButtonClick("value", 6)}>6</Button>
                <Button onClick={() => handleButtonClick("action", "+")}>
                  +
                </Button>
              </ButtonRow>
              <ButtonRow>
                <Button onClick={() => handleButtonClick("value", 1)}>1</Button>
                <Button onClick={() => handleButtonClick("value", 2)}>2</Button>
                <Button onClick={() => handleButtonClick("value", 3)}>3</Button>
                <Button onClick={() => handleButtonClick("action", "=")}>
                  =
                </Button>
              </ButtonRow>
              <ButtonRow>
                <Button
                  onClick={() => handleButtonClick("value", 0)}
                  className="zero"
                >
                  0
                </Button>
                <Button onClick={() => handleButtonClick("action", ".")}>
                  .
                </Button>
              </ButtonRow>
            </Calculator>
          </CalculatorContainer>
        </div>
      </div>
    </Container>
  );
}

export default CalculatorApp;
