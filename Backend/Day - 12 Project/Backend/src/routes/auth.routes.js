const express = require("express");
const authController = require("../controllers/auth.controller");
const identifyUser = require("../middleware/auth.middleware");

const authrouter = express.Router();

authrouter.post("/register", authController.registerController);

authrouter.post("/login", authController.loginController);

authrouter.get("/get-me", identifyUser, authController.getMeController);

module.exports = authrouter;
