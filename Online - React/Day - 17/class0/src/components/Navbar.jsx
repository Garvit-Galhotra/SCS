import React, { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Navbar = () => {
  const data = useContext(UserDataContext);
  console.log(data);

  return (
    <div className="bg-emerald-500 h-10">
      <h1 className="text-xl">This is {data}</h1>
     
    </div>
  );
};

export default Navbar;
