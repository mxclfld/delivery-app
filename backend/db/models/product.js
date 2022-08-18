'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Shop, Order, ShopCart }) {
      this.belongsTo(Shop, { onDelete: 'CASCADE' })
      this.belongsToMany(Order, {
        through: ShopCart,
        as: 'products',
      })
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: 'products',
      modelName: 'Product',
      timestamps: false,
    }
  )
  return Product
}
