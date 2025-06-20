import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Este componente verifica se há um token no localStorage.
// Se houver, ele renderiza o componente filho (a página protegida) através do <Outlet />.
// Se não houver, ele redireciona o utilizador para a página de login.
export function ProtectedRoute() {
  const token = localStorage.getItem("@estudamais:token");

  return token ? <Outlet /> : <Navigate to="/login" replace />;
}
