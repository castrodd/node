// Prints to the console all the data from an HTTP GET request

var http = require('http')

url = process.argv[2]

http.get(url, function callback(response) {
  var stream = '';
  response.setEncoding('utf8');
  response.on("data", function(data) {
    stream += data;
  })
  response.on("error", function() {
    console.log("Error!");
  })
  response.on("end", function() {
    console.log(stream.length);
    console.log(stream);
    return
  })
})
