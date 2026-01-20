const express = require("express"); // requiring the server
const app = express(); // server instance created

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/home", (req, res) => {
  res.send("This is the home page");
});

app.listen(3000); // starts the server
console.log("Server started at port 3000");
