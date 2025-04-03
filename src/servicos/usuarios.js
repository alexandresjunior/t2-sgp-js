import { api } from "./api";

export async function salvarUsuario(dadosUsuario, setExibirModal) {
    await api.post("/usuarios", dadosUsuario)
        .then((resposta) => {
            if (resposta.status === 201) {
                setExibirModal(true);
            }
        })
        .catch((erro) => {
            alert("Erro ao cadastrar usuario.");
            console.error("Erro ao cadastrar usuario: ", erro);
        });
}

