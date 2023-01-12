import { combineReducers, AnyAction, Reducer } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authReducer from "./Slices/Auth/AuthSlice";
import userReducer from "./Slices/User/UserSlice";
import regReducer from "./Slices/Signup/UserSlice";
import advertismentsReducer from "./Slices/Advertisment/AdvertismentSlice";
import propertyReducer from "./Slices/Property/PropertySlice";
import advertismentReducer from "./Slices/PostAds/PostAdsSlice";
import categoryReducer from "./Slices/Category/CategorySlice";

const appReducer = combineReducers({
  //add reducer here
  auth: authReducer,
  user: userReducer,
  register: regReducer,
  advertisments: advertismentsReducer,
  property: propertyReducer,
  advertisment: advertismentReducer,
  categories: categoryReducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "/logout") {
    storage.removeItem("persist:root");
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
