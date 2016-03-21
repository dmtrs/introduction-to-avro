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

fs.readFile('/tmp/out', function(err, buf) {
  if (err) {
    throw err;
  }
  var val = type.fromBuffer(buf);
  console.log(val.kind);
});
