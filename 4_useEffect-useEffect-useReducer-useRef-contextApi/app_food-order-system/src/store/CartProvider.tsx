import { useReducer } from "react";
import Meal from "../models/types";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state: any, action: any) => {
  if (action.type === "ADD") {
    // concat() adds a new item to an array
    // BUT creates a new array for this instead of push()
    // for updating a state in an immutable way
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props: any) => {
  const [cartState, dispatchCartActions] = useReducer(
    cartReducer,
    defaultCartState
  );

  // Logic for managing the context data
  const addItemToCartHandler = (item: Meal) => {
    dispatchCartActions({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartActions({ type: "REMOVE", id: id });
  };

  // This object will, instead of the one in CardProvider,
  // persit and edited based on user inputs
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // Enables to wrap every component
  // that should get access to the context
  // Value provides the respective data that the context provides
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
