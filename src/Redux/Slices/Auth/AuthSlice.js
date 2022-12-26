import { createSlice, create } from "@reduxjs/toolkit";
import initialState from "./InitialState";

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authenticate(state) {
      state.isAuthenticating = true;
    },
    setAuthenticate(state, action) {
      state.token = (action.payload && action.payload) || "";
      state.isAuthenticating = false;
    },
  },
});

export const { authenticate, setAuthenticate } = authSlice.actions;
export default authSlice.reducer;
