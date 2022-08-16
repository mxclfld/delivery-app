'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
