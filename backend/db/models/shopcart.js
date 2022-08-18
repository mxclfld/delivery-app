'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ShopCart extends Model {
    static associate() {}
  }
  ShopCart.init(
    {
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'shopcarts',
      modelName: 'ShopCart',
      timestamps: false,
    }
  )
  return ShopCart
}
