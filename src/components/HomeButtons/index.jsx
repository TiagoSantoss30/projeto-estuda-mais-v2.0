import * as S from "./styles";
import { Link } from "react-router-dom";

function HomeButtons(){
    return (
      <S.Buttons>
        <Link to={"/signUp"}>
          Cadastre-se
        </Link>
        <Link className="login" to={"/login"} target="_blank">
          Login
        </Link>
      </S.Buttons>
    );
}

export default HomeButtons;