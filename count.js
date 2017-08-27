// Prints to the console all the data from mutliple HTTP GET request

var http = require('http')

var urls = [process.argv[2], process.argv[3], process.argv[4]]
var strings = {};

urls.forEach(function(url, index, array) {
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
      strings[index] = stream;
      if (Object.keys(strings).length == 3) {
        console.log(strings[0]);
        console.log(strings[1]);
        console.log(strings[2]);
      }
      return
    })
  })
})
