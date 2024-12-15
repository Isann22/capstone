const bcrypt = require("bcrypt");

const saltRounds = 10;

const hashPassword = async (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);

  return bcrypt.hash(password, salt);
};

module.exports = hashPassword;
