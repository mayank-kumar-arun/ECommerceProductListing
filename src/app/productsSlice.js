import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsThunk } from "./productsThunks";

const initialState = {
  list: [],
  filteredList: [],
  loading: false,
  categoryFilter: "All",
  ratingFilter: 0,
  sortOrder: "none",
  categories: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.categoryFilter = action.payload;
    },
    filterByRating: (state, action) => {
      state.ratingFilter = action.payload;
    },
    sortByPrice: (state, action) => {
      state.sortOrder = action.payload;
    },
    applyFilters: (state) => {
      let items = [...state.list];

      if (state.categoryFilter !== "All") {
        items = items.filter((p) => p.category === state.categoryFilter);
      }

      if (state.ratingFilter > 0) {
        items = items.filter((p) => p.rating >= state.ratingFilter);
      }

      if (state.sortOrder === "asc") {
        items.sort((a, b) => a.price - b.price);
      } else if (state.sortOrder === "desc") {
        items.sort((a, b) => b.price - a.price);
      }

      state.filteredList = items;
    },
    clearFilters: (state) => {
      state.categoryFilter = "All";
      state.ratingFilter = 0;
      state.sortOrder = "none";
      state.filteredList = state.list;
    },

    addtoWhislist: (state, payload) => {
      const items = [...state.list];
      state.filteredList = items.filter((item) =>
        payload.payload.includes(item.id)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.list = payload.map((p) => ({
          id: p.id,
          name: p.title,
          price: p.price,
          category: p.category,
          rating: p.rating,
          image: p.images[0],
        }));
        const uniqueCategories = [
          "All",
          ...new Set(payload.map((p) => p.category)),
        ];

        state.categories = uniqueCategories;
        state.filteredList = state.list;
      });
  },
});

export const {
  filterByCategory,
  filterByRating,
  sortByPrice,
  applyFilters,
  clearFilters,
  addtoWhislist,
} = productsSlice.actions;

export default productsSlice.reducer;
