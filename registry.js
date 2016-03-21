var avro = require('avsc');
var options = { namespace: "com.shop" };

module.exports = {
  brand: avro.parse('./schemas/brand.avsc', options),
  color: avro.parse('./schemas/color.avsc', options),
  shoe: avro.parse('./schemas/shoe.avsc', options)
};
