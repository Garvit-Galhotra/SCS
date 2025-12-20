import React from "react";

const Hero = () => {
  return (
    <div id="hero">
      <div className="mainContent">
        <h2>
          Unleash Your Inner Champion Today.
          <br /> All In One Place.
        </h2>
        <p>
          Join the ultimate tennis experience - where passion meets performance,
          <br />
          and every swing brings you closer to victory.
        </p>
        <button>Start your own journey</button>
      </div>
      <div className="left">
        <p>
          Train with real Professional.
          <br />
          Get the real results.
        </p>
        <div className="imageDiv">
          <img id="img1" src="/src/assets/image1.png" alt="" />
          <img id="img2" src="/src/assets/image2.png" alt="" />
          <img id="img3" src="/src/assets/image3.png" alt="" />
        </div>
      </div>
      <div className="right">
        <p>
          Instagram<i className="ri-arrow-right-up-long-line"></i>
        </p>
        <p>
          Facebook<i className="ri-arrow-right-up-long-line"></i>
        </p>
        <p>
          Tik Tok<i className="ri-arrow-right-up-long-line"></i>
        </p>
      </div>
    </div>
  );
};

export default Hero;
