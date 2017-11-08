const Sequelize = require('sequelize');
const sequelize = require('../utils/dbConnection');

const User = sequelize.define('user', {
  name: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = User;
