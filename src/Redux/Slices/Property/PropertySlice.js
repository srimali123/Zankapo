import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import initialState from "./InitialState";
import * as advertismentService from "../../../Services/AdvertismentService";

export const fetchProperty = createAsyncThunk(
  "property/getAll",
  async (_, thunkAPI) => {
    try {
      return await advertismentService.fetchProperty();
    } catch (error) {
      const message = error.toString();
      thunkAPI.rejectWithValue(message);
    }
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState: initialState,
  reducers: {
    clearProperty: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProperty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.property = action.payload?.data?.data;
      })
      .addCase(fetchProperty.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { clearProperty } = propertySlice.actions;
export default propertySlice.reducer;
