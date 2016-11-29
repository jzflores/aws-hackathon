'use strict';

var db = require('../lib/database').connection();
var Event = require('../models/event');

module.exports.handler = function(event, context, cb) {

  console.log('Request received:\n', event);
  console.log('Context received:\n', context);

  if (event.path === '/api/fia-webhook' && event.method === 'POST') {

    // db.query('SELECT * FROM events').then(function (events) {
    //   console.log(JSON.stringify(events));
    // });

  }
  else {
    context.fail(JSON.stringify({
      status: 422,
      errors: [],
      message: 'Route not found'
    }));
  }
};

