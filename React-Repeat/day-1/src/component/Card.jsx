import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="app-card">
      <img src={props.img} alt="" />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
