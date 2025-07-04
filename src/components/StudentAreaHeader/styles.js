import styled from "styled-components";

export const Header = styled.header`
  background-color: #fff;
  color: #3f51b5;
  font-family: "Krona One", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  letter-spacing: 8px;

  h1 {
    font-size: 1.5rem;
    margin-left: 3%;
  }

  span {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.4rem;
    margin-right: 2%;
  }

  @media (max-width: 1100px){
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  @media (max-width: 700px){
    h1{
      font-size: 1.2rem;
    }

    h2{
      font-size: 1rem;
    }
  }
`;
