import * as S from "./styles";
import StudentAreaCard from "../../components/StudentAreaCard/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import itaLogo from "../../assets/ita-logo.svg";
import imeLogo from "../../assets/ime-logo.svg";
import fatecLogo from "../../assets/fatec-logo.svg";
import studentAreaImg from "../../assets/studentArea-img1.svg";

function StudentArea() {
    return (
      <>
        <S.Div>
          <h1>Área Do <span>Estudante</span></h1>
          <img src={studentAreaImg} alt="" />
        </S.Div>

        <S.Container>
          <StudentAreaCard
            CardHref=""
            CardImg={itaLogo}
            CardImgAltText="Logo Do (ITA)"
            CardImgWidth={309}
            CardImgHeight={117}
            CardText="INSTITUTO TECNOLÓGICO DE AERONAUTICA (ITA)"
          />
          <StudentAreaCard
            CardHref=""
            CardImg={imeLogo}
            CardImgAltText="Logo Do (IME)"
            CardImgWidth={309}
            CardImgHeight={150}
            CardText="INSTITUTO MILITAR DE ENGENHARIA (IME)"
          />
          <StudentAreaCard
            CardHref=""
            CardImg={fatecLogo}
            CardImgAltText="Logo Do Fatec"
            CardImgWidth={309}
            CardImgHeight={150}
            CardText="EM BREVE!"
          />
        </S.Container>

        <Footer/>
      </>
    );
}

export default StudentArea;


