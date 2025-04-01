import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../paginas/Login";
import Pagina404 from "../paginas/Pagina404";
import Dashboard from "../paginas/Dashboard";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;