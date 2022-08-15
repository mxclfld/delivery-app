'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Tomato',
          price: 10,
          ShopId: 1,
        },
        {
          name: 'Apple',
          price: 5,
          ShopId: 1,
        },
        {
          name: 'Cabbage',
          price: 12,
          ShopId: 2,
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  },
}
