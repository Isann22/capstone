"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          title: "Laskar Pelangi",
          author: "Andrea Hirata",
          publisher: "Bentang Pustaka",
          year: new Date("2005-01-01"),
          pageCount: 529,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ayat-Ayat Cinta",
          author: "Habiburrahman El Shirazy",
          publisher: "Republika",
          year: new Date("2004-01-01"),
          pageCount: 418,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dilan: Dia Adalah Dilanku Tahun 1990",
          author: "Pidi Baiq",
          publisher: "Pastel Books",
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
