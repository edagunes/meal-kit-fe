import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgetPass from "./pages/ForgetPass";
import Cuisine from "./pages/Cuisine";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FooterSocial } from "./components/FooterSocial";
import { HeaderMenu } from "./components/HeaderMenu";
import React, { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <HeaderMenu cart={cart} setCart={setCart} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route
            path={`/cuisine/:tagId`}
            element={<Cuisine cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
      <FooterSocial />
    </>
  );
}

export default App;
