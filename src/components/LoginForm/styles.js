import styled from "styled-components";

export const Form = styled.form`
  width: 35%;
  height: 650px;
  padding: 1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  h1 {
    margin-bottom: 40px;
    font-family: "Krona One", sans-serif;
    color: #3f51b5;
    font-size: 1.5rem;
    letter-spacing: 8px;
  }

  label {
    font-family: "Krona One", sans-serif;
    color: #3f51b5;
  }

  input {
    width: 100%;
    height: 50px;
    border-radius: 20px;
    border: 1px solid #d1d5db;
    padding-left: 20px;
    font-family: "Montserrat", sans-serif;
    color: #333;
    font-weight: 700;
    font-size: 1rem;
    margin-top: 20px;
  }

  button {
    background-color: #3f51b5;
    color: #fff;
    border: none;
    border-radius: 20px;
    width: 40%;
    padding: 1rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #1976d2;
    }
  }
`;
