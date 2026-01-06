import React, { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Footer = () => {
  const data = useContext(UserDataContext);

  return (
    <div className="absolute bottom-0 w-screen h-10 bg-blue-500">
      <h1 className="text-xl">This is {data}</h1>
    </div>
  );
};

export default Footer;
