var schemas = require('./registry.v2');
var fs = require('fs');

fs.readFile('./shoe.example', function(err, buf) {
  if (err) {
    throw err;
  }
  console.log(buf.length);
  var val = schemas.shoe.v2.fromBuffer(buf);
  console.log(val);
});
