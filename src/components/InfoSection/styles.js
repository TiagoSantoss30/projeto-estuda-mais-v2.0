import styled from "styled-components";

export const Section = styled.section`
  padding: 5% 5% 5% 0;
  display: flex;

  div {
    background: linear-gradient(to bottom, #3f51b5 30%, #1976d2 97%);
    width: 60%;
    height: 520px;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    gap: 94px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    margin-right: 10%;
  }

  p {
    font-family: "Krona One", sans-serif;
    color: #fff;
    font-size: 1.2rem;
    line-height: 40px;
  }

  .segundo-paragrafo {
    text-align: right;
  }

  img {
    width: 25%;
  }

  @media (max-width: 1390px) {
    div {
      gap: 65px;
    }
    p {
      line-height: 30px;
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0;
    width: auto;

    img{
      padding: 5%;
      width: 60%;
    }

    p {
      font-size: 1rem;
      text-align: center;

      .segundo-paragrafo {
        text-align: center;
      }
    }

    div {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      border-bottom-right-radius: 0;
      padding: 5%;
      width: 100%;
      margin-right: 0;
      height: auto;
    }
  }

  @media (max-width: 700px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
