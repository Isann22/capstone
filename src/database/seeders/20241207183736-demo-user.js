"use strict";
const hashPassword = require("../../utils/hash");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const password = "coba123";
    const hashedPassword = await hashPassword(password);
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "coba",
          email: "coba@example.com",
          password: hashedPassword,
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
