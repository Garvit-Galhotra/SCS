import React, { createContext, useState } from "react";

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeDataContext value={[theme, setTheme]}>
      {props.children}
    </ThemeDataContext>
  );
};

export default ThemeContext;
