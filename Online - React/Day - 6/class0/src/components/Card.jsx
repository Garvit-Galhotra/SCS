import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="bg-white rounded-2xl h-20 w-20 text-4xl flex items-center justify-center px-20 m-20">
      <h1 className="">{props.user}</h1>
    </div>
  );
};

export default Card;
