import { MouseEventHandler, useContext } from "react";
import CartContext from "../../../store/CartContext";
import CartIcon from "../CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";
interface HeaderCartButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const HeaderCartButton: React.FC<HeaderCartButtonProps> = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
