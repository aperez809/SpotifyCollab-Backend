require('./database')();
var userDao = require('./models/user.dao.server');

userDao.find((err, users) => {
   console.log(users);
});
