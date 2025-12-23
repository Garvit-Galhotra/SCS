import React from "react";

const Nav = (props) => {
  return (
    <div className="flex items-center justify-between text-white px-8 py-4">
      <h1 className="text-4xl">{props.title}</h1>
      <div className="flex gap-2">
        {props.links.map((elem) => {
          return <h4 className="text-2xl">{elem}</h4>;
        })}
      </div>
    </div>
  );
};

export default Nav;
