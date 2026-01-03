import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-2 px-2 py-2 text-2xl">
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "White",
        })}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "White",
        })}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "White",
        })}
        to="/courses"
      >
        Courses
      </NavLink>
    </div>
  );
};

export default Navbar;
