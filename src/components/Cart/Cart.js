import React, { useContext, useState } from "react";
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
import CheckOut from "./Checkout";

const Cart = ({ onCloseCart }) => {
  const [isCheckout, setIsCheckout] = useState(false);

  const cartCTX = useContext(CartContex);

  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;
  const hasItem = cartCTX.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCTX.removeItems(id);
  };
  const cartItemAddHandler = (item) => {
    cartCTX.addItems(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
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

  const modalActions = (
    <ActionStyled>
      <StyledButtonAlt onClick={onCloseCart}>Close</StyledButtonAlt>
      {hasItem && <StyledButtonP onClick={orderHandler}>Order</StyledButtonP>}
    </ActionStyled>
  );

  return (
    <Modal onClose={onCloseCart}>
      {cartItems}
      <TotalStyled>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </TotalStyled>
      {isCheckout && <CheckOut closeCart={onCloseCart} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
