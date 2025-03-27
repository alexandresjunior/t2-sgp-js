import logo from "../../assets/sgp_logo_vertical.png";
import './login.css';

function Login() {
    return (
        <div className="bg-container">
            <div className="login-container">
                <div className="d-flex justify-content-center">
                    <img src={logo} alt="Sistema de Gerenciamento de Projetos" width={"200px"} />
                </div>
                <form className="container">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Nunca compartilhe suas credenciais.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input type="password" className="form-control" id="senha" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="manterConectado" />
                        <label className="form-check-label" htmlFor="manterConectado">Mantenha-me conectado</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Acessar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;