'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Stage, StageEvent}) {
     //Stages
     Event.belongsToMany(Stage, {
      foreignKey:"event_id",
      as:"stages",
      through:StageEvent
     })
    }
  }
  event.init({
    event_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'events',
  });
  return event;
};