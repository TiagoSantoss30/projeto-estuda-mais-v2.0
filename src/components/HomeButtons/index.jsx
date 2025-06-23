import * as S from "./styles";
import { Link } from "react-router-dom";

function HomeButtons(){
    return (
      <S.Buttons>
        <Link to={"/StudentArea"}>
          Área Do Estudante
        </Link>
        <Link className="about" to={"/about"} target="_blank">
          Saiba +
        </Link>
      </S.Buttons>
    );
}

export default HomeButtons;