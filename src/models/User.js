const Sequelize = require('sequelize');
const sequelize = require('../utils/dbConnection');

const User = sequelize.define('user', {
  name: Sequelize.STRING,
});

module.exports = User;
