import React from "react";

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
        <div id="Card1" className="Card">
          <div className="img"></div>
          <p>
            Professional hard courts
            <br />
            <span>
              with tournament-grade <br />
              lighting & climate control - <br />
              play in
            </span>
            perfect conditions, <br />
            in any season.
          </p>
          <div className="low">
            <div className="bar"></div>
            <p>Game Mode</p>
          </div>
        </div>
        <div id="Card2" className="Card">
          <h2>Private & Group Lessons</h2>
        </div>
        <div id="Card3" className="Card">
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
