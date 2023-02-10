'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Event, StageEvent}) {
      // events
      StageEvent.belongsToMany(Event, {
        foreignKey:"stage_id",
        as: "events",
        through:StageEvent
      })
    }
  }
  stage.init({
    stage_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'stages',
  });
  return stage;
};