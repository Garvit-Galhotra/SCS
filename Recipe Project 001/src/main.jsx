import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import RecipeContext from "./context/RecipeContext.jsx";
createRoot(document.getElementById("root")).render(
  // Context made for recipe

  <RecipeContext>
    {/* BrowserRouter is used for Routing */}
    <BrowserRouter>
      <App />
      {/* Toast Container is used sending message */}
      <ToastContainer />
    </BrowserRouter>
  </RecipeContext>,
);
