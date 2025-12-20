import React from "react";
import "../Card.css";

const Card3 = () => {
  return (
    <div id="card Card3">
      <h2>100+</h2>
      <h3>Pro Coaches</h3>
      <p>
        Certified professionals ready to boost your game from first serve to
        tournament level.
      </p>
      <div className="levels">
        <div className="beginner">
          <p>Beginner</p>
          <div className="drops">
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
          </div>
          <p>55</p>
        </div>
        <div className="intermediate">
          <p>Intermediate</p>
          <div className="drops">
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
          </div>
          <p>40</p>
        </div>
        <div className="Advance">
          <p>Intermediate</p>
          <div className="drops">
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
          </div>
          <p>35</p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
