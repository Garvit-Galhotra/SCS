import React from "react";
import Card from "./component/Card";

const App = () => {
  return (
    <div className="main">
      <Card
        name="garvit"
        description="Wooooooooooooooooooooooo"
        img={
          "https://images.unsplash.com/photo-1774070057056-1d5f8fe04494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <Card
        name="gg"
        description="Woooooooooooooooooooo2.0"
        img={
          "https://images.unsplash.com/photo-1516247524857-8dc5f4786cb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </div>
  );
};

export default App;
