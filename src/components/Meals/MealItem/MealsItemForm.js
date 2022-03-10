import React, { useRef, useState } from "react";
import styled from "styled-components";
import Input from "../../UI/Input";

const FormStyled = styled.form`
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }

  & button:hover,
  & button:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

const MealsItemForm = ({ idInfo, onAddToCart }) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNUmber = Number(enteredAmount);
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNUmber < 1 ||
      enteredAmountNUmber > 5
    ) {
      setAmountValid(false);
      return;
    }

    onAddToCart(enteredAmountNUmber);
  };

  return (
    <FormStyled onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + idInfo,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid amount (1-5)</p>}
    </FormStyled>
  );
};

export default MealsItemForm;
