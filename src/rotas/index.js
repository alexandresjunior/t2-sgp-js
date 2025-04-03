import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../paginas/Login";
import Pagina404 from "../paginas/Pagina404";
import Dashboard from "../paginas/Dashboard";
import Usuarios from "../paginas/Usuarios";
import UsuarioForm from "../paginas/Usuarios/UsuarioForm";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/novo-usuario" element={<UsuarioForm />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;