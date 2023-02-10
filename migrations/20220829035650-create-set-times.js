'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      set_time_id: {
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.SMALLINT
      },
      stage_id: {
        type: Sequelize.SMALLINT
      },
      start_time: {
        type: Sequelize.SMALLINT
      },
      end_time: {
        type: Sequelize.SMALLINT
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};