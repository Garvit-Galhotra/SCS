const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

// Require routes

const authrouter = require("./routes/auth.routes");
const postrouter = require("./routes/post.routes");
const userrouter = require("./routes/user.routes");

// using Routes

app.use("/api/auth", authrouter);
app.use("/api/posts", postrouter);
app.use("/api/users", userrouter);

module.exports = app;
