import "./App.css";
import Header from "./src/components/Layout/Header/Header";
import AvailableMeals from "./src/components/Meals/AvailableMeals/AvailableMeals";
import Meals from "./src/components/Meals/Meals/Meals";
import MealsSummary from "./src/components/Meals/MealsSummary/MealsSummary";

// Only the App.tsx gets changed in an React app
function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
