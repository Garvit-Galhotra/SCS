import React from "react";

const Follower = (user) => {
  return (
    <div className="user">
      <img src={user.profile_image} alt="" />
      <p>username</p>
    </div>
  );
};

export default Follower;
