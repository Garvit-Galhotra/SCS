import React, { useEffect, useState } from "react";
import axios, { all } from "axios";
import Card from "./components/Card";

const App = () => {
  const [allData, setAllData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setAllData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen bg-black text-white">
      {/* <button
        onClick={() => {
          getData();
        }}
        className="bg-[#333] px-6 py-2 m-5 rounded-2xl active:scale-95 cursor-pointer font-semibold text-2xl"
      >
        Get Data
      </button> */}

      <div className="flex flex-wrap gap-2 ml-30 py-25">
        {allData.map((elem, idx) => {
          return (
            <div key={idx}>
              <Card data={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
