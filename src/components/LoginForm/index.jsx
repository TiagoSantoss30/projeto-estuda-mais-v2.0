import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionar após o login
import * as S from "./styles"; // Supondo que você use styled-components
import api from "../../services/api"; // Nossa API configurada

function LoginForm() {
  // 1. Estados para os campos e para mensagens de erro/sucesso
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // Hook para navegação

  // 2. Função que lida com o envio do formulário
  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (!email || !senha) {
      return setMessage("Por favor, preencha e-mail e senha.");
    }

    try {
      // 3. Chamada à API de login
      const response = await api.post("/auth/login", { email, senha });

      // 4. Lógica de Sucesso
      const token = response.data.token;

      // Armazena o token no localStorage do navegador para mantê-lo logado
      localStorage.setItem("@estudamais:token", token);

      // Atualiza o header de autorização do axios para futuras requisições
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Redireciona o usuário para a página principal da aplicação
      navigate("/student-area"); // ou para a rota que desejar
    } catch (error) {
      // 5. Lógica de Erro
      const errorMessage =
        error.response?.data?.message || "E-mail ou senha incorretos.";
      setMessage(errorMessage);
    }
  }

  return (
    // 6. Conexão no JSX
    <S.Form onSubmit={handleSubmit}>
      <h1>Acesse Sua Conta</h1>

      <input
        name="email"
        type="email"
        placeholder="Digite Seu E-mail:"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <input
        name="senha"
        type="password"
        placeholder="Digite Sua Senha:"
        onChange={(e) => setSenha(e.target.value)}
        value={senha}
      />

      {message && <p style={{ color: "red", marginTop: "10px" }}>{message}</p>}

      <button type="submit">Entrar</button>
    </S.Form>
  );
}

export default LoginForm;
