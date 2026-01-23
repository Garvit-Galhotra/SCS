// Main work

// To start the server

const express = require("express");
const app = require("./src/app.js");
const notes = [];

app.get("/", (req, res) => {
  console.log("hello");
});

app.use(express.json());
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.send("node Created");
  console.log(notes);
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.send("note deleted successfully");
});

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;
  res.send("note updated successfully");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
