// require express module
var express = require('express');
var app = express();

// on get request
app.get('/', function(request, response) {
  // extract the ip, language, and operating system software from headers and save to result object
  var object = {};
  object.ipaddress = request.get('x-forwarded-for');
  object.language = request.get('accept-language').split(',')[0];
  var software = request.get('user-agent').split('(')[1];
  object.software = software.split(')')[0];
  // print output to browser
  response.end(JSON.stringify(object));
});

// listen to port for connections
app.listen(process.env.PORT || 8080, function (request, response) {
  console.log('Listening for connections...');
});
