const {
  addBook,
  getAllBooks,
  deleteBook,
  editBook,
} = require("../controller/BookController");
const { verifyToken } = require("../middleware/authMiddleware");
const { validateBook } = require("../middleware/bookMiddleware");
const { checkRole } = require("../middleware/roleMiddleware");

const router = require("express").Router();

router.get("/", verifyToken, getAllBooks);

router.post(
  "/admin/add",
  verifyToken,
  checkRole("admin"),
  validateBook,
  addBook
);

router.put("/admin/edit/:id", verifyToken, checkRole("admin"), editBook);

router.delete("/admin/delete/:id", verifyToken, checkRole("admin"), deleteBook);

module.exports = router;
