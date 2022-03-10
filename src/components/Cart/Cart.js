import React, { useContext } from "react";
import {
  UlCartItems,
  TotalStyled,
  ActionStyled,
  StyledButtonAlt,
  StyledButtonP,
} from "./Cart.styled";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContex from "../../store/cart-context";

const Cart = ({ onCloseCart }) => {
  const cartCTX = useContext(CartContex);

  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;
  const hasItem = cartCTX.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCTX.removeItems(id);
  };
  const cartItemAddHandler = (item) => {
    cartCTX.addItems(item);
  };

  const cartItems = (
    <UlCartItems>
      {cartCTX.items.map((item) => (
        <CartItem
          key={item.id}
          onAdd={cartItemAddHandler}
          onRemove={cartItemRemoveHandler}
          item={item}
        />
      ))}
    </UlCartItems>
  );

  return (
    <Modal onClose={onCloseCart}>
      {cartItems}
      <TotalStyled>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </TotalStyled>
      <ActionStyled>
        <StyledButtonAlt onClick={onCloseCart}>Close</StyledButtonAlt>
        {hasItem && <StyledButtonP>Order</StyledButtonP>}
      </ActionStyled>
    </Modal>
  );
};

export default Cart;
