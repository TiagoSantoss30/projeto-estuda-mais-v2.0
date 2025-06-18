import styled from "styled-components";

export const Main = styled.main`
  @media (max-width:1100px){
    padding: auto;
  }
`

export const TimelineSection = styled.section`
  padding: 5% 15%;
  display: flex;
  justify-content: center;
  gap: 231px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
`;

export const PlaylistSection = styled.section`
  padding: 5% 0;
  display: flex;
  align-items: center;
  justify-content: space-around;


  @media (max-width:1100px){
    flex-direction: column;
  }
`;

export const ExamSection = styled.section`
  padding: 5% 15%;

`;

export const ExamSection_PrimeiraFase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 50%;
    max-width: 375px;
    height: auto;
    border: 5px solid #3f51b5;
    border-radius: 20px;
  }

  div {
    font-family: "Krona One", sans-serif;
    line-height: 60px;
    h2 {
      color: #3f51b5;
      font-size: 3rem;

      @media (max-width: 1100px){
        font-size: 2rem;
      }

      span {
        color: #1976d2;
      }
    }

    p {
      color: #333333;
    }
  }

  @media (max-width: 1100px){
    flex-direction: column;
    text-align: center;
  }
`;

export const ExamSection_PrimeiraFase_botoes = styled.div`
  padding-top: 5%;
  display: flex;
  gap: 50px;

  a {
    background-color: #3f51b5;
    color: #ffffff;
    padding: 0.5rem;
    width: clamp(150px, 30vw, 250px);
    text-align: center;
    text-decoration: none;
    border-radius: 50px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #1976d2;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    
    a{
      width: 80%;
    }
  }
`;

export const ExamSection_SegundaFase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 35%;
  }

  div {
    font-family: "Krona One", sans-serif;
    line-height: 60px;
    h2 {
      color: #3f51b5;
      font-size: 3rem;

      @media (max-width: 1100px){
        font-size: 2rem;
      }

      span {
        color: #1976d2;
      }
    }

    p {
      color: #333333;
    }
  }

  @media (max-width: 1100px){
    flex-direction: column;
    text-align: center;
  }
`;

export const ExamSection_SegundaFase_botoes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  a {
    background-color: #3f51b5;
    color: #ffffff;
    padding: 0.5rem;
    width: 100%;
    text-align: center;
    text-decoration: none;
    border-radius: 50px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #1976d2;
    }
  }
`;