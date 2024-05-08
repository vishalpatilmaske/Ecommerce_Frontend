import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";

import Singup from "./auth/Singup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/profile" />
          <Route path="/product" />
          <Route path="/services" />
          <Route path="/about" />
        </Route>
        <Route path="/singup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
