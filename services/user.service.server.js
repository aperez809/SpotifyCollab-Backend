const userDao = require('../dao/user.dao.server');

module.exports = app => {
    createUser = (req, res) => {
        userDao.createUser(req.body)
            .then(users => {
                res.send(users);
            })
    }

    findUserById = (req, res) => {
        userDao.findUserById(req.params['userId'])
            .then(user => {
                res.send(user);
            });
    }

    findUserByCredentials = (req, res) => {
        userDao.findUserByCredentials(req.body['username'], req.body['password'])
            .then(user => {
                res.send(user);
            });
    }

    findAllUsers = (req, res) => {
        userDao.findAllUsers()
            .then(users => {
                res.send(users);
            });
    }

    deleteUser = (req, res) => {
        userDao.deleteUser(req.params['userId'])
            .then(status => res.send(status));
    }

    updateUser = (req, res) => {
        console.log(req.body);
        userDao.updateUser(req.params['userId'], req.body)
            .then(status => {
                console.log(status);
                res.send(status);
            });
    }

    app.get('/api/users', findAllUsers);
    app.get('/api/users/:userId', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:userId', deleteUser);
    app.put('/api/users/:userId', updateUser);
}