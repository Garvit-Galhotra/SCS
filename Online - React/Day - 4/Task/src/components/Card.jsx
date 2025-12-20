import React from "react";

const Card = () => {
  return (
    <div id="card Card1">
      <img src="../assets/cardImage.png" alt="" />
      <p>
        Professional hard courts
        <span>with tournament-grade lighting & climate control - play in </span>
        perfect conditions, in any season.
      </p>
      <div className="low">
        <div className="bar"></div>
        <p>Game Mode</p>
      </div>
    </div>
  );
};

export default Card;
