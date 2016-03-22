var avro = require('avsc');
var options = { namespace: "com.shop" };

// Version 1
var brand  = avro.parse('./schemas/brand.avsc', options);
var color  = avro.parse('./schemas/color.avsc', options);
var shoe_1 = avro.parse('./schemas/shoe.v1.avsc', options);

// Version 2
var system = avro.parse('./schemas/size.system.avsc', options);
var size   = avro.parse('./schemas/size.avsc', options);
var shoe_2 = avro.parse('./schemas/shoe.v2.avsc', options);

module.exports = {
  v1: { shoe: shoe_1 },
  v2: { shoe: shoe_2 }
};
