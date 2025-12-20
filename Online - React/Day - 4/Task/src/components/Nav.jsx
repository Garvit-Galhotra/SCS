import React from "react";

const Nav = () => {
  return (
    <div id="nav">
      <div className="logo">
        <h1>Horizon Courts</h1>
      </div>
      <div className="details">
        <h4 id="bubble">About Us</h4>
        <h4>Services</h4>
        <h4>Coaches</h4>
        <h4>Events</h4>
        <h4>Contacts</h4>
      </div>
      <button className="bookNow">
        Book Now<i className="ri-arrow-right-up-long-line"></i>
      </button>
    </div>
  );
};

export default Nav;
