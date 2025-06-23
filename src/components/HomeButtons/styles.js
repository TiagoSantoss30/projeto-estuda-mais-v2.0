import styled from "styled-components"

export const Buttons = styled.div`
  margin-top: 5%;
  display: flex;
  gap: 3.5rem;
  text-align: center;
  align-items: center;

  a {
    background-color: #3f51b5;
    width: 30%;
    max-width: 220px;
    padding: 1rem;
    border-radius: 20px;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    color: #fff;
    font-weight: bolder;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #fbbf24;
      color: #333;
    }
  }

  .about {
    background-color: #1976d2;
  }

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1.5rem;

    a {
      width: 50%;
      max-width: none;
      font-size: 0.9rem;
    }
  }
`;