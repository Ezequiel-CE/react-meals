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
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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

  const submitOrderHandler = async (data) => {
    setIsSubmiting(true);
    await fetch(
      "https://react-meal-http-4229c-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: data, orderItems: cartCTX.items }),
      }
    );
    setIsSubmiting(false);
    setDidSubmit(true);
    cartCTX.clearCart();
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

  const cartModalContent = (
    <>
      {cartItems}
      <TotalStyled>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </TotalStyled>
      {isCheckout && (
        <CheckOut closeCart={onCloseCart} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </>
  );
  const isSubmitingModalContent = <p>Sending order data ...</p>;
  const didSubmitModalContent = <p>Successfully sent the order!</p>;

  return (
    <Modal onClose={onCloseCart}>
      {!isSubmiting && !didSubmit && cartModalContent}
      {isSubmiting && isSubmitingModalContent}
      {!isSubmiting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
