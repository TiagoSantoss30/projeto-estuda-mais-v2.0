import * as S from "./styles";
import itaLogo from "../../assets/ita-logo.svg";
import BlueHeader from "../../components/BlueHeader/index.jsx";
import calendar from "../../assets/calendar.svg";
import teacher from "../../assets/teacher.svg";
import books from "../../assets/Books.svg";
import download1 from "../../assets/download1.svg";
import download2 from "../../assets/download2.svg";
import StudentAreaHeader from "../../components/StudentAreaHeader/index.jsx";
import InfoSection from "../../components/InfoSection/index.jsx";
import TimelineCard from "../../components/TimelineCard/index.jsx";
import itaExamImg from "../../assets/ita_fase1.pdf.jpg"
import einstein from "../../assets/einstein.svg";
import Footer from "../../components/Footer/index.jsx";
import VideoPlaylist from "../../components/VideoPlaylist/index.jsx";

function ItaPage() {
  return (
    <>
      <StudentAreaHeader />

      <InfoSection
        p1="Localizado em São José dos Campos (SP), o ITA é uma instituição pública vinculada ao Comando da Aeronáutica, reconhecido como um dos principais polos de tecnologia do Brasil e da América Latina."
        p2="Fundado em 1950, o instituto tem a missão de formar engenheiros de alto nível para impulsionar a indústria aeronáutica nacional, inspirado no modelo de excelência do MIT (EUA)."
        imgSrc={itaLogo}
        imgAltText="Logo do (ITA)."
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
          file={"/cronograma-intensivo-ita.pdf"}
          label={"Baixar Cronograma Intensivo"}
        />
        <TimelineCard
          imgSrc={download2}
          imgAltText="Ilustração de download"
          file={"/cronograma-extensivo-ita.pdf"}
          label={"Baixar Cronograma Extensivo"}
        />
      </S.TimelineSection>

      <BlueHeader
        imgSrc={teacher}
        imgAltText="Ilustração de um professor ensinando"
        text="PLAYLISTS DE AULAS"
      />

      <S.PlaylistSection>
        <VideoPlaylist/>
      </S.PlaylistSection>

      <BlueHeader
        imgSrc={books}
        imgAltText="Ilustração de uma pessoa em cima de livros"
        text="BIBLIOTECA DIGITAL"
      />

      <S.ExamSection>
        <S.ExamSection_PrimeiraFase>
          <img src={itaExamImg} alt="Foto da primeira página da prova" />

          <div>
            <h2>
              Primeira <span>Fase</span>
            </h2>
            <p>Ano Da Prova: 2024</p>
            <p>Quantidade De Páginas: 22 </p>

            <S.ExamSection_PrimeiraFase_botoes>
              <a href="#">Baixar Prova</a>
              <a href="#">Baixar Gabarito</a>
            </S.ExamSection_PrimeiraFase_botoes>
          </div>
        </S.ExamSection_PrimeiraFase>
      </S.ExamSection>

      <S.ExamSection>
        <S.ExamSection_SegundaFase>
          <img src={einstein} alt="Ilustração Do Albert Einstein" />

          <div>
            <h2>
              Segunda <span>Fase</span>
            </h2>
            <p>Ano Da Prova: 2024</p>

            <S.ExamSection_SegundaFase_botoes>
              <a href="#">Matemática</a>
              <a href="#">Física</a>
              <a href="#">Química</a>
              <a href="#">Redação</a>
            </S.ExamSection_SegundaFase_botoes>
          </div>
        </S.ExamSection_SegundaFase>
      </S.ExamSection>

      <Footer />
    </>
  );
}

export default ItaPage;
