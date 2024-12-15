const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const routes = require("express").Router();

routes.use("/auth", authRoutes);
routes.use("/user", userRoutes);
module.exports = routes;
