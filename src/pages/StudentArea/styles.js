// Copie este código e cole no seu arquivo: src/pages/StudentArea/styles.js

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem clamp(1.5rem, 5vw, 4rem);
  background-color: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;

  h2 {
    color: #3f51b5;
    font-family: "Roboto", sans-serif;
    font-size: clamp(1.1rem, 1vw + 0.5rem, 1.4rem);
    font-weight: 500;
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const AdminLink = styled(Link)`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  color: #3f51b5;
  background-color: transparent;
  border: 2px solid #3f51b5;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e8eaf6;
    transform: translateY(-2px);
  }
`;

export const LogoutButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  color: white;
  background-color: #1976d2;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #1565c0;
    transform: translateY(-2px);
  }
`;

export const Div = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem clamp(1.5rem, 5vw, 4rem);
  gap: 2rem;

  h1 {
    font-family: "Krona One", sans-serif;
    color: #1976d2;
    flex-basis: 55%;
    font-size: clamp(2.2rem, 1.5vw + 1.5rem, 4rem);

    span {
      color: #3f51b5;
    }
  }

  img {
    flex-basis: 35%;
    max-width: 400px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;

    h1 {
      flex-basis: auto;
      margin-top: 1.5rem;
    }

    img {
      flex-basis: auto;
      width: 50%;
      max-width: 250px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(30px, 8vw, 192px);
  margin-bottom: 4rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;
