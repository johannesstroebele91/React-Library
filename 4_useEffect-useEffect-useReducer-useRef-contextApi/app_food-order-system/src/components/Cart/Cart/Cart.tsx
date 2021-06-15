import Modal from "../../UI/Modal/Modal";
import classes from "./Cart.module.css";

const DUMMY_MEAL = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const cartItems = (
    <ul className={classes["card-items"]}>
      {DUMMY_MEAL.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
