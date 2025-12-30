import React from "react";
import axios from "axios";

const App = () => {
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response);
  };

  return (
    <div>
      <button
        className="text-white bg-[#333] rounded mt-2 ml-2 px-5 py-1 cursor-pointer"
        onClick={() => {
          getData();
        }}
      >
        Get Data
      </button>
    </div>
  );
};

export default App;
