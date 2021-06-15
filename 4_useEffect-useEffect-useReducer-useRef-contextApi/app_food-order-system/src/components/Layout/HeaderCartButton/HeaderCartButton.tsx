import { MouseEventHandler } from "react";
import CartIcon from "../CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";
interface HeaderCartButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const HeaderCartButton: React.FC<HeaderCartButtonProps> = ({ onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
export default HeaderCartButton;
