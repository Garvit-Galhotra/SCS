const mongoose = require("mongoose");

const newUser = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: [true, "User Already exists"],
  },
  password: String,
});

const userModel = mongoose.model("Users", newUser);

module.exports = userModel;
