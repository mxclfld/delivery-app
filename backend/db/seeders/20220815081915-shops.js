'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'shops',
      [
        {
          name: 'METRO',
        },
        {
          name: 'Le Silpo',
        },
        {
          name: 'ATB',
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('shops', null, {})
  },
}
