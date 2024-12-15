const authRoute = require("./authRoutes");

const routes = require("express").Router();

routes.use("/auth", authRoute);

module.exports = routes;
