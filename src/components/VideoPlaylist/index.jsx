import * as S from "./styles";
import onlineLearning from "../../assets/onlineLearning.svg";
import { BiMath } from "react-icons/bi";
import { GiAtom } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";

function VideoPlaylist(){
    return (
      <>
        <img
          src={onlineLearning}
          alt="Ilustração de uma pessoa assistindo uma aula online"
        />

        <S.Div>
          <a
            href="https://www.youtube.com/watch?v=TJwATgSkPd4&list=PLpV9DvCZhRkLWxn-fYJAzWCttLUgPQ4Vj&index=2"
            target="_blank"
          >
            <S.Card>
              <BiMath className="icone" />
              <h2>MATEMÁTICA</h2>
            </S.Card>
          </a>

          <a
            href="https://www.youtube.com/watch?v=vDpEGG7OnN8&list=PLpV9DvCZhRkLWxn-fYJAzWCttLUgPQ4Vj&index=1"
            target="_blank"
          >
            <S.Card>
              <GiAtom className="icone" />
              <h2>FÍSICA</h2>
            </S.Card>
          </a>

          <a
            href="https://www.youtube.com/watch?v=XcY6G3GwFCQ&list=PLpV9DvCZhRkLWxn-fYJAzWCttLUgPQ4Vj&index=5"
            target="_blank"
          >
            <S.Card>
              <FaPencilAlt className="icone" />
              <h2>REDAÇÃO</h2>
            </S.Card>
          </a>
        </S.Div>
      </>
    );
}

export default VideoPlaylist;