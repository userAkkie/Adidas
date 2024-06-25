import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./context/ProductContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import { SearchProvider } from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SearchProvider>
      <FavoriteProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </FavoriteProvider>
    </SearchProvider>
  </BrowserRouter>
);
