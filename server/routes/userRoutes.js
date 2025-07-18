const express = require("express");
const userAuth = require("../middleware/userAuth");
const { getUserData } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/getUserData", userAuth, getUserData);

module.exports = userRouter;
