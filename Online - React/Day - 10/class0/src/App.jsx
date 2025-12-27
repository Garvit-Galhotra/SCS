import React, { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [userDesc, setUserDesc] = useState("");

  const [allUser, setAllUser] = useState([]);

  // setAllUser(oldUser);

  const submitHandler = (e) => {
    e.preventDefault();

    const oldUser = [...allUser];
    oldUser.push({ userName, imageUrl, userRole, userDesc });

    setAllUser(oldUser);

    setUserName("");
    setImageUrl("");
    setUserRole("");
    setUserDesc("");
  };

  const deleteCard = (idx) => {
    const copyUsers = [...allUser];
    copyUsers.splice(idx, 1);
    setAllUser(copyUsers);
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col gap-2">
      <form className="flex flex-wrap items-center justify-center">
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="border-2 px-2 py-5 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          className="border-2 px-2 py-5 rounded m-2 w-[45%]"
          type="text"
          placeholder="Image URL"
        />
        <input
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          className="border-2 px-2 py-5 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Designation"
        />
        <input
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value);
          }}
          className="border-2 px-2 py-5 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Description"
        />

        <button
          onClick={(e) => {
            submitHandler(e);
          }}
          className="bg-emerald-500 rounded px-8 py-2 text-center w-[91%] cursor-pointer"
        >
          Create User
        </button>
      </form>

      <div className="flex items-center ml-14 gap-10 flex-wrap">
        {allUser.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="bg-white w-[20%] text-black rounded-xl flex flex-col items-center"
            >
              <img
                className="object-center object-cover rounded-[100%] aspect-square w-[35%] mt-8"
                src={elem.imageUrl}
                alt=""
              />
              <h1 className="text-xl font-semibold my-2">{elem.userName}</h1>
              <p className="text-xl text-blue-500 my-2">{elem.userRole}</p>
              <p className="text-l text-center my-2 mx-2">{elem.userDesc}</p>
              <button
                onClick={() => {
                  deleteCard(idx);
                }}
                className="bg-red-500 px-3 py-1 rounded m-5 active:scale-95 cursor-pointer"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
