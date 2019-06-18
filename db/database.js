module.exports = function() {
    const mongoose = require('mongoose');
    const databaseName = "song-request";
    var connectionString = 'mongodb://heroku_8h6pjv01:q0qecegpcqus48ar9nouqchjrs@ds129651.mlab.com:29651/heroku_8h6pjv01/';
    connectionString += databaseName;
    mongoose.connect(connectionString, { useNewUrlParser: true });
}