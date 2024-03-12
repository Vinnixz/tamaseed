import Home from "./pages/home";
import Register from "./pages/register";
import Instruction from "./pages/instruction";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Router() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/instruction" element={<Instruction />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </BrowserRouter>
    )
}