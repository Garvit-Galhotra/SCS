import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 text-l mb-10">
      <NavLink
        className={(e) => {
          return e.isActive ? "text-red-400" : "";
        }}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={(e) => {
          return e.isActive ? " text-red-400" : "";
        }}
        to="/recipes"
      >
        Recipies
      </NavLink>

      <NavLink
        className={(e) => {
          return e.isActive ? "text-red-400" : "";
        }}
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        className={(e) => (e.isActive ? "text-red-400" : "")}
        to="/create-recipe"
      >
        Creating Recipies
      </NavLink>
    </div>
  );
};

export default Navbar;
