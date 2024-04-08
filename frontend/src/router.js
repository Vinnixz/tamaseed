import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Instruction from "./pages/instruction";
import Home from "./pages/home";
import Search from "./pages/search";
import Info from "./pages/info";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}
