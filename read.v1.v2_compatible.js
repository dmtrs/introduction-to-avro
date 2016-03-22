var schemas = require('./registry');
var fs = require('fs');

var resolver = schemas.v1.shoe.createResolver(schemas.v2.shoe);

fs.readFile('./shoe.example', function(err, buf) {
  if (err) {
    throw err;
  }

  var val = schemas.v1.shoe.fromBuffer(buf, resolver);
  console.log(val);
});
