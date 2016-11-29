var Sequelize = require('sequelize');

var getDBConnection = function () {
  var connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    pool: {
      max: 3,
      min: 0,
      idle: 10000
    },
    define: {
      timestamps: false // true by default
    }
  });
  return connection
};

module.exports  = {
  connection: getDBConnection
};