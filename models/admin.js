"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admin.belongsTo(models.Dealer, {
        foreignKey: {
          name: "dealerId",
        },
      })
    }
  }
  Admin.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        defaultValue: "Admin",
      },
      age: DataTypes.INTEGER,
      address: DataTypes.STRING,
      dealerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Admin",
    }
  )
  return Admin
}
