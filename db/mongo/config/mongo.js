require('dotenv').config();

var mongoose = require('mongoose');

const dbPromise = () => new Promise((resolve, reject) => {
  mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

  var db = mongoose.connection;

  db.on('error', function () {
    console.log('Mongo Connection Failed!');
    reject();
  });

  db.once('open', function () {
    console.log('Mongo Connected!');
    resolve();
  });
});

module.exports = dbPromise;