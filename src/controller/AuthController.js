const { where } = require("sequelize");
const { user } = require("../database/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const hashPassword = require("../utils/hash");

const dotenv = require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        status: "failed",
        message: "All inputs are required",
      });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await user.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    if (!newUser) {
      return res.status(400).json({
        status: "failed",
        message: "failed to create an account",
      });
    }

    res.status(201).json({
      status: "succes",
      message: "Successfully created an account",
      data: `registered account with email: ${email}`,
    });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "failed",
        message: "username and password are required",
      });
    }

    const userLogin = await user.findOne({
      where: { email },
    });

    if (!userLogin) {
      return res.status(404).json({
        status: "failed",
        message: "invalid email or password",
      });
    }

    const matchPassword = await bcrypt.compare(password, userLogin.password);

    if (!matchPassword) {
      return res.status(404).json({
        status: "failed",
        message: "invalid email or password",
      });
    }

    const payload = {
      id: userLogin.id,
      role: userLogin.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });

    return res.status(200).json({
      status: "succes",
      message: "Successfull Login",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
