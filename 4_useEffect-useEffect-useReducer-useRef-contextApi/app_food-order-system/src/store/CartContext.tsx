import React from "react";
import Meal from "../models/types";

// Initializing the context will give better autocompletion
const CartContext = React.createContext({
  items: [{ id: 0, amount: 0, name: "" }],
  totalAmount: 0,
  addItem: (item: Meal) => {},
  removeItem: (id: string) => {},
});

export default CartContext;
