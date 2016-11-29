var Sequelize = require('sequelize');

var getDBConnection = function () {
  var connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
      maxIdleTime: 120000
    },
    define: {
      timestamps: false
    }
  });
  return connection
};

module.exports  = {
  connection: getDBConnection
};