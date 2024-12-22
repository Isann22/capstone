const {
  addBook,
  getAllBooks,
  deleteBook,
  editBook,
  getBookByID,
  getBookID,
} = require("../controller/BookController");
const { verifyToken } = require("../middleware/authMiddleware");
const { validateBook } = require("../middleware/bookMiddleware");
const { checkRole } = require("../middleware/roleMiddleware");

const router = require("express").Router();

router.get("/", verifyToken, getAllBooks);
router.get("/detail/:id", verifyToken, getBookID);

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
