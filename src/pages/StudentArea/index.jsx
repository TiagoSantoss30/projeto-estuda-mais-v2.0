import * as S from "./styles";
import StudentAreaCard from "../../components/StudentAreaCard/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import itaLogo from "../../assets/Ita/ita-logo.svg";
import imeLogo from "../../assets/Ime/ime-logo.svg";
import fatecLogo from "../../assets/fatec-logo.svg";
import studentAreaImg from "../../assets/StudentArea/studentArea-img1.svg";

function StudentArea() {
    return (
      <>
        <main>
          <S.Div>
            <h1>Área Do <span>Estudante</span></h1>
            <img src={studentAreaImg} alt="" />
          </S.Div>
          <S.Container>
            <StudentAreaCard
              CardHref={"/itaPage"}
              CardImg={itaLogo}
              CardImgAltText="Logo Do (ITA)"
              CardText="INSTITUTO TECNOLÓGICO DE AERONAUTICA (ITA)"
            />
            <StudentAreaCard
              CardHref={"/imePage"}
              CardImg={imeLogo}
              CardImgAltText="Logo Do (IME)"
              CardText="INSTITUTO MILITAR DE ENGENHARIA (IME)"
              imgWidth="40%"
            />
            <StudentAreaCard
              CardHref=""
              CardImg={fatecLogo}
              CardImgAltText="Logo Do Fatec"
              CardText="EM BREVE!"
            />
          </S.Container>
        </main>

        <Footer/>
      </>
    );
}

export default StudentArea;


