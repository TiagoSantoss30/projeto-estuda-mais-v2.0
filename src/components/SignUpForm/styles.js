import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 2.5rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  h1 {
    font-family: "Krona One", sans-serif;
    color: #3f51b5;
    text-align: center;
    font-size: 2rem;
    line-height: 1.4;
  }

  input {
    width: 100%;
    max-width: 350px;
    height: 50px;
    border-radius: 20px;
    border: 1px solid #d1d5db;
    padding-left: 20px;
    font-family: "Montserrat", sans-serif;
    color: #333;
    font-weight: 700;
    font-size: 1rem;
  }

  button {
    background-color: #3f51b5;
    color: #fff;
    border: none;
    border-radius: 20px;
    width: 100%;
    max-width: 320px;
    height: auto;
    padding: 1rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #1976d2;
    }
  }

  @media (max-width: 500px){
    h1{
      font-size: 1.2rem;
    }

    input{
      font-size: 0.7rem;
      text-align: center;
    }
  }
`;
