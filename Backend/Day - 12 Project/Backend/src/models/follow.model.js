const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      // who is requesting follow
      type: String,
    },
    followee: {
      // who is providing the follow
      type: String,
    },
    status: {
      type: String,
      default: "pending",
      enum: {
        values: ["pending", "accepted", "rejected"],
        message: "status can only be pending, accepted or rejected",
      },
    },
  },
  { timestamps: true },
);

followSchema.index({ follower: 1, followee: 1 }, { unique: true });

const followModel = mongoose.model("follows", followSchema);

module.exports = followModel;
