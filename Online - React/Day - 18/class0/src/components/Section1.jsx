import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Section1 = () => {
  const data = useContext(ThemeDataContext);
  return (
    <div>
      <h2>Section1</h2>
      {data}
    </div>
  );
};

export default Section1;
