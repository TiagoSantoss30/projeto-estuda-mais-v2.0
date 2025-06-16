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
import aboutImg3 from "../../assets/About/about-img3.svg";
import Footer from "../../components/Footer/index.jsx";
import ExamCard from "../../components/ExamCard/index.jsx";

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
        <img src={aboutImg3} alt="Ilustração de uma pessoa em obra" />
      </S.PlaylistSection>

      <BlueHeader
        imgSrc={books}
        imgAltText="Ilustração de uma pessoa em cima de livros"
        text="BIBLIOTECA DIGITAL"
      />

      <S.ExamsSection>
        <div>
          <h2>
            Primeira Fase <span>2024</span>
          </h2>

          <ExamCard label={"Baixar Prova"} />
          <ExamCard label={"Baixar Gabarito"} />
        </div>
      </S.ExamsSection>

      <S.ExamsSection>
        <div>
          <h2>
            Segunda Fase <span>2024</span>
          </h2>

          <ExamCard label={"Matemática"} />
          <ExamCard label={"Física"} />
        </div>
      </S.ExamsSection>

      <Footer />
    </>
  );
}

export default ItaPage;
