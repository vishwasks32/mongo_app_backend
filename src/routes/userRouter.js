const express = require('express');
const User = require('../models/userSchema');
const userController = require('../controllers/usersController');
const upload = require('../configs/imgConfig');

const userRouter = express.Router();

userRouter.get("/users", userController.getUsers);
userRouter.post("/users", upload.single("img"),userController.registerUser);

module.exports = userRouter;