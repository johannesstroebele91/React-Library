import { useContext } from "react";
import Meal from "../../../models/types";
import CartContext from "../../../store/CartContext";
import Modal from "../../UI/Modal/Modal";
import CartItem from "../CartItem/CartItem";
import classes from "./Cart.module.css";

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `${cartContext.totalAmount.toFixed(2)} €`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {};
  const cartItemAddHandler = (item: Meal) => {};

  const cartItems = (
    <ul className={classes["card-items"]}>
      {cartContext.items.map((item) => (
        <CartItem key={item.id}>
          item={item}
          onRemove={cartItemRemoveHandler.bind(item.id)}
          onAdd={cartItemAddHandler.bind(item)}
        </CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
