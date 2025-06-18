import * as S from "./styles";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function WhiteHeader() {
  return (
    <S.Header>
      <S.HeaderTitle>
        ESTUDA <span>+</span>
      </S.HeaderTitle>
      <S.HeaderLinks>
        <S.HeaderMedia>
          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaYoutube />
          </a>

          <a href="#">
            <BsTwitterX />
          </a>
        </S.HeaderMedia>
      </S.HeaderLinks>
    </S.Header>
  );
}

export default WhiteHeader;
