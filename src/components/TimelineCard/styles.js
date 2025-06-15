import styled from "styled-components";

export const Div = styled.div`
  background: linear-gradient(to bottom, #3f51b5 30%, #1976d2 97%);
  width: 320px;
  height: 420px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20%;

  a {
    margin-top: 50%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-self: center;
    padding: 1rem;
    background-color: #fbbf24;
    border-radius: 20px;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    color: #3f51b5;
    font-weight: 700;
  }
`;