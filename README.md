Introduction to Avro
====================
Supporting code for 'Introduction to Apache Avro' presentation in [#12 Athens API Meetup](http://www.meetup.com/API-Athens/events/229037324/).

#Structure

```
.
├── schemas
│   ├── brand.avsc
│   ├── color.avsc
│   └── shoe.avsc
├── registry.js
├── read.js
└── write.js
```

Repository consists of some schema definitions found in `./schemas` directory and are parsed using [avsc](https://www.npmjs.com/package/avsc) node module in `./registry.js`.

`write.js` & `read.js` are convinient scripts to demonstrate write/read binary files with the avro serialization.
