import * as S from "./styles";
import StudentAreaHeader from "../../components/StudentAreaHeader/index.jsx";
import InfoSection from "../../components/InfoSection/index.jsx";
import BlueHeader from "../../components/BlueHeader/index.jsx";
import imeLogo from "../../assets/ime-logo.svg";
import calendar from "../../assets/calendar.svg";
import teacher from "../../assets/teacher.svg";
import download1 from "../../assets/download1.svg";
import download2 from "../../assets/download2.svg";
import TimelineCard from "../../components/TimelineCard/index.jsx";
import aboutImg3 from "../../assets/About/about-img3.svg";
import books from "../../assets/Books.svg";
import imeProvaImg from "../../assets/ime_prova.jpg";
import Footer from "../../components/Footer/index.jsx";

function ImePage() {
  return (
    <>
      <StudentAreaHeader />

      <InfoSection
        p1="O IME, localizado na Praia Vermelha, no Rio de Janeiro (RJ), é uma instituição pública do Exército Brasileiro e a mais antiga escola de engenharia das Américas, com origens que remontam a 1792."
        p2="Sua missão é formar engenheiros militares e contribuir para o desenvolvimento científico-tecnológico do país."
        imgSrc={imeLogo}
        imgAltText="Logo do (IME)."
      />

      <BlueHeader
        imgSrc={calendar}
        imgAltText="Ilustração de uma pessoa em cima de um calendario"
        text="CRONOGRAMAS DE ESTUDO"
      />

      <S.TimelineSection>
        <TimelineCard
          imgSrc={download1}
          imgAltText="Ilustração de download"
          file={"/Cronograma-Intensivo-IME.pdf"}
          label={"Baixar Cronograma Intensivo"}
        />
        <TimelineCard
          imgSrc={download2}
          imgAltText="Ilustração de download"
          file={"/Cronograma-Extensivo-IME.pdf"}
          label={"Baixar Cronograma Extensivo"}
        />
      </S.TimelineSection>

      <BlueHeader
        imgSrc={teacher}
        imgAltText="Ilustração de um professor ensinando"
        text="PLAYLISTS DE AULAS"
      />

      <S.PlaylistSection>
        <img src={aboutImg3} alt="Ilustração de uma pessoa em obra" />
      </S.PlaylistSection>

      <BlueHeader
        imgSrc={books}
        imgAltText="Ilustração de uma pessoa em cima de livros"
        text="BIBLIOTECA DIGITAL"
      />

      <S.ExamSection>
        <S.ExamSectionContainer>
          <img src={imeProvaImg} alt="Foto da primeira página da prova" />

          <div>
            <h2>Prova <span>Geral</span></h2>

            <p>Ano Da Prova: 2024/2025</p>
            <p>Quantidade De Páginas: 24 </p>

            <S.ExamSectionContainerBotoes>
              <a href="#">Baixar Prova</a>
              <a href="#">Baixar Gabarito</a>
            </S.ExamSectionContainerBotoes>
          </div>
        </S.ExamSectionContainer>
      </S.ExamSection>

      <Footer />
    </>
  );
}

export default ImePage;
