import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import initialState from "./InitialState";
import * as advertismentService from "../../../Services/AdvertismentService";

export const fetchCategories = createAsyncThunk(
  "categories/getAll",
  async (_, thunkAPI) => {
    try {
      return await advertismentService.fetchCategory();
    } catch (error) {
      const message = error.toString();
      thunkAPI.rejectWithValue(message);
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    clearCategory: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload?.data?.data;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { clearCategory } = categorySlice.actions;
export default categorySlice.reducer;
