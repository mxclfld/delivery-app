'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Catalogue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }
  Catalogue.init(
    {
      shop: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'catalogues',
      modelName: 'Catalogue',
    }
  )
  return Catalogue
}
