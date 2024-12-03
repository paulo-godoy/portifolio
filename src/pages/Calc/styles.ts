import styled from "styled-components";

interface ButtonProps {
  operator?: boolean;
}

export const Container = styled.div`
  background: #d9d9d9;
`;

export const CalculatorContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Calculator = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const ResultInput = styled.input`
  width: 100%;
  font-size: 24px;
  text-align: right;
  border: none;
  outline: none;
`;

export const ButtonRow = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Button = styled.button<ButtonProps>`
  flex: 1;
  font-size: 24px;
  border: none;
  outline: none;
  background-color: ${(props) => (props.operator ? "#343a40" : "#212529")};
  color: white;
  cursor: pointer;
`;
