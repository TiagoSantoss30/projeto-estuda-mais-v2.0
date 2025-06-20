import styled from "styled-components";

export const Div = styled.div`
  background: linear-gradient(to bottom, #3f51b5 30%, #1976d2 97%);
  width: clamp(250px, 30vw, 320px);
  height: clamp(220px, 45vh, 420px);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  img {
    width: 80%;
  }

  a {
    padding: 0.8rem 1.5rem;
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    padding: 1rem;
    background-color: #fbbf24;
    border-radius: 20px;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    color: #3f51b5;
    font-weight: 700;
    transition: background-color 0.3s;

    &:hover {
      background-color: #fcd34d;
    }
  }
`;