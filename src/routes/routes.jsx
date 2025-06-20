/* eslint-disable no-unused-vars */
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Importe as suas páginas
import Home from "@pages/Home";
import About from "@pages/About";
import SignUp from "@pages/SignUp";
import Login from "@pages/Login";
import StudentArea from "@pages/StudentArea";
import ItaPage from "@pages/ItaPage";
import ImePage from "@pages/ImePage";
import AdminDashboard from "@pages/AdminDashboard"; // 1. IMPORTAÇÃO ADICIONADA

// Importe o componente de proteção de rotas
import { ProtectedRoute } from "../components/ProtectedRoute";

// As definições de animação continuam as mesmas
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  duration: 0.5,
};

// Função para envolver uma página com a animação
const AnimatedPage = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

export function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Rotas Públicas */}
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          }
        />
        <Route
          path="/signUp"
          element={
            <AnimatedPage>
              <SignUp />
            </AnimatedPage>
          }
        />
        <Route
          path="/login"
          element={
            <AnimatedPage>
              <Login />
            </AnimatedPage>
          }
        />

        {/* Rotas Protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/student-area"
            element={
              <AnimatedPage>
                <StudentArea />
              </AnimatedPage>
            }
          />
          <Route
            path="/itaPage"
            element={
              <AnimatedPage>
                <ItaPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/imePage"
            element={
              <AnimatedPage>
                <ImePage />
              </AnimatedPage>
            }
          />
          {/* 2. ROTA DE ADMIN ADICIONADA AQUI */}
          <Route
            path="/admin"
            element={
              <AnimatedPage>
                <AdminDashboard />
              </AnimatedPage>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
