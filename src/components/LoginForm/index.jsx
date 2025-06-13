import * as S from "./styles";

function LoginForm() {
  return (
    <S.Form>
      <h1>ESTUDA +</h1>

      <label>
        E-mail:
        <input type="email" placeholder="'nome@email.com'" />
      </label>

      <label>
        Senha:
        <input type="password" />
      </label>

      <button type="button">Login</button>
    </S.Form>
  );
}

export default LoginForm;
