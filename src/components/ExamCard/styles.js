import styled from "styled-components";

export const Div = styled.div`
  border: 5px solid #3f51b5;
  width: 320px;
  height: 420px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    width: 50%;
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

    &:hover {
      background-color: #fcd34d;
    }
  }
`;