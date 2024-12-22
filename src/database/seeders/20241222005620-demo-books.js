"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          title: "contoh",
          author: "conoth",
          publisher: "contoh",
          year: new Date("2005-01-01"),
          pageCount: 529,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "contoh 2",
          author: "contoh2",
          publisher: "contoh2",
          year: new Date("2004-01-01"),
          pageCount: 418,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "contoh3",
          author: "contoh3",
          publisher: "contoh3",
          year: new Date("2014-04-01"),
          pageCount: 332,
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
