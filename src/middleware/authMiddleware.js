const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const verifyToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Access denied. No token provided.",
    });
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(403).json({
      message: "Unauthorized. Invalid token.",
    });
  }
};

module.exports = { verifyToken };
