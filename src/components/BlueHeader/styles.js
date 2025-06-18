import styled from "styled-components";

export const Header = styled.header`
  background: linear-gradient(to bottom, #3f51b5 30%, #1976d2 97%);
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  font-family: "Krona One", sans-serif;
  font-size: 1.5rem;
  color: #fff;

  img {
    width: 12%;
    
  }

  @media (max-width: 1200px) {
    font-size: 1rem;

    img {
      width: 15%;
    }
  }

  @media (max-width: 850px) {
    font-size: 0.8rem;
    text-align: center;
    padding: 5%;

    img{
      width: 20%;
    }
  }

  @media (max-width: 700px){
    font-size: 0.6rem;
  }
`;