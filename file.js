// Reading number of lines in file (synchronously)

var fs = require('fs')

var fd = fs.readFileSync(process.argv[2])

var fa = fd.toString()

fa = fa.split('\n')

console.log(fa.length - 1)
