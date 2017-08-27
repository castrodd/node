// Filtering list of files in directory by extension

var fs = require('fs')

function find_files() {
  fs.readdir(process.argv[2], function callback(err, list) {
    for (i=0; i < list.length; i++) {
      if (list[i].endsWith("." + process.argv[3])) {
        console.log(list[i]);
      }
    }
  })
}

find_files()
