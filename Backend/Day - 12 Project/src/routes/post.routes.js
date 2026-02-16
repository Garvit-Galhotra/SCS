const express = require("express");
const postController = require("../controllers/post.controller");
const multer = require("multer");
const identifyUser = require("../middleware/auth.middleware");

const upload = multer({ storage: multer.memoryStorage() });

const postrouter = express.Router();

postrouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postController.createPostController,
);

/**
 * GET /api/posts
 */

postrouter.get("/", identifyUser, postController.getPostController);

/**
 * - GET /api/posts/details/postid
 * - return an detail about specific post with the id. also check whether the post belongs to the user that the request has come from
 */

postrouter.get(
  "/details/:postId",
  identifyUser,
  postController.getPostDetailController,
);

module.exports = postrouter;
