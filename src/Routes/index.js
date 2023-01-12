import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../Pages/user/forms/loginFlow/login";
import ForgetPassword from "../Pages/user/forms/loginFlow/forgetPassword";
import CreatePassword from "../Pages/user/forms/loginFlow/createPassword";
import VerifyEmail from "../Pages/user/forms/loginFlow/verifyEmail";

import Register from "../Pages/user/forms/RegisterFlow/register";
import SignUpPersonal from "../Pages/user/forms/RegisterFlow/signUpPersonal";
import VerifyEmailRegister from "../Pages/user/forms/RegisterFlow/verifyEmail";

import HomePage from "../Pages/home/homePage";
import PostNewAd from "../Pages/product/postNewAd";
import CreateNewAd from "../Pages/product/createNewAd";
import PreviewAd from "../Pages/product/previewAd";
import BuyProduct from "../Pages/product/buyProduct/buyProduct";
import SearchProduct from "../Pages/product/searchProduct/searchProduct";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/verifyemaillogin" element={<VerifyEmail />} />
        <Route path="/createpassword" element={<CreatePassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/personal" element={<SignUpPersonal />} />
        <Route path="/verifyemailregister" element={<VerifyEmailRegister />} />
        <Route path="/placeAd" element={<PostNewAd />} />
        <Route path="/createAd/:category/:id" element={<CreateNewAd />} />
        <Route path="/previewAd" element={<PreviewAd />} />
        <Route path="/buyproduct/:id" element={<BuyProduct />} />
        <Route path="/searchProduct" element={<SearchProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
