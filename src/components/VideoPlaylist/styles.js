import styled from "styled-components";

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
  width: 600px;
  padding: 4rem;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: #fff;
  font-family: "Krona One", sans-serif;
  font-size: 1.2rem;

  .icone{
    font-size: 2.5rem;
  }
`;

