var Sequelize = require('sequelize');
var db = require('../lib/database').connection();

var Event = db.define('event', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  identifier: {
    type: Sequelize.STRING
  },
  sender: {
    type: Sequelize.STRING
  },
  sent: {
    type: Sequelize.STRING
  },
  statusinfo: {
    type: Sequelize.STRING
  },
  msgtype: {
    type: Sequelize.STRING
  },
  sourceinfo: {
    type: Sequelize.STRING
  },
  scope: {
    type: Sequelize.STRING
  },
  restriction: {
    type: Sequelize.STRING
  },
  addresses: {
    type: Sequelize.STRING
  },
  codeinfo: {
    type: Sequelize.STRING
  },
  note: {
    type: Sequelize.STRING
  },
  reference: {
    type: Sequelize.STRING
  },
  incidents: {
    type: Sequelize.STRING
  },
  lang: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  },
  eventinfo: {
    type: Sequelize.STRING
  },
  responsetype: {
    type: Sequelize.STRING
  },
  urgency: {
    type: Sequelize.STRING
  },
  severity: {
    type: Sequelize.STRING
  },
  certainty: {
    type: Sequelize.STRING
  },
  audience: {
    type: Sequelize.STRING
  },
  eventcode: {
    type: Sequelize.STRING
  },
  effective: {
    type: Sequelize.STRING
  },
  onset: {
    type: Sequelize.STRING
  },
  expires: {
    type: Sequelize.STRING
  },
  sendername: {
    type: Sequelize.STRING
  },
  headline: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  instruction: {
    type: Sequelize.STRING
  },
  web: {
    type: Sequelize.STRING
  },
  contact: {
    type: Sequelize.STRING
  },
  parameters: {
    type: Sequelize.STRING
  },
  resources: {
    type: Sequelize.STRING
  },
  areas: {
    type: Sequelize.STRING
  }
});

module.exports = Event;