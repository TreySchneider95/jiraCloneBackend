const { MongoClient } = require('mongodb');
const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        console.log('error')
        return callback(err);
      }

      dbConnection = db.db('ticket_data');
      console.log('Successfully connected to MongoDB.');
      print("then here")
      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
