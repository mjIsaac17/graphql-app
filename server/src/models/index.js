const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd', 'userdb', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
