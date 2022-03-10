import CartContex from "./cart-context";
import React, { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existigItemID = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existigItemID];

    let updateItems;
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updateItems = [...state.items];
      updateItems[existigItemID] = updateItem;
    } else {
      updateItems = [...state.items, action.item];
    }
    return { items: updateItems, totalAmount: updateTotalAmount };
  }

  if (action.type === "REMOVE_ITEM") {
    const existigItemID = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existigItemID];
    const updateTotalAmount = state.totalAmount - existingItem.price;
    let updateItems;
    if (existingItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = { ...existingItem, amount: existingItem.amount - 1 };
      updateItems = [...state.items];
      updateItems[existigItemID] = updateItem;
    }
    return { items: updateItems, totalAmount: updateTotalAmount };
  }

  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemToCartHandler,
    removeItems: removeItemFromCartHandler,
  };

  return (
    <CartContex.Provider value={cartContext}>{children}</CartContex.Provider>
  );
};

export default CartProvider;
