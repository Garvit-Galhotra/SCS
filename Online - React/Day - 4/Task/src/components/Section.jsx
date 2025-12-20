import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Section = () => {
  return (
    <div id="page2">
      <header>
        <h2 id="bubble">About Horizon</h2>
        <p>
          At Horizon, we don't just play tennis - we live it. Since 2021,
          <br /> our club has been a home for players of all levels, from eager
          <br />
          beginners to seasoned pros.
        </p>
      </header>
      <section>
        <Card />
        <Card2 />
        <Card3 />
      </section>
      <footer>
        <h3>A few more facts about us in numbers</h3>
        <div className="detailNum">
          <div className="one">
            <h2>12 000+</h2>
            <p>Hours of play annualy</p>
          </div>
          <div className="two">
            <h2>89%</h2>
            <p>Player Retention Rate</p>
          </div>
          <div className="three">
            <h2>1,200+</h2>
            <p>Active Members</p>
          </div>
          <div className="four">
            <h2>125+</h2>
            <p>Annual Tournaments</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Section;
