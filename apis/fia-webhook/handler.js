'use strict';

var db = require('../lib/database').connection();
var Event = require('../models/event');

module.exports.handler = function(event, context, cb) {

  console.log('Request received:\n', event);
  console.log('Context received:\n', context);

  if (event.path === '/api/fia-webhook' && event.method === 'POST') {

    // Event
    // .build({statusinfo: 'Actual', sender: 'a@a3.com'})
    // .save()
    // .then(function(o){
    //   console.log("saved");
    //   console.log(o.dataValues);
    //   context.done(null, 'Success message');
    // }).error(function(error) {
    //   console.log("++++++++++");
    //   context.fail(JSON.stringify({
    //     status: 400,
    //     errors: [JSON.stringify(error)],
    //     message: 'Could not save'
    //   }));
    // });

    // Event.findAll({
    //   where: {
    //     sender: 'a@a3.com'
    //   }
    // }).then(function (o) {
    //   console.log(JSON.stringify(o));
    //   context.done(null, JSON.stringify(o))
    // })
    // .error(function(error) {
    //   console.log("++++++++++");
    //   context.fail(JSON.stringify({
    //     status: 400,
    //     errors: [JSON.stringify(error)],
    //     message: 'Could not save'
    //   }));
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

