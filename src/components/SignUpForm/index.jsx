// src/components/SignUpForm/index.jsx

import React, { useState } from "react"; // 1. Importamos o useState
import { useNavigate } from "react-router-dom"; // Para redirecionar o usuário
import * as S from "./styles";
import api from "../../services/api"; // 2. Importamos nossa API configurada

function SignUpForm() {
  // 3. Criamos um estado para cada campo do formulário e para as mensagens
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [verificaSenha, setVerificaSenha] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // Hook para fazer o redirecionamento

  // 4. Função que será executada ao submeter o formulário
  async function handleSubmit(event) {
    event.preventDefault(); // Impede que a página recarregue
    setMessage(""); // Limpa mensagens de erro antigas

    // Validação simples no frontend
    if (senha !== verificaSenha) {
      return setMessage("As senhas não conferem.");
    }
    if (!nome || !email || !senha) {
      return setMessage("Por favor, preencha todos os campos obrigatórios.");
    }

    try {
      await api.post("/auth/register", { nome, email, senha });

      alert(
        "Cadastro realizado com sucesso! Você será redirecionado para o login."
      );
      navigate("/auth/login"); // Redireciona o usuário para a página de login
    } catch (error) {
      // Se a chamada falhou, pegamos a mensagem de erro do backend
      const errorMessage =
        error.response?.data?.message ||
        "Não foi possível cadastrar. Tente novamente.";
      setMessage(errorMessage);
    }
  }

  // 5. Conectamos tudo no nosso JSX
  return (
    // Adicionamos o evento onSubmit ao formulário
    <S.Form onSubmit={handleSubmit}>
      <h1>Comece Sua Jornada Para O Vestibular!</h1>

      {/* Para cada input, adicionamos:
        - `onChange`: para atualizar o estado correspondente a cada letra digitada.
        - `value`: para que o React controle o valor exibido no campo.
      */}
      <input
        name="nomeCompleto"
        type="text"
        placeholder="Digite Seu Nome Completo:"
        onChange={(e) => setNome(e.target.value)}
        value={nome}
      />

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

      <input
        name="verificaSenha"
        type="password"
        placeholder="Digite Sua Senha Novamente:"
        onChange={(e) => setVerificaSenha(e.target.value)}
        value={verificaSenha}
      />

      {/* Exibimos a mensagem de erro/sucesso */}
      {message && <p style={{ color: "red", marginTop: "10px" }}>{message}</p>}

      {/* Mudamos o tipo do botão para "submit" para ativar o onSubmit do formulário */}
      <button type="submit">Cadastre-se</button>
    </S.Form>
  );
}

export default SignUpForm;
