import styled from "styled-components";

export const Section = styled.section`
  padding: 9rem 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to bottom, #3f51b5 30%, #1976d2 97%);

  div img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }

  @media (max-width: 1230px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 2rem 5%;
  }
`;
