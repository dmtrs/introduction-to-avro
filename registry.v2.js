var avro = require('avsc');
var options = { namespace: "com.shop" };

module.exports = {
  brand: avro.parse('./schemas/brand.avsc', options),
  color: avro.parse('./schemas/color.avsc', options),
  system: avro.parse('./schemas/size.system.avsc', options),
  size: avro.parse('./schemas/size.avsc', options),
  shoe: {
    v2:  avro.parse('./schemas/shoe.v2.avsc', options),
    v1:  avro.parse('./schemas/shoe.v1.avsc', options)
  }
};
