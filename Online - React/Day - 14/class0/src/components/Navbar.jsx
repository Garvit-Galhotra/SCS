import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-30 bg-red-500 flex items-center justify-between px-8">
      <h3 className="text-4xl">Navbar</h3>
      <div className="Elements flex gap-8 text-3xl">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
