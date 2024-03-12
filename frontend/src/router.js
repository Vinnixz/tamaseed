import Home from "./pages/login";
import Register from "./pages/register";
import Instruction from "./pages/instruction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
export default function Router() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/instruction" element={<Instruction />} />
        </Routes>
    </BrowserRouter>
    )
}