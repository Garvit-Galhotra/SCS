import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
 
  return (
    <div className="flex items-center justify-between bg-purple-500 my-50">
      <h2 className="text-4xl px-5 py-3">Footer</h2>
      <button
        className="bg-cyan-500 py-2 px-5 m-6 rounded text-4xl active:scale-95 cursor-pointer"
        onClick={() => {
          navigate("/courses");
        }}
      >
        Explore Courses
      </button>
    </div>
  );
};

export default Footer;
