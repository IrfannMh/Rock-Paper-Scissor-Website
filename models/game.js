'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      this.belongsToMany(models.User, { 
        through: 'HistoryGames', 
        foreignKey: 'gameId' ,
      });
    }
  };
  Game.init({
    userChoose: DataTypes.STRING,
    compChoose: DataTypes.STRING,
    result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};