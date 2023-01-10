import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import initialState from "./InitialState";
import * as advertismentService from "../../../Services/AdvertismentService";

export const fetchSingleAdvertisment = createAsyncThunk(
  "advertisment/getOne",
  async (params, thunkAPI) => {
    try {
      return await advertismentService.fetchAdvertismentsById(params);
    } catch (error) {
      const message = error.toString();
      thunkAPI.rejectWithValue(message);
    }
  }
);

const postAdsSlice = createSlice({
  name: "postAds",
  initialState: initialState,
  reducers: {
    clearPostAd: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleAdvertisment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleAdvertisment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.advertisment = action.payload?.data?.data;
      })
      .addCase(fetchSingleAdvertisment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { clearPostAd } = postAdsSlice.actions;
export default postAdsSlice.reducer;
