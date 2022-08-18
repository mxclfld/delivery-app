'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Product, ShopCart }) {
      this.belongsTo(User, { foreignKey: 'userId' })
      this.belongsToMany(Product, {
        through: ShopCart,
        as: 'products',
      })
    }
  }
  Order.init(
    {},
    {
      sequelize,
      tableName: 'orders',
      modelName: 'Order',
      timestamps: false,
    }
  )
  return Order
}
