const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_uri);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});