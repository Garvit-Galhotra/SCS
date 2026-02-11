const express = require("express");
const postController = require("../controllers/post.controller");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

const postrouter = express.Router();

postrouter.post(
  "/",
  upload.single("image"),
  postController.createPostController,
);

module.exports = postrouter;
