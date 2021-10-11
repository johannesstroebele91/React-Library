import { useCallback, useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  // HTTP requests
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-http-45506-default-rtdb.firebaseio.com/"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: data[key].id,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler]);

  const addMealHandler = async (meal) => {
    const response = await fetch(
      "https://react-http-45506-default-rtdb.firebaseio.com/",
      {
        method: "POST",
        body: JSON.stringify(meal),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  };

  let content = <p>Found no meals</p>;
  if (meals.length > 0) {
    content = <Meals meals={meals} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Data is loading...</p>;
  }

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onClose={hideCartHandler} onAddMeal={addMealHandler} />
      )}
      <Header onShowCart={showCartHandler} />
      <main>
        <section>{content}</section>
      </main>
    </CartProvider>
  );
}

export default App;
