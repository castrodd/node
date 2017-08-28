net = require('net')

var server = net.createServer(function (socket) {
  // Create custom date formatter
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = (date.getMonth()+1) < 10 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
  var day = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString();
  var hour = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours().toString();
  var minute = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();

  var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n';

  // Write date and close socket
  socket.end(time);
})

server.listen(Number(process.argv[2]))
