import React from "react";

const CartContex = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: (item) => {},
  removeItems: (id) => {},
  clearCart: () => {},
});

export default CartContex;
