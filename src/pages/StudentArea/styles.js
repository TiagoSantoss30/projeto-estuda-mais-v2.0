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

    @media (max-width: 1200px){
      font-size: 2.5rem;
      width: auto;
    }
  }

  img {
    width: 30%;
    max-height: 400px;
  }

  @media (max-width: 700px){
    flex-direction: column-reverse;
    text-align: center;

    h1{
      font-size: 2rem;
    }

    img{
      width: 50%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: clamp(30px, 8vw, 192px);
  margin-bottom: 2%;
  padding: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;