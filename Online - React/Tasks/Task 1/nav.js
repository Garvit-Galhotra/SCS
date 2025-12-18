function Nav() {
  return React.createElement("nav", { id: "nav" }, [
    React.createElement("div", { id: "detail" }, [
      React.createElement("div", { id: "logo" }),
      React.createElement("h4", null, "About Me"),
      React.createElement("h4", null, "Portfolio"),
      React.createElement("h4", null, "Services"),
      React.createElement("h4", null, "Blog"),
    ]),
    React.createElement("button", { id: "button" }, "Book A Call"),
  ]);
}

export default Nav;
