import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import {
  StyledButton,
  StyledIcon,
  StyledBadge,
} from "./HeaderCartButton.styled";
import CartContex from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCTX = useContext(CartContex);
  const { items } = cartCTX;
  const numberOfCartItem = items.reduce((acc, item) => acc + item.amount, 0);

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);
    //remove animation

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <StyledButton onClick={onClick} bump={btnIsHighlighted}>
      <StyledIcon>
        <CartIcon />
      </StyledIcon>
      <span>Your Cart</span>
      <StyledBadge>{numberOfCartItem}</StyledBadge>
    </StyledButton>
  );
};

export default HeaderCartButton;
