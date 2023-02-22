import { createSlice } from "@reduxjs/toolkit";
import initialState from "./InitialState";

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    saveSearchData(state, action) {
      state.searchData = action.payload;
    },
    clearSearchData(state) {
      state.user = initialState.user;
    },
  },
});

export const { saveSearchData, clearSearchData } = searchSlice.actions;
export default searchSlice.reducer;
