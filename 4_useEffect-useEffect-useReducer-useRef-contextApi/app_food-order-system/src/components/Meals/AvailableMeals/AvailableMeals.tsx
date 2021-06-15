import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "../dummy-meals";
import Card from "../../UI/Card/Card";
import MealItems from "../MealItems/MealItems/MealItems";

const AvailableMeals: React.FC = () => {
  return (
    <section className={classes.meals}>
      <Card>
        {DUMMY_MEALS.map((meal) => (
          <MealItems key={meal.id} meal={meal} />
        ))}
      </Card>
    </section>
  );
};
export default AvailableMeals;
