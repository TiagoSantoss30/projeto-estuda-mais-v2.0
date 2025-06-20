// src/pages/StudentArea/index.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

import * as S from "./styles";
import StudentAreaCard from "../../components/StudentAreaCard/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import itaLogo from "../../assets/Ita/ita-logo.svg";
import imeLogo from "../../assets/Ime/ime-logo.svg";
import fatecLogo from "../../assets/fatec-logo.svg";
import studentAreaImg from "../../assets/StudentArea/studentArea-img1.svg";

function StudentArea() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@estudamais:token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      api
        .get("/student/my-data")
        .then((response) => {
          // A resposta agora inclui o 'role', que guardamos no estado
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Sessão inválida.", error);
          handleLogout();
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      navigate("/");
    }
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem("@estudamais:token");
    api.defaults.headers.common["Authorization"] = null;
    navigate("/");
  }

  if (loading) {
    return <h1>Carregando seus dados...</h1>;
  }

  return (
    <>
      <S.Header>
        {userData && <h2>Olá, {userData.nome}!</h2>}
        <S.UserActions>
          {/* O link para o painel só é renderizado se o role for 'admin' */}
          {userData && userData.role === "admin" && (
            <S.AdminLink to="/admin">Painel do Admin</S.AdminLink>
          )}
          <S.LogoutButton onClick={handleLogout}>Sair</S.LogoutButton>
        </S.UserActions>
      </S.Header>

      <main>
        <S.Div>
          <h1>
            Área Do <span>Estudante</span>
          </h1>
          <img
            src={studentAreaImg}
            alt="Ilustração de uma mulher utilizando óculos de realidade virtual"
          />
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
            CardImgAltText="Logo da Fatec"
            CardText="EM BREVE!"
          />
        </S.Container>
      </main>

      <Footer />
    </>
  );
}

export default StudentArea;
