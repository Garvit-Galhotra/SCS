const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const likeModel = require("../models/likes.model");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "cohort-2-insta-clone-posts",
  });

  const post = postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post: {
      caption: post.caption,
      imgUrl: post.imgUrl,
      user: post.user,
    },
  });
}

async function getPostController(req, res) {
  const userId = req.user.id;

  const posts = await postModel.find({ user: userId });
  res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
}

async function getPostDetailController(req, res) {
  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "post not found",
    });
  }

  const isValidUser = post.user.toString() === userId;
  if (!isValidUser) {
    return res.status(403).json({
      message: "forbidden content",
    });
  }

  res.status(200).json({
    message: "Post fetched successfully",
    post,
  });
}

async function likePostController(req, res) {
  const username = req.user.username;
  const postId = req.params.postid;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "post not found",
    });
  }

  const like = await likeModel.create({
    post: postId,
    user: username,
  });

  res.status(201).json({
    message: "Liked the post successfully",
    like,
  });
}

async function unLikePostController(req, res) {
  const username = req.user.username;
  const postId = req.params.postid;

  const isLiked = await postModel.find({
    post: postId,
    user: username,
  });

  if (!isLiked) {
    return res.status(400).json({
      message: "Like the post first",
    });
  }

  await likeModel.findOneAndDelete({ id: isLiked });

  res.status(200).json({
    message: "Post disLiked successfully",
  });
}

async function getFeedController(req, res) {
  const user = req.user;

  const post = await Promise.all(
    (await postModel.find().populate("user").lean()).map(async (post) => {
      const isLiked = await likeModel.findOne({
        user: user.username,
        post: post._id,
      });

      post.isLiked = Boolean(isLiked);

      return post;
    }),
  );

  res.status(200).json({
    message: "Post Fetched Successfully",
    post,
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailController,
  likePostController,
  unLikePostController,
  getFeedController,
};
