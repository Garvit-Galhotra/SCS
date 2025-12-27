import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const [allUser, setAllUser] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newAllUsers = [...allUser];
    newAllUsers.push(username);

    setAllUser(newAllUsers);
    console.log(newAllUsers);
    setUsername("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your Name"
          required
          // onChange={(e) => {
          //   console.log(e.target.value);
          // }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          // value={"Garvit"}
          value={username}
        />
        <button>Submit</button>
      </form>

      {allUser.map((elem, idx) => {
        return <h1 key={idx}>{elem}</h1>;
      })}
    </div>
  );
};

export default App;
