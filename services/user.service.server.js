const UserDao = require('');

module.exports = app => {
    createUser = (req, res) => {
        
    }

    findUserById = (req, res) => {
        
    }

    findAllUsers = (req, res) => {
        
    }

    deleteUser = (req, res) => {
        
    }

    updateUser = (req, res) => {
        
    }

    app.get("/api/users", findAllUsers);
    app.get("/api/users/:userId", findUserById);
    app.post("/api/users", createUser);
    app.delete("/api/users/:userId", deleteUser);
    app.put("/api/users/:userId", updateUser);
}