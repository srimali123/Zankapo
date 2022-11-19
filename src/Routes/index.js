import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../Pages/user/forms/login';
import VerifyEmail from '../Pages/verifyEmail';
export default function AppRoutes() {
    

    return (
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/> 
      <Route path="/A" element={<VerifyEmail/>}/> 
        
      
 </Routes>
  </BrowserRouter>
    )
}
