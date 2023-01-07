import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import initialState from "./InitialState";

export const postAdsSlice = createSlice({
  name: "postAds",
  initialState: initialState,
  reducers: {
    saveAd(state, action) {
      state.advertisment = action.payload.advertisment;
    },
    clearPostAd: (state) => initialState,
  },
});

export const { saveAd, clearPostAd } = postAdsSlice.actions;
export default postAdsSlice.reducer;
