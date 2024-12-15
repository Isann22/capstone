const { user } = require("../database/models");

const getAllUser = async (req, res) => {
  try {
    const users = await user.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllUser,
};
