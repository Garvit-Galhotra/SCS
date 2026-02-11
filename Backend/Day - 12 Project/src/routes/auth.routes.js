const express = require("express");
const authController = require("../controllers/auth.controller");


const authrouter = express.Router();


authrouter.post("/register", authController.registerController);

authrouter.post("/login", authController.loginController);



module.exports = authrouter;
