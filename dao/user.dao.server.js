const userModel = require('../models/user.model.server');


createUser = (user) => {
    return userModel.create(user)
}

findUserById = (id) => {
    return userModel.findById(id); 
}

findUserByCredentials = (un, pw) => {
    return userModel.findOne({username: un, password: pw});
}

findUserByUsername = (un) => {
    return userModel.findOne({username: un});
}

findAllUsers = () => {
    return userModel.find();
}

deleteUser = (id) => {
    return userModel.findByIdAndDelete(id);
}

updateUser = (id, user) => {
    return userModel.updateOne({_id: id}, {$set: user});
}

module.exports = {
    createUser,
    findAllUsers,
    findUserByCredentials,
    findUserByUsername,
    findUserById,
    deleteUser,
    updateUser
}