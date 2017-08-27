var fs = require('fs')

module.exports = function (dir, ext, callback) {

  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }
    data = [];
    for (i=0; i < list.length; i++) {
      if (list[i].endsWith("." + ext)) {
        data.push(list[i]);
      }
    }
    callback(null, data)
  })
}
