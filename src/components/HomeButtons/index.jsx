import * as S from "./styles";
import { Link } from "react-router-dom";

function HomeButtons(){
    return (
      <S.Buttons>
        <Link to={"/studentArea"}>
          Área Do Estudante
        </Link>
        <Link className="login" to={"/about"} target="_blank">
          Sobre Nós
        </Link>
      </S.Buttons>
    );
}

export default HomeButtons;