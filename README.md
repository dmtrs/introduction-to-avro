Introduction to Avro
====================
Supporting code for ['Introduction to Apache Avro'](https://speakerdeck.com/dmtrs/introduction-to-apache-avro) presentation in [#12 Athens API Meetup](http://www.meetup.com/API-Athens/events/229037324/).

Code example consists of some schema definitions found in `./schemas` directory and are parsed using [avsc](https://www.npmjs.com/package/avsc) node module.

##Requirements

You will need Node Js (4.3.1) to run the sample codes and to install the dependencies using npm:

```
$ npm install
```

##Structure explanation

For our example we have the following scheman definitions that exist in our `schemas` directory:
```
./schemas
├── brand.avsc
├── color.avsc
├── shoe.v1.avsc
├── shoe.v2.avsc
├── size.avsc
└── size.system.avsc
```

We have created a schema registry `registry.js` that parse all the schemas and exposes the 2 version v1 & v2 of the `Shoe` schema.

A handfull of commands that read/write binary serialized to `./shoe.example` file for our demonstration. Different variations like `read.v2.v1\_compatible.js` of this read/write operations will be explained later.

##Start here Version 1

We use `read.v1.js` and `write.v1.js` to serialize an object to binary and then deserialize it.

```
$ node write.v1.js
$ cat ./shoe.example

black#00000Nike%                                                                                     
$ node read.v1.js
Shoe {
  color: Color { name: 'black', hex: '#000000' },
  brand: Brand { name: 'Nike' } }

```

###Moving to Version 2

Now since we want to deserialize a v1 shoe instance with shoe v2 schema definition. We go like:
```
$ node write.v1.js
$ cat ./shoe.example

black#00000Nike%                                                                                     
$ node read.v2.v1_compatible.js                                                       [±master ●●]
Shoe {
  color: Color { name: 'black', hex: '#000000' },
  brand: Brand { name: 'Nike' },
  size: Size { system: 'NAN', value: 0 } }
```

Or vice versa serialize a v2 shoe and deserialize with v1, like:

```
$ node write.v2.js
$ cat ./shoe.example

black#00000Nike A%                                                                                   
$ node read.v1.v2_compatible.js
Shoe {
  color: Color { name: 'black', hex: '#000000' },
  brand: Brand { name: 'Nike' } }
```

Of course v2 shoe works as expected.

```
$ node write.v2.js
$ cat ./shoe.example

black#00000Nike A%                                                                                   
$ node read.v2.js
Shoe {
  color: Color { name: 'black', hex: '#000000' },
  brand: Brand { name: 'Nike' },
  size: Size { system: 'US', value: 10 } }
```

##Resources
- [Data Serialization and Evolution](http://docs.confluent.io/2.0.0/avro.html)
- [Apache Avro™ 1.8.0 Specification](http://avro.apache.org/docs/1.8.0/spec.html)
- [dmtrs/introduction-to-avro](https://github.com/dmtrs/introduction-to-avro)
- [Benchmark comparing serialization libraries on the JVM](https://github.com/eishay/jvm-serializers/wiki)
- [Schema resolution rules](http://avro.apache.org/docs/1.7.7/spec.html#Schema+Resolution)

