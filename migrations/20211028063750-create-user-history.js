'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('HistoryGames', {
	    userId: {
        type: Sequelize.DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
            model: {
              tableName: "Users",
            },
            key: "id",
		    },
        allowNull: false,
        primaryKey: true,
      },
	    gameId: {
        type: Sequelize.DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
            model: {
              tableName: "Games",
            },
            key: "id",
        },
        allowNull: false,
        primaryKey: true,
	    },
	    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
          }
      });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('HistoryGames');
  }
};
