import "./App.css";
import Header from "./src/components/Header/Header/Header";
import MealsSummary from "./src/components/Meals/MealsSummary/MealsSummary";

// Only the App.tsx gets changed in an React app
function App() {
  return (
    <>
      <Header />
      <MealsSummary />
    </>
  );
}

export default App;
