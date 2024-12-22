const { book } = require("../database/models");
const { where } = require("sequelize");

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

const getBookID = async (req, res) => {
  const { id } = req.params;
  try {
    const books = await book.findByPk(id);
    if (!book) {
      return res
        .status(404)
        .json({ status: "failed", message: `Book with ID ${id} not found` });
    }
    return res.json(books);
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

const deleteBook = async (req, res) => {
  try {
    let id = req.params.id;

    if (!id) {
      return res.status(404).json({
        status: "failed",
        message: "invalid or missing ID parameter",
      });
    }

    const delBook = await book.destroy({
      where: { id },
    });

    if (!delBook) {
      return res.status(400).json({
        status: "failed",
        message: "Failed to delete book. Book not found.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully deleted book",
    });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

const editBook = async (req, res) => {
  try {
    let id = req.params.id;
    const { title, author, publisher, year, pageCount } = req.body;

    if (!id) {
      return res.status(404).json({
        status: "failed",
        message: "invalid or missing ID parameter",
      });
    }

    const edBook = await book.update(
      { title, author, publisher, year, pageCount },
      {
        where: { id },
      }
    );

    if (!edBook) {
      return res.status(404).json({
        status: "failed",
        message: "Book not found ",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully updated book",
    });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = { addBook, getAllBooks, deleteBook, editBook, getBookID };
