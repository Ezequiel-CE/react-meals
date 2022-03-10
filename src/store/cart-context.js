import React from "react";

const CartContex = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: (item) => {},
  removeItems: (id) => {},
});

export default CartContex;
