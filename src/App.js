import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => setCartShow(true);
  const hiddeCartHandler = () => setCartShow(false);

  return (
    <CartProvider>
      {cartShow && <Cart onCloseCart={hiddeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
