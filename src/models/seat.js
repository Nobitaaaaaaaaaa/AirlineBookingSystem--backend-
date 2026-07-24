'use strict';
const {
  Model
} = require('sequelize');

const {ENUMS} = require('../utils/common');
const {BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY} = ENUMS.SEAT_TYPE;
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
        
      });
    }
  }
  Seat.init({
    row: {
      type: DataTypes.INTEGER,
      required: true
    },
    col: {
      type: DataTypes.STRING,
      required: true
    },
    airplaneId:{
       type: DataTypes.INTEGER
       ,required: true
    },
    type:{
      type:DataTypes.ENUM,
      values:[BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY],
      defaultValue:ECONOMY,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};