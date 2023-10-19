"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
        },
      })

      Car.belongsTo(models.Dealer, {
        foreignKey: {
          name: "dealerId",
        },
      })
    }
  }
  Car.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      category: {
        type: DataTypes.ENUM(["Small", "Medium", "Large"]),
        defaultValue: "Medium",
      },
      isAvailable: {
        type: DataTypes.ENUM(["Available", "Not Available"]),
        defaultValue: "Available",
      },
      userId: DataTypes.INTEGER,
      dealerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Car",
    }
  )
  return Car
}
