const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "User name already exist"],
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    unique: [true, "User name already exist"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  bio: String,
  profile_image: {
    type: String,
    default:
      "https://ik.imagekit.io/cx025vvzg/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
