const { registerUser, loginUser } = require("../controller/AuthController");
const { verifyToken } = require("../middleware/authMiddleware");
const { checkRole } = require("../middleware/roleMiddleware");
const router = require("express").Router();

router.post("/register", verifyToken, checkRole("admin"), registerUser);
router.post("/login", loginUser);

module.exports = router;
