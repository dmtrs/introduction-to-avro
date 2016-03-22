var schemas = require('./registry.v2');
var fs = require('fs');

var resolver = schemas.shoe.v2.createResolver(schemas.shoe.v1);

fs.readFile('./shoe.example', function(err, buf) {
  if (err) {
    throw err;
  }
  console.log(buf.length);
  var val = schemas.shoe.v2.fromBuffer(buf, resolver);
  console.log(val);
});
