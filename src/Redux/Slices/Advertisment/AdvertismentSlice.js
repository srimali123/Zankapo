import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import initialState from "./InitialState";
import * as advertismentService from "../../../Services/AdvertismentService";

export const fetchAdvertisments = createAsyncThunk(
  "advertisments/getAll",
  async (_, thunkAPI) => {
    try {
      return await advertismentService.fetchAdvertisments();
    } catch (error) {
      const message = error.toString();
      thunkAPI.rejectWithValue(message);
    }
  }
);

const advertismentSlice = createSlice({
  name: "advertisments",
  initialState: initialState,
  reducers: {
    clearAdvertisments: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvertisments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdvertisments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.advertisments = action.payload?.data?.data;
      })
      .addCase(fetchAdvertisments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { clearAdvertisments } = advertismentSlice.actions;
export default advertismentSlice.reducer;
