import { createSlice } from "@reduxjs/toolkit";

const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: storedFavorites,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.items.includes(id)) {
        state.items = state.items.filter((item) => item !== id);
      } else {
        state.items.push(id);
      }
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },

    clearFavorites: (state) => {
      state.items = [];
      localStorage.setItem("favorites", JSON.stringify([]));
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
