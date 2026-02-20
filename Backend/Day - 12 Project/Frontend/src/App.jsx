import { RouterProvider } from "react-router";
import AppRoutes from "./AppRoutes";
import "./style.scss";

import { AuthProvider } from "./featues/auth/auth.context";

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
