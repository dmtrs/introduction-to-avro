var avro = require('avsc');
var fs = require('fs');

var type = avro.parse({
  name: 'Pet',
  type: 'record',
  fields: [
    {name: 'kind', type: {name: 'Kind', type: 'enum', symbols: ['CAT', 'DOG']}},
    {name: 'name', type: 'string'}
  ]
});

fs.open('/tmp/out', 'w', function(err, fd) {
  if (err) {
    throw err;
  }
  var buf = type.toBuffer({kind: 'CAT', name: 'Albert'}); // Encoded buffer. 
  fs.write(fd, buf, 0, buf.length, function(err, writte, buffer) {
    console.log(buf.length);

    fs.close(fd);
  });
});
//var val = type.fromBuffer(buf);
