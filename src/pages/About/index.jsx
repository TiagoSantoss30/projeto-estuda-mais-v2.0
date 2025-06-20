import * as S from "./styles";
import BlueHeader from "../../components/BlueHeader/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import homeImg1 from "../../assets/Home/home-img1.svg";
import aboutImg1 from "../../assets/About/about-img1.svg";
import aboutImg2 from "../../assets/About/about-img2.svg";
import aboutImg3 from "../../assets/About/about-img3.svg";
import { FaCheck } from "react-icons/fa6";

function About() {
  return (
    <>
      <BlueHeader
        imgSrc={homeImg1}
        imgAltText="ilustração de uma mulher com um óculos VR"
        text="Conheça Mais Sobre O Estuda +"
      />

      <main>
        <S.Section>
          <img
            src={aboutImg1}
            alt="ilustração de uma pessoa pulando blocos para chegar no objetivo"
          />
          <S.Div>
            <h2>Nossa Missão</h2>
            <p>
              <em>
                No <strong>Estuda +</strong>, acreditamos que estudar para o
                vestibular pode ser
                <strong> simples</strong> e <strong>motivador</strong>.
              </em>
            </p>
            <p>
              <em>
                Nossa missão é oferecer ferramentas <strong>gratuitas</strong>{" "}
                para <strong>organizar</strong> o seus estudos, acessar aulas
                incríveis e <strong>praticar</strong> com provas anteriores.
              </em>
            </p>
          </S.Div>
        </S.Section>
        <S.Section>
          <S.Div>
            <h2>O Que Você Vai Encontrar</h2>
            <ul>
              <li>
                <FaCheck /> CRONOGRAMAS DE ESTUDO
              </li>
              <li>
                <FaCheck /> PLAYLISTS COM AULAS DE DIFERENTES MATÉRIAS
              </li>
              <li>
                <FaCheck /> BIBLIOTECA DIGITAL
              </li>
            </ul>
          </S.Div>
          <img
            src={aboutImg2}
            alt="ilustração de uma pessoa fazendo um checklist"
          />
        </S.Section>
        <S.Section>
          <img src={aboutImg3} alt="ilustração de uma pessoa em uma obra" />
          <S.Div>
            <h2>Em Breve O Nosso Portal Terá Novas Funcionalidades!</h2>
          </S.Div>
        </S.Section>
      </main>

      <Footer/>
    </>
  );
}

export default About;
