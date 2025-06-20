import styled from "styled-components";

export const MainContainer = styled.section`
  padding: 3% 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    padding: 5%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 5% 5%;
  }
`;

export const TextContainer = styled.div`
  width: 60%;
  text-align: center;

  img {
    width: 50%;
  }

  @media (max-width: 1440px) {
    width: auto;
  }

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 70%;
    }
  }
`;

export const TextContainerH1 = styled.h1`
  text-align: left;
  font-family: "Krona One", sans-serif;
  color: #3f51b5;
  font-size: 2.25rem;

  strong {
    color: #1976d2;
  }

  @media (max-width: 1024px){
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const TextContainerH2 = styled.h1`
  text-align: left;
  font-family: "Krona One", sans-serif;
  color: #333;
  font-size: 1.2rem;
  width: 85%;
  word-spacing: 15px;
  line-height: 45px;

  span {
    background-color: #fbbf24;
    padding: 0.5rem;
    border-radius: 8px;
  }

  @media (max-width: 1024px){
    font-size: 0.9rem;
    word-spacing: normal;
    width: auto;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 90%;
  }

  @media (max-width: 1440px){
    width: 80%;
  }

  @media (max-width: 1024px){
    display: none;
  }
`;
