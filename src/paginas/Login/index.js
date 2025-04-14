import { useContext, useState } from "react";
import logo from "../../assets/sgp_logo_vertical.png";
import './login.css';
import { GlobalContext } from "../../contextos/GlobalContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const { login } = useContext(GlobalContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [manterConectado, setManterConectado] = useState("");

    const fazerLogin = (e) => {
        e.preventDefault();

        login({ email, senha, manterConectado });

        // Redirecionar para a tela inicial
        navigate("/dashboard");
    }

    return (
        <div className="bg-container">
            <div className="login-container">
                <div className="d-flex justify-content-center">
                    <img src={logo} alt="Sistema de Gerenciamento de Projetos" width={"200px"} />
                </div>
                <form className="container" onSubmit={fazerLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">Nunca compartilhe suas credenciais.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="manterConectado"
                            value={manterConectado}
                            onChange={(e) => setManterConectado(!manterConectado)}
                        />
                        <label className="form-check-label" htmlFor="manterConectado">Mantenha-me conectado</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Acessar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;