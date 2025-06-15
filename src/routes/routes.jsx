import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import SignUp from "@pages/SignUp";
import Login from "@pages/Login";
import StudentArea from "@pages/StudentArea";
import ItaPage from "@pages/ItaPage";
import ImePage from "@pages/ImePage";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/studentArea" element={<StudentArea />} />
      <Route path="/itaPage" element={<ItaPage />} />
      <Route path="/imePage" element={<ImePage />} />
    </Routes>
  );
}

export default AppRoutes;
