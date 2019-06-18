const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {type: String, required:true},
    password: String,
    firstName: String,
    lastName: String,
    currentPartyId: Number,
    userType: {type: String, enum: ['DJ', 'LISTENER']}

}, {collection: 'Users'});

module.exports = userSchema;