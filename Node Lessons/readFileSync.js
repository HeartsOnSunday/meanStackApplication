var fs = require('fs');

console.log("going to get a file");
var file = fs.readFileSync('readFileSync.js');
console.log("Got the file");

console.log("App continues...");