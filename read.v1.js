var schemas = require('./registry');
var fs = require('fs');

fs.readFile('./shoe.example', function(err, buf) {
  if (err) { throw err; }

  var val = schemas.v1.shoe.fromBuffer(buf);
  console.log(val);
});
