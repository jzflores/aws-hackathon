var Sequelize = require('sequelize');
var db = require('../lib/database').connection();

var Spotit = db.define('spotit', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  event_id:{
	  type: Sequelize.STRING
  },
  lat: {
    type: Sequelize.STRING
  },
  lng: {
    type: Sequelize.STRING
  },
  comments: {
    type: Sequelize.STRING
  }
}, {tableName: 'spotit'});

module.exports = Spotit;