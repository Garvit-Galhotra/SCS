function Stat({ value, label }) {
  return React.createElement("div", { className: "stat" }, [
    React.createElement("h2", null, value),
    React.createElement("p", null, label),
  ]);
}

function Hero() {
  return React.createElement("section", { id: "hero" }, [
    React.createElement("div", { id: "left" }, [
      React.createElement("div", { id: "topest" }, [
        React.createElement(Stat, {
          value: "+200",
          label: "Projects Completed",
        }),
        React.createElement(Stat, {
          value: "+50",
          label: "Startups Raised",
        }),
      ]),

      React.createElement("div", { id: "middle" }, [
        React.createElement("h1", null, "Hello"),
        React.createElement("p", null, "- It's D.Nova, a design wizard"),
      ]),

      React.createElement("p", { id: "p1" }, "Scroll down"),
    ]),

    React.createElement("div", { id: "right" }),
  ]);
}

export default Hero;
