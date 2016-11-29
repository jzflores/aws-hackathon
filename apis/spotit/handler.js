'use strict';

var db = require('../lib/database').connection();
var Spotit = require('../models/spoit');

module.exports.handler = function(event, context, cb) {

  console.log('Request received:\n', event);
  console.log('Context received:\n', context);

  if (event.path === '/api/spotit' && event.method === 'POST') {
	  console.log("tEst");
	  Spotit
       .build({lat:"43.74" , lng:"-93.05",comments:"Flooding here",event_id:"1"})
       .save()
       .then(function(o){
         console.log("saved");
         console.log(o.dataValues);
         context.done(null, 'Success message');
       }).error(function(error) {
         console.log("++++++++++");
         context.fail(JSON.stringify({
           status: 400,
     		errors: [JSON.stringify(error)],
           message: 'Could not save'
         }));
       });
    // db.query('SELECT * FROM events').then(function (events) {
    //   console.log(JSON.stringify(events));
    // });

  } else if (event.path === '/api/spotit' && event.method === 'GET') {
  	db.query('SELECT * FROM spotit').then(function (spotits) {
       console.log(JSON.stringify(spotits[0][0]));
	   cb(null,spotits[0][0]);
    });
  }
  else {
	  console.log("error ");
    context.fail(JSON.stringify({
      status: 422,
      errors: [],
      message: 'Route not found'
    }));
  }
};

