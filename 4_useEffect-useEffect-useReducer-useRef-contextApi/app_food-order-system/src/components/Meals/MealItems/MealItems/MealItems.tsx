import Meal from "../../../../models/types";
import CartContext from "../../../../store/CartContext";
import MealItemForm from "../MealItemForm/MealItemsForm";
import classes from "./Mealtem.module.css";
import { useContext } from "react";

interface MealItemsProps {
  meal: Meal;
}
const MealItems: React.FC<MealItemsProps> = ({ meal }) => {
  const cartContext = useContext(CartContext);

  const onAddToCartHandler = (amount: number) => {
    cartContext.addItem({
      id: meal.id,
      name: meal.name,
      amount: +amount,
      price: meal.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>${meal.price.toFixed(2)}€</div>
      </div>
      <div>
        <MealItemForm onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItems;
