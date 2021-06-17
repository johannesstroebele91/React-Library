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

  const cartItemRemoveHandler = (id: string) => {
    cartContext.removeItem(id);
  };
  const cartItemAddHandler = (item: Meal) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />
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
