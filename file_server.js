http = require('http');
fs = require('fs');

var server = http.createServer(function(req, res) {
  if (req) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    var body = fs.createReadStream(process.argv[3]);
    body.on('open', function() {
      body.pipe(res);
    });
  }
});

server.listen(process.argv[2]);
