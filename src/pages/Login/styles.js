import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  background: linear-gradient(to bottom, #3f51b5 30%, #1976d2 97%);
  display: flex;
  justify-content: space-around;
  padding: 6rem 5%;

  div {
    margin-left: 5%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-family: "Krona One", sans-serif;
      font-size: 1.2rem;
      line-height: 50px;
      color: #fff;
    }
  }

  div img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;

    div {
      display: none;
    }
  }
`;

