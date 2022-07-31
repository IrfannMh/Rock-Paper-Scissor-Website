'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Biodata extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
        },
      });
    }
  };
  Biodata.init({
    userId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Biodata',
  });
  return Biodata;
};