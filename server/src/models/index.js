const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const { host, dialect, databaseName, username, password } = config.db;

const database = new Sequelize(databaseName, username, password, {
  host,
  dialect
});

const models = {
  user: database.import('./User.model')
};

module.exports = { models, database };
