import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import FavoritesContext from "./store/favorites-context";

ReactDOM.render(
  <FavoritesContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContext>,
  document.getElementById("root")
);
