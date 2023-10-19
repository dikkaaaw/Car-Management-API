"use strict"
const { Model } = require("sequelize")
const { Sequelize } = require(".")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Auth, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      })

      User.belongsTo(models.Dealer, {
        foreignKey: {
          name: "dealerId",
          allowNull: false,
        },
      })

      User.hasMany(models.Car, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      })
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      address: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM([
          "Superadmin",
          "Admin",
          "Member",
        ]),
        defaultValue: "Member",
      },
      dealerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  )
  return User
}
