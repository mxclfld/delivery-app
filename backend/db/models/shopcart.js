'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ShopCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, Order }) {
      this.belongsTo(Product, {
        foreignKey: 'productId',
        targetKey: 'id',
        as: 'Product',
      })
      this.belongsTo(Product, {
        foreignKey: 'orderId',
        targetKey: 'id',
        as: 'Order',
      })
    }
  }
  ShopCart.init(
    {
      shopCartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      orderId: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        references: {
          model: 'Order',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        references: {
          model: 'Product',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
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
