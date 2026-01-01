import React from "react";

const Card = (props) => {
  const clrR = Math.floor(Math.random() * 256);
  const clrG = Math.floor(Math.random() * 256);
  const clrB = Math.floor(Math.random() * 256);

  return (
    <div
      style={{ backgroundColor: `rgb(${clrR},${clrG}, ${clrB})` }}
      className="h-50 w-60 rounded text-2xl text-white text-center"
    >
      {props.data.name}
    </div>
  );
};

export default Card;
