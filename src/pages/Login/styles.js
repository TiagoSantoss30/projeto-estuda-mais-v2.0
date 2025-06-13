import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  background: linear-gradient(to bottom, #3f51b5 30%, #1976d2 97%);
  display: flex;
  justify-content: space-between;
  padding: 5% 5% 0% 10%;

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
    width: 702px;
    height: 607px;
  }
`;
