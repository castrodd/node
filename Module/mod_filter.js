// Filtering list of files in directory using a module

var mymodule = require('./modular.js')

mymodule(process.argv[2], process.argv[3], function (err, data) {
         if (err) {
           return console.log("Error!");
         }
         for (i=0; i < data.length; i++) {
           console.log(data[i]);
        }
});
