'use strict';
/** @type {import('sequelize-cli').Migration} */
const {ENUMS} = require('../utils/common');
const {BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY} = ENUMS.SEAT_TYPE;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      row: {
        type: Sequelize.INTEGER
      },
      col: {
        type: Sequelize.STRING
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Airports',
          key: 'code'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      type: {
        type: Sequelize.ENUM,
        values: [BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY],
        defaultValue: ECONOMY,
        allowNull: false
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};