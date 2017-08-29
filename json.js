http = require('http');
url = require('url')


var server = http.createServer(function(request, response) {
  var urlParts = url.parse(request.url, true)
  if (request.method === 'GET' && urlParts.pathname === '/api/parsetime') {
    parts = {};
    date = new Date(urlParts.query['iso']);
    parts['hour'] = date.getHours();
    parts['minute'] = date.getMinutes();
    parts['second'] = date.getSeconds();
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(parts));
  } else if (request.method === 'GET' && urlParts.pathname === '/api/unixtime') {
    parts = {};
    date = new Date(urlParts.query['iso']);
    parts['unixtime'] = date.getTime();
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(parts));
  }

});

server.listen(process.argv[2]);
