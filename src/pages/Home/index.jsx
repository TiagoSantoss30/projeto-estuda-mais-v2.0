import * as S from "./styles";
import WhiteHeader from "../../components/WhiteHeader/index.jsx";
import HomeButtons from "../../components/HomeButtons/index.jsx"
import Footer from "../../components/Footer/index.jsx";
import homeImg1 from "../../assets/Home/home-img1.svg";
import homeImg2 from "../../assets/Home/home-img2.svg";

function Home(){
    return (
      <>
        <WhiteHeader />

        <S.MainContainer>
          <S.TextContainer>
            <S.TextContainerH1>
              Simplifique seus estudos, <strong>conquiste</strong> sua vaga!
            </S.TextContainerH1>

            <img
              src={homeImg1}
              alt="ilustração de uma mulher com um óculos VR"
            />

            <S.TextContainerH2>
              Nosso objetivo é mantê-lo motivado e preparado para alcançar a tão
              sonhada vaga na <span>universidade</span>.
            </S.TextContainerH2>

            <HomeButtons/>
          </S.TextContainer>

          <S.ImageContainer>
            <img
              src={homeImg2}
              alt="ilustração de uma estudante comemorando o fim da graduação"
            />
          </S.ImageContainer>
        </S.MainContainer>

        <Footer/>
      </>
    );
}

export default Home;