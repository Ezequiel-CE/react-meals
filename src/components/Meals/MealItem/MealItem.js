import React, { useContext } from "react";
import { MealsStyled, DescriptionStyled, PriceStyled } from "./MealItem.styled";
import MealsItemForm from "./MealsItemForm";
import CartContex from "../../../store/cart-context";

const MealItem = ({ name, description, price, id }) => {
  const cartCTX = useContext(CartContex);

  const addToCartHandler = (amount) => {
    cartCTX.addItems({ id, name, amount, price });
  };
  const priceFormated = `$${price.toFixed(2)}`;
  return (
    <MealsStyled>
      <div>
        <h3>{name}</h3>
        <DescriptionStyled>{description}</DescriptionStyled>
        <PriceStyled>{priceFormated}</PriceStyled>
      </div>
      <div>
        <MealsItemForm idInfo={id} onAddToCart={addToCartHandler} />
      </div>
    </MealsStyled>
  );
};

export default MealItem;
