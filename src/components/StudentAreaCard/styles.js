import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkHref = styled(Link)`
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Div = styled.div`
  background: linear-gradient(to bottom, #3f51b5 30%, #1976d2 97%);
  width: clamp(250px, 30vw, 380px);
  height: clamp(350px, 45vh, 480px);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20%;

  img {
    max-width: ${(props) => props.imgWidth || "70%"};
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

  @media (max-width: 1400px) {
    width: auto;
    max-width: 380px;
  }

  @media (max-width: 1303px) {
    width: auto;
    max-width: 320px;
  }
`;