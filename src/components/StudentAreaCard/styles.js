import styled from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Div = styled.div`
  background: linear-gradient(to bottom, #3f51b5 30%, #1976d2 97%);
  width: 380px;
  height: 480px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20%;
  

  img {
    display: flex;
    align-self: center;
  }

  p {
    margin-left: 15%;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    color: #fff;
    width: 65%;
  }
`;