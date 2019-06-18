const userModel = require('../models/user.model.server');


createUser = (user) => {
    return userModel.create(user)
}

findUserById = (id) => {
    return userModel.findById(id); 
}

findAllUsers = () => {
    return userModel.find();
}

deleteUser = (id) => {
    return userModel.findByIdAndDelete(id);
}

updateUser = (id, user) => {
    return userModel.updateOne({_id: id}, {$set: user});
    
    /*return userModel.findByIdAndUpdate(
        id, 
        {
            'username': user.username,
            'password': user.password,
            'firstName': user.firstName,
            'lastName': user.lastName,
            'currentPartyId': user.currentPartyId,
            'userType': user.userType,
        });*/
}

module.exports = {
    createUser,
    findAllUsers,
    findUserById,
    deleteUser,
    updateUser
}