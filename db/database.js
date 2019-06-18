module.exports = function() {
    const mongoose = require('mongoose');
    const databaseName = "song-request";
    var connectionString = 'mongodb://localhost/';
    connectionString += databaseName;
    mongoose.connect(connectionString, { useNewUrlParser: true });
}