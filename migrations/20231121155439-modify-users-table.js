'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'name', Sequelize.TEXT);
    await queryInterface.addColumn('users', 'role', Sequelize.STRING);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "name")
    await queryInterface.removeColumn("users", "role")
  }
};
