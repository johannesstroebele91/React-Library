import Meal from "../../../../models/types";
import MealItemForm from "../MealItemForm/MealItemsForm";
import classes from "./Mealtem.module.css";
interface MealItemsProps {
  meal: Meal;
}
const MealItems: React.FC<MealItemsProps> = ({ meal }) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>${meal.price.toFixed(2)}€</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItems;
