const { book } = require("../database/models");

const addBook = async (req, res) => {
  try {
    const { title, author, publisher, year, pageCount } = req.body;

    const newBook = await book.create({
      title,
      author,
      publisher,
      year,
      pageCount,
    });

    if (!newBook) {
      return res.status(400).json({
        status: "failed",
        message: "failed to create books",
      });
    }

    res.status(201).json({
      status: "succes",
      message: "Successfully created book",
    });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await book.findAll();

    if (!books) {
      return res.status(400).json({
        status: "failed",
        message: "failed to get books data",
      });
    }

    return res.json(books);
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = { addBook, getAllBooks };
