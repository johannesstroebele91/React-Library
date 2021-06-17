import React from "react";

// Initializing the context will give better autocompletion
const CartContext = React.createContext({
  items: [{ id: "0", name: "", description: "", amount: 0, price: 0 }],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (id: string) => {},
});

export default CartContext;
