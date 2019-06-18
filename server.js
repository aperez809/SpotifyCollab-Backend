const express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

const app = express();

const MongoStore = require('connect-mongo')(session);

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string',
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

require('./services/session.service.server')(app);

require('./db/database')();
const userDao = require('./dao/user.dao.server');
const userService = require('./services/user.service.server');
userService(app);

const partyDao = require('./dao/party.dao.server');
const partyService = require('./services/party.service.server');
partyService(app);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");
    res.header("Access-Control-Allow-Origin",
        "https://song-request-client-angular.herokuapp.com");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
 });

app.listen(3001);