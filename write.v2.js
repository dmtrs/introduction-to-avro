var fs = require('fs');
var schemas = require('./registry');

var obj = {
  brand: { name: 'Nike' },
  color: { name: 'black', hex: '#000000' },
  size: { system: 'US', value: 10.0 }
};

fs.open('./shoe.example', 'w', function(err, fd) {
  if (err) { throw err; }

  var buf = schemas.v2.shoe.toBuffer(obj);

  fs.writeSync(fd, buf, 0, buf.length);
});

/**
fs.open('/tmp/shoe.json', 'w', function(err, fd) {
  if (err) { throw err; }
  
  var buf = new Buffer(JSON.stringify(obj));

  fs.writeSync(fd, buf, 0, buf.length);
});
**/
