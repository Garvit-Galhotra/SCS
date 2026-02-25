import React from "react";

const Following = (user) => {
  return (
    <div className="user">
      <img src={user.profile_image} alt="" />
      <p>username</p>
    </div>
  );
};

export default Following;
