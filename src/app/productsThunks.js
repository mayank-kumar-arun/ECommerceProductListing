import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsApi } from "../api/productsApi";

export const fetchProductsThunk = createAsyncThunk(
  "products/fetch",
  async () => {
    return await fetchProductsApi();
  }
);
