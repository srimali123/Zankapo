import { createSlice, create } from "@reduxjs/toolkit";
import initialState from "./InitialState";

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authenticate(state) {
      state.isAuthenticated = false;
    },
    setAuthenticate(state, action) {
      state.token = (action.payload && action.payload) || "";
      state.isAuthenticated = true;
    },
    reset(state) {
      state.token = initialState.token;
      state.isAuthenticated = false;
    },
  },
});

export const { authenticate, setAuthenticate, reset } = authSlice.actions;
export default authSlice.reducer;
