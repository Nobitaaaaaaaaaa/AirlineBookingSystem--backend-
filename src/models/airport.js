'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, { 
        foreignKey: 'cityId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Airport.init({
    name:{ 
      type: DataTypes.STRING,
      allowedNull: false,
      unique: true
     },
    code: {type: DataTypes.STRING,
      allowedNull: false,
      unique: true
    },
    address: {type: DataTypes.STRING,
      allowedNull: true
    },
    city: {type: DataTypes.STRING,
      allowedNull: false
    },
    cityId: {type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};