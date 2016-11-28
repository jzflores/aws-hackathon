'use strict';

module.exports.handler = function(event, context, cb) {

  console.log('Request received:\n', event);
  console.log('Context received:\n', context);

  if (event.path === '/api/fia-webhook' && event.method === 'POST') {
    console.log('Request Body: ' + event.body);
  }
  else {
    context.fail(JSON.stringify({
      status: 422,
      errors: [],
      message: 'Route not found'
    }));
  }

};

