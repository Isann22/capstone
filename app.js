const express = require("express");
const dotenv = require("dotenv");
const logger = require("./src/utils/logger");
const routes = require("./src/routes");

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});

app.use(routes);
