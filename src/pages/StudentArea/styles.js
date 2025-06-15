import styled from "styled-components";


export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;

  h1 {
    font-family: "Krona One", sans-serif;
    font-size: 4rem;
    width: 50%;
    color: #1976d2;

    span {
      color: #3f51b5;
    }
  }

  img {
    width: 30%;
    max-height: 400px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 192px;
  margin-bottom: 2%;
`;