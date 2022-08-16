'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Shop, Order, ShopCart }) {
      this.belongsTo(Shop, { onDelete: 'CASCADE' })
      this.belongsToMany(Order, {
        through: ShopCart,
        as: 'products',
        // foreignKey: 'productId',
        // targetKey: 'id',
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
