import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 10%;

  @media (max-width: 1440px) {
    flex-direction: column-reverse;
    padding: 5% 10%;

    img {
      width: 50%;
    }
  }

  @media (max-width: 1440px) {
    &:nth-child(2) {
      flex-direction: column;

      img{
        width: 40%;
      }
    }
  }
`;

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

    @media (max-width: 1440px) {
      font-size: 1.8rem;
      text-align: center;
    }
  }

  p {
    font-family: "Montserrat", sans-serif;
    color: #333333;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 60px;

    @media (max-width: 1440px) {
      font-size: 1rem;
      line-height: 40px;
      text-align: center;
    }
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
    align-items: center;
    gap: 30px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    color: #333333;
  }

  @media (max-width: 1440px) {
    width: auto;

    ul {
    }

    ul li {
      font-size: 1rem;
    }
  }
`;