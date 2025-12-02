import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import favoritesReducer from "./favouritesSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
  },
});
