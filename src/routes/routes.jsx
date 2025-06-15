import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import SignUp from "@pages/SignUp";
import Login from "@pages/Login";
import StudentArea from "@pages/StudentArea";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/studentArea" element={<StudentArea />} />
    </Routes>
  );
}

export default AppRoutes;
