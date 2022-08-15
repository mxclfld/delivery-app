'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders')
  },
}
