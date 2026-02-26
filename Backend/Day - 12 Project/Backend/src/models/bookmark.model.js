// user -> username, post -> id

const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      ref: "users",
      required: [true, "Username is required to save the post"],
    },

    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: [true, "Post is required to save the post"],
    },
  },
  { timestamps: true },
);

const bookMarkModel = mongoose.model("bookmark", bookmarkSchema);

module.exports = bookMarkModel;
