'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('shopcarts', {
      shopCartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('shopcarts')
  },
}
