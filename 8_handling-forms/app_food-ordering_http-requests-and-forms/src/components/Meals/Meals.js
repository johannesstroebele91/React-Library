import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals meals={props.meals} />
    </Fragment>
  );
};

export default Meals;
