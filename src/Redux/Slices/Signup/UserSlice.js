import { createSlice } from "@reduxjs/toolkit";
import initialState from "./InitialState";

const userSlice = createSlice({
  name: "savedUser",
  initialState: initialState,
  reducers: {
    saveUser(state, action) {
      state.savedUser = action.payload.savedUser;
    },
    clearUser(state) {
      state.savedUser = initialState.savedUser;
    },
  },
});

export const { clearUser, saveUser } = userSlice.actions;
export default userSlice.reducer;
