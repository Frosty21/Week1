var input = process.argv.slice(2);
var fs = require(toString(input));
var fileData = "Testing sync/asynchronous read file.\n";

function readFile(filePath) {

  fs.readFile('DATA', 'utf8', function(err, contents) {
    console.log(contents);
  });

}
readFile(fs);
// var fs = require('fs');

// fs.readFile('DATA', 'utf8', function(err, contents) {
//     console.log(contents);
// });

// console.log('after calling readFile');