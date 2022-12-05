import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/user/forms/loginFlow/login";
import Register from "../Pages/user/forms/RegisterFlow/register";
import VerifyEmail from "../Pages/user/forms/loginFlow/verifyEmail";
import VerifyEmailRegister from "../Pages/user/forms/RegisterFlow/verifyEmail";
import HomePage from "../Pages/home/homePage";
import PostNewAd from "../Pages/product/postNewAd";
import CreateNewAd from "../Pages/product/createNewAd";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyemailregister" element={<VerifyEmailRegister />} />
        <Route path="/placeAd" element={<PostNewAd/>} />
        <Route path="/createAd" element={<CreateNewAd/>} />

      </Routes>
    </BrowserRouter>
  );
}
