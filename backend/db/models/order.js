'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product, ShopCart }) {
      this.belongsTo(User, { foreignKey: 'userId' })
      this.belongsToMany(Product, {
        through: ShopCart,
        // foreignKey: 'orderId',
        // targetKey: 'id',
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
