import Nav from "./nav.js";
import Hero from "./hero.js";

const container = document.querySelector(".container");
const root = ReactDOM.createRoot(container);

function App() {
  return React.createElement("div", { id: "app" }, [
    React.createElement(Nav),
    React.createElement(Hero),
  ]);
}

root.render(React.createElement(App));
