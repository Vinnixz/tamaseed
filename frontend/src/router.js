import Home from "./pages/home";
import Register from "./pages/register";
import Instruction from "./pages/instruction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Router() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/instruction" element={<Instruction />} />
        </Routes>
    </BrowserRouter>
    )
}