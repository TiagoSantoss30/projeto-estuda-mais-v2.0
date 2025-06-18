import styled from "styled-components";

export const Header = styled.header`
  background-color: #fff;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px){
    justify-content: center;
  }
`;

export const HeaderTitle = styled.h1`
  margin-left: 3%;
  font-family: "Krona One", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 8px;
  color: #3f51b5;

  span {
    font-size: 2.5rem;
  }

  @media (max-width: 700px) {
    margin-left: 0;
    font-size: 1.2rem;

    span{
      font-size: 2rem;
    }
  }
`;

export const HeaderLinks = styled.nav`
  margin-right: 3%;
  display: flex;
  gap: 5rem;
  align-items: center;

  @media (max-width: 700px){
    display: none;
  }
`;

export const HeaderMedia = styled.div`
  display: flex;
  gap: 30px;
  font-size: 1.8rem;
  text-decoration: none;

  a {
    color: #1976d2;

    &:hover {
      color: #fbbf24;
    }
  }
`;
