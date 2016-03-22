var schemas = require('./registry');
var fs = require('fs');

var resolver = schemas.v2.shoe.createResolver(schemas.v1.shoe);

fs.readFile('./shoe.example', function(err, buf) {
  if (err) {
    throw err;
  }

  var val = schemas.v2.shoe.fromBuffer(buf, resolver);
  console.log(val);
});
