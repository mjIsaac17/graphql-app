const { DataTypes } = require('sequelize');
const { database } = require('.');

const User = (sequelize = database, type = DataTypes) =>
  sequelize.define(
    'user',
    {
      id: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: type.STRING,
        allowNull: false
      },
      age: {
        type: type.INTEGER,
        allowNull: false
      },
      isSingle: {
        type: type.BOOLEAN,
        defaultValue: true
      }
    },
    { timestamps: false }
  );

module.exports = User;
