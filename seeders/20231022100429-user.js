"use strict"

const { User } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        name: "Dika",
        age: 21,
        address: "Yogyakarta",
        role: "Superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wicaksono",
        age: 21,
        address: "Yogyakarta",
        role: "Superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])

    const users = await User.findAll()

    await queryInterface.bulkInsert(
      "Auths",
      [
        {
          email: "superadmin@mail.com",
          password:
            "$2a$10$Z0EetShRiIsqFXEzEiEHa.QYNED7GmNrbmg6DKs.98BUN4Y18CoEK",
          userId: users[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "superadmin2@mail.com",
          password:
            "$2a$10$Z0EetShRiIsqFXEzEiEHa.QYNED7GmNrbmg6DKs.98BUN4Y18CoEK",
          userId: users[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {})
    await queryInterface.bulkDelete("Auths", null, {})
  },
}
