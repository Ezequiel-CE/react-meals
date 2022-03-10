import {
  StyledCartItem,
  StyledSummary,
  StyledAmount,
  StyledPrice,
  StyledActions,
} from "./CartItem.styled";

const CartItem = ({ onAdd, onRemove, item }) => {
  const priceRound = `$${item.price.toFixed(2)}`;

  return (
    <StyledCartItem>
      <div>
        <h2>{item.name}</h2>
        <StyledSummary>
          <StyledPrice>{priceRound}</StyledPrice>
          <StyledAmount>x {item.amount}</StyledAmount>
        </StyledSummary>
      </div>
      <StyledActions>
        <button onClick={() => onRemove(item.id)}>−</button>
        <button onClick={() => onAdd({ ...item, amount: 1 })}>+</button>
      </StyledActions>
    </StyledCartItem>
  );
};

export default CartItem;
