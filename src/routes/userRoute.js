const { createUser, getAllUser } = require("../controller/UserController");

const userRoute = require("express").Router();

userRoute.get("/", getAllUser);
module.exports = userRoute;
