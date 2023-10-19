"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Dealer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dealer.hasMany(models.Car, {
        foreignKey: {
          name: "dealerId",
          allowNull: false,
        },
      })

      Dealer.hasMany(models.User, {
        foreignKey: {
          name: "dealerId",
          allowNull: false,
        },
      })
    }
  }
  Dealer.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Dealer",
    }
  )
  return Dealer
}
