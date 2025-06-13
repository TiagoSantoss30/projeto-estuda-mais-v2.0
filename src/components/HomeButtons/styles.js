import styled from "styled-components"

export const Buttons = styled.a`
  margin-top: 5%;
  display: flex;
  gap: 52px;
  text-align: center;

  a {
    background-color: #3f51b5;
    width: 30%;
    padding: 1rem;
    border-radius: 20px;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-weight: bolder;
    cursor: pointer;

    &:hover {
      background-color: #fbbf24;
      color: #333;
    }
  }

  .login {
    background-color: #1976d2;
  }
`;