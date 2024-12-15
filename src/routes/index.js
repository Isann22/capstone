const userRoute = require("./userRoute");

const routes = require("express").Router();

routes.use("/user", userRoute);

routes.get("/", (req, res) => {
  res.send("ini rute");
});

module.exports = routes;
