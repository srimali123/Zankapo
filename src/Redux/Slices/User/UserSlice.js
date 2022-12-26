import { createSlice } from "@reduxjs/toolkit";
import initialState from "./InitialState";

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    saveUser(state, action) {
      state.user = action.payload.user;
    },
    clearUser(state) {
      state.user = initialState.user;
    },
  },
});

export const { clearUser, saveUser } = userSlice.actions;
export default userSlice.reducer;
