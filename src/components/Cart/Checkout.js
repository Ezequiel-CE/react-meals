import React, { useRef, useState } from "react";
import { StyledForm, StyledControl, StyledActions } from "./Checkout.style";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 5;

const CheckOut = ({ closeCart }) => {
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    postal: true,
    city: true,
  });

  const onConfirmForm = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const address = addressInputRef.current.value;
    const postal = postalInputRef.current.value;
    const city = cityInputRef.current.value;

    const nameIsValid = !isEmpty(name);
    const addressIsValid = !isEmpty(address);
    const postalIsValid = isFiveChar(postal);
    const cityIsValid = !isEmpty(city);

    setFormInputsValidity({
      name: nameIsValid,
      address: addressIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && addressIsValid && postalIsValid && cityIsValid;
  };

  return (
    <StyledForm onSubmit={onConfirmForm}>
      <StyledControl>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </StyledControl>
      <StyledControl>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
      </StyledControl>
      <StyledControl>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
      </StyledControl>
      <StyledControl>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </StyledControl>
      <StyledActions>
        <button onClick={closeCart}>Cancel</button>
        <button className="submit">Confirm</button>
      </StyledActions>
    </StyledForm>
  );
};

export default CheckOut;
