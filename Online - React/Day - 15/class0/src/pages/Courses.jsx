import React from "react";
import { Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <div className="flex item-center justify-center">
        <h1 className="text-9xl text-white underline">Courses Page</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default Courses;
