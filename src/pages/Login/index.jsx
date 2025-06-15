import * as S from "./styles";
import LoginForm from "../../components/LoginForm/index.jsx";
import LoginImg from "../../assets/Login/login-img1.svg";

function Login() {
  return (
    <S.Section>
      <LoginForm />

      <div>
        <img src={LoginImg} alt="Ilustração de uma pessoa fazendo uma trilha" />
        <h2>
          “Nossa maior fraqueza é desistir. O caminho mais certo para o sucesso
          é sempre tentar apenas uma vez mais.” - Thomas A. Edison
        </h2>
      </div>
    </S.Section>
  );
}

export default Login;
