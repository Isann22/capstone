const { verifyToken } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.get("/admin", verifyToken, (req, res) => {
  res.send("admin");
});

module.exports = router;
