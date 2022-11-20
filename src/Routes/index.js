import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/user/forms/loginFlow/login";
import Register from "../Pages/user/forms/RegisterFlow/register";
import VerifyEmail from "../Pages/user/forms/loginFlow/verifyEmail";
import VerifyEmailRegister from "../Pages/user/forms/RegisterFlow/verifyEmail";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyemailregister" element={<VerifyEmailRegister />} />
      </Routes>
    </BrowserRouter>
  );
}
