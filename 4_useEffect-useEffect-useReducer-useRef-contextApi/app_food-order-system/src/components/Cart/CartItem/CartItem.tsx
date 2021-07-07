import Meal from "../../../models/types";
import classes from "./CartItem.module.css";

interface CartItemProps {
  item: Meal;
  onRemove: (id: string) => void;
  onAdd: (item: Meal) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onAdd, onRemove }) => {
  const price = `${item.price.toFixed(2.} €`;

  const removeHandler = () => {
    onRemove(item.id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        {/* 1. The best solution is to use an handler (e.g. removeHandler) */}
        {/* but an arrow function solution is also possible */}
        {/* although it is bad practice to execute functions in the HTML  */}
        <button onClick={removeHandler}>−</button>
        <button onClick={() => onAdd(item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
