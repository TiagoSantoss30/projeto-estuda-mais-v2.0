import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: #fff;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const HeaderTitle = styled.h1`
  margin-left: 3%;
  font-family: "Krona One", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 8px;
  color: #3f51b5;

  span {
    font-size: 2.5rem;
  }

  @media (max-width: 700px) {
    margin-left: 0;
    font-size: 1.2rem;

    span{
      font-size: 2rem;
    }
  }
`;

export const HeaderLinks = styled.nav`
  margin-right: 3%;
  display: flex;
  gap: 5rem;
  align-items: center;
`;

export const HeaderButton = styled(Link)`
  background-color: #3f51b5;
  width: clamp(120px, 30vw, 200px);
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  font-size: 1.2rem;
  border-radius: 20px;

  &:hover {
    background-color: #fbbf24;
    color: #333;
  }

  @media (max-width: 700px){
    width: 100%;
    margin-top: 20%;
  }
`;

export const HeaderMedia = styled.div`
  display: flex;
  gap: 30px;
  font-size: 1.8rem;
  text-decoration: none;

  a {
    color: #1976d2;

    &:hover {
      color: #fbbf24;
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
