// Reading number of lines in file (asynchronously)

var fs = require('fs')

function addLines() {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    var myString = fileContents.toString()
    console.log(myString.split('\n').length - 1)
  })
}

addLines()
