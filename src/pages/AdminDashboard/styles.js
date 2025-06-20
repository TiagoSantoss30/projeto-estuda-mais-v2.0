import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;

  h1 {
    font-size: 2rem;
    color: #3f51b5;
  }

  p {
    color: #5a6474;
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto; /* Garante responsividade em telas pequenas */
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 12px 15px;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f8f9fa;
    color: #343a40;
    font-weight: 600;
  }

  tbody tr {
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: #f1f3f5;
    }
  }

  td {
    color: #495057;
  }
`;

export const RoleTag = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  color: white;
  background-color: ${(props) =>
    props.role === "admin" ? "#d9534f" : "#5bc0de"};
`;
