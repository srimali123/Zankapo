import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/Auth/AuthSlice";
import userReducer from "./Slices/User/UserSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
