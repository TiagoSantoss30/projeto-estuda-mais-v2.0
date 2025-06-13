import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 10%;
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 55%;

  h2 {
    font-family: "Krona One", sans-serif;
    text-align: center;
    color: #3f51b5;
    font-size: 2.5rem;
  }

  p {
    font-family: "Montserrat", sans-serif;
    color: #333333;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 60px;
  }

  strong {
    color: #3f51b5;
  }

  ul {
    padding: 8% 15%;
    display: flex;
    flex-direction: column;
    gap: 80px;
  }

  ul li {
    list-style: none;
    display: flex;
    gap: 30px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;