import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Allsection from "./components/Allsection";

const App = () => {
  return (
    <div className="app-div">
      <Navbar />
      <Allsection>
        {/* <h2>Halku re</h2>
        <h2>Padre</h2> */}
      </Allsection>
      <Footer />
    </div>
  );
};

export default App;


