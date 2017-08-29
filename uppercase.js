http = require('http');
fs = require('fs');

var server = http.createServer(function(request, response) {
  if (request.method === 'POST') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString().toUpperCase();
      response.end(body);
    });
  }
});

server.listen(process.argv[2]);
