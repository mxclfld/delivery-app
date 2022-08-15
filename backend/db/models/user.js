'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        unique: true,
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User',
      timestamps: false,
    }
  )
  return User
}
