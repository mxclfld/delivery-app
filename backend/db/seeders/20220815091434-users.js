'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Alex',
          email: 'alex@example.com',
          phone: '+380986001551',
          address: "Odesa, Odesa Oblast'",
        },
        {
          name: 'Jane',
          email: 'jane@example.com',
          phone: '+380986001552',
          address: "Odesa, Odesa Oblast'",
        },
        {
          name: 'Clay',
          email: 'clay@example.com',
          phone: '+380986001554',
          address: "Odesa, Odesa Oblast'",
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  },
}
