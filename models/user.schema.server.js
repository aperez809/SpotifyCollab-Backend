const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {type: String, required:true},
    password: String,
    firstName: String,
    lastName: String,
    currentPartyId: Number,
    userType: {type: String, enum: ['DJ', 'LISTENER']},
    dob: String,
    profilePicturePath: String,
    spotifyUser: Boolean,
    spotifyUsername: String,
    spotifyUrl: String

}, {collection: 'Users'});

module.exports = userSchema;