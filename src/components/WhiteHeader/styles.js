import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  background-color: #fff;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const HeaderLinks = styled.nav`
  margin-right: 3%;
  display: flex;
  gap: 5rem;
  align-items: center;
`;

export const HeaderButton = styled(Link)`
  background-color: #3f51b5;
  width: 200px;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  font-size: 1.2rem;
  border-radius: 8px;

  &:hover {
    background-color: #fbbf24;
    color: #333;
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
`;
