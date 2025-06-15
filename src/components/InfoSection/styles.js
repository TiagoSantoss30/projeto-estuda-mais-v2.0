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
    width: 30%;
  }
`;
