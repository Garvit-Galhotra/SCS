import { createContext, useState } from "react";

export const recipecontext = createContext([]);

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([]);

  console.log(data, "render from recipeContext.jsx");

  return (
    <recipecontext.Provider value={{ data, setData }}>
      <div>{children}</div>
    </recipecontext.Provider>
  );
};

export default RecipeContext;
