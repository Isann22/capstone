"use strict";
const hashPassword = require("../../utils/hash");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const password = "admin123";
    const hashedPassword = await hashPassword(password);
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "admin",
          email: "admin@gmail.com",
          password: hashedPassword,
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
