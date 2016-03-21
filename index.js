var avro = require('avsc');
var type = avro.parse({
    name: 'Pet',
  type: 'record',
  fields: [
    {name: 'kind', type: {name: 'Kind', type: 'enum', symbols: ['CAT', 'DOG']}},
    {name: 'name', type: 'string'}
  ]
});
var buf = type.toBuffer({kind: 'CAT', name: 'Albert'}); // Encoded buffer. 
var val = type.fromBuffer(buf);
