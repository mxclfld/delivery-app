'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    static associate({ Product }) {
      this.hasMany(Product, { as: 'products', onDelete: 'CASCADE' })
    }
  }
  Shop.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'shops',
      modelName: 'Shop',
      timestamps: false,
    }
  )
  return Shop
}
