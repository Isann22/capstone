const validateBook = (req, res, next) => {
  const { title, author, publisher, year, pageCount } = req.body;

  if (!title || !author || !publisher || !year || !pageCount) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  if (
    typeof title !== "string" ||
    typeof author !== "string" ||
    typeof publisher !== "string"
  ) {
    return res.status(400).json({
      error: "Title, author, and publisher must be strings",
    });
  }
  if (typeof pageCount !== "number" || pageCount < 0) {
    return res.status(400).json({
      error: "Page count must be a positive number",
    });
  }

  next();
};

module.exports = { validateBook };
