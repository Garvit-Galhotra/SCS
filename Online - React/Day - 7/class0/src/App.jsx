import React from "react";
import Nav from "./components/Nav.jsx";
import Men from "./components/Men.jsx";
import Women from "./components/Women.jsx";

const App = () => {
  // const user1 = {
  //   name: "garvit",
  //   gender: "male",
  //   age: 19,
  // };
  // const user2 = {
  //   name: "Buttoski",
  //   gender: "male",
  //   age: 9,
  // };
  // const user3 = {
  //   name: "chunu",
  //   gender: "female",
  //   age: 20,
  // };
  // return (
  //   <div>
  //     {user1.gender == "male" ? (
  //       user1.age <= 10 ? (
  //         <Women />
  //       ) : (
  //         <Men />
  //       )
  //     ) : (
  //       <Women />
  //     )}
  //   </div>
  // );
  function btnClicked() {
    console.log("Button is clicked");
  }
  return (
    <div>
      <button
        onClick={btnClicked}
        className="active:scale-95 bg-emerald-500 text-4xl px-8 py-4 rounded font-bold m-5 cursor-pointer"
      >
        Click to Download
      </button>
    </div>
  );
};

export default App;
