import React from "react";
import { StyledHeader, StyledImg } from "./Header.styled";
import image from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <StyledHeader>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </StyledHeader>
      <StyledImg>
        <img src={image} alt="header-back" />
      </StyledImg>
    </>
  );
};

export default Header;
