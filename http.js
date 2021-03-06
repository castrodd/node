// Prints to the console data from an HTTP GET request

var http = require('http')

url = process.argv[2]

http.get(url, function callback(response) {
  response.setEncoding('utf8');
  response.on("data", function(data) {
    console.log(data);
  })
  response.on("error", function() {
    console.log("Error!");
  })
})
