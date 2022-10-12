const mongoose = require("mongoose");

// connects to the db
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialMediaAPI";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
