import AvailableMeals from "../AvailableMeals/AvailableMeals";
import MealsSummary from "../MealsSummary/MealsSummary";

const Meals: React.FC = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};
export default Meals;
