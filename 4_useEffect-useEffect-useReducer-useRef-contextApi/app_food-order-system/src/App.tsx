import { useState } from "react";
import "./App.css";
import Cart from "./src/components/Cart/Cart/Cart";
import Header from "./src/components/Layout/Header/Header";
import Meals from "./src/components/Meals/Meals/Meals";

// Only the App.tsx gets changed in an React app
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {/* Renders the Cart if the boolean is true btw. not*/}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
