const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.TEST ? process.env.TEST_DB_NAME : process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,

    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
);

module.exports = sequelize;
