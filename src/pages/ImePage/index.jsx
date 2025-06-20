import * as S from "./styles";

import StudentAreaHeader from "../../components/StudentAreaHeader";
import BlueHeader from "../../components/BlueHeader";
import TimelineCard from "../../components/TimelineCard";
import InfoSection from "../../components/InfoSection";
import Footer from "../../components/Footer";

import imeLogo from "../../assets/Ime/ime-logo.svg";
import calendar from "../../assets/General/calendar-illustration.svg";
import download1 from "../../assets/General/download-illustration1.svg";
import download2 from "../../assets/General/download-illustration2.svg";
import teacher from "../../assets/General/teacher-illustration.svg";
import aboutImg3 from "../../assets/About/about-img3.svg";
import books from "../../assets/General/books-illustration.svg";
import imeExamImg from "../../assets/Ime/ime-pagina-da-prova.jpg"

function ImePage() {
  return (
    <>
      <StudentAreaHeader />

      <S.Main>
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
            file={"/cronograma-intensivo-ime.pdf"}
            label={"Baixar Cronograma Intensivo"}
          />
          <TimelineCard
            imgSrc={download2}
            imgAltText="Ilustração de download"
            file={"/cronograma-extensivo-ime.pdf"}
            label={"Baixar Cronograma Extensivo"}
          />
        </S.TimelineSection>
        <BlueHeader
          imgSrc={teacher}
          imgAltText="Ilustração de um professor ensinando"
          text="PLAYLISTS DE AULAS"
        />
        <S.PlaylistSection>
          <h2>Em Breve!!</h2>
          <img src={aboutImg3} alt="Ilustração de uma pessoa em obra" />
        </S.PlaylistSection>
        <BlueHeader
          imgSrc={books}
          imgAltText="Ilustração de uma pessoa em cima de livros"
          text="BIBLIOTECA DIGITAL"
        />
        <S.ExamSection>
          <S.ExamSectionContainer>
            <img src={imeExamImg} alt="Foto da primeira página da prova" />
            <div>
              <h2>Prova <span>Geral</span></h2>
              <p>Ano Da Prova: 2024/2025</p>
              <p>Quantidade De Páginas: 24 </p>
              <S.ExamSectionContainerBotoes>
                <a href="/ime-prova.pdf" target="_blank">Baixar Prova</a>
                <a href="/ime-gabarito-da-prova.pdf" target="_blank">Baixar Gabarito</a>
              </S.ExamSectionContainerBotoes>
            </div>
          </S.ExamSectionContainer>
        </S.ExamSection>
      </S.Main>

      <Footer />
    </>
  );
}

export default ImePage;
