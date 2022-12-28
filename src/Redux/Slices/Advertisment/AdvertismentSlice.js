import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import initialState from "./InitialState";

const advertismentSlice = createSlice({
  name: "advertisments",
  initialState: initialState,
  reducers: {
    saveAdvertisments(state, action) {
      state.advertisments = action.payload.advertisments;
    },
    clearAdvertisments(state) {
      state.advertisments = initialState.advertisments;
    },
  },
});

export const { clearAdvertisments, saveAdvertisments } =
  advertismentSlice.actions;
export default advertismentSlice.reducer;
