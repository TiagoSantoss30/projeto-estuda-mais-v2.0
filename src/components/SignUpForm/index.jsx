import * as S from "./styles";

function SignUpForm() {
  return (
    <S.Form>
      <h1>Comece Sua Jornada Para O Vestibular!</h1>

      <input
        name="nomeCompleto"
        type="text"
        placeholder="Digite Seu Nome Completo:"
      />

      <input name="email" type="email" placeholder="Digite Seu E-mail:" />

      <input name="senha" type="password" placeholder="Digite Sua Senha:" />

      <input
        name="verificaSenha"
        type="password"
        placeholder="Digite Sua Senha Novamente:"
      />

      <button type="button">Cadastre-se</button>
    </S.Form>
  );
}

export default SignUpForm;
