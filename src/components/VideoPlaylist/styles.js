import styled from "styled-components";

export const Img = styled.img`
  width: 40%;
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 63px;

  a {
    text-decoration: none;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Card = styled.div`
  background-color: #3f51b5;
  width: clamp(250px, 30vw, 600px);
  padding: 4rem;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: #fff;
  font-family: "Krona One", sans-serif;
  font-size: 1.2rem;

  .icone {
    font-size: clamp(2rem, 5vw, 3rem);
  }

  @media (max-width: 1390px) {
    padding: 2rem;
    gap: 20px;
    

    .icone {
      font-size: 2rem;
    }
  }

  @media (max-width: 1100px){
    width: auto;
    font-size: 0.8rem;
  }
`;

