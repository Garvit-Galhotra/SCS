const express = require("express");

const app = require("./src/app.js");

const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://garvit:4jf9iXGpjR1Hua55@cluster0.gdscqc7.mongodb.net/day-6",
    )
    .then(() => {
      console.log("connected to db");
    });
}

connectToDb();

app.listen(3000, () => {
  console.log("server started on port 3000");
});
