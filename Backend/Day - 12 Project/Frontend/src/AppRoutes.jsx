import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./featues/auth/pages/Login";
import Register from "./featues/auth/pages/Register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
