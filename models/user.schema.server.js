const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {type: String, required:true},
    password: String,
    firstName: String,
    lastName: String,
    currentPartyId: String,
    userType: {type: String, enum: ['DJ', 'LISTENER']},
    dob: String,
    profilePicturePath: String,
    spotifyUser: Boolean,
    spotifyUsername: String,
    spotifyUrl: String,
    recentTracks: {type: [{}]}

}, {collection: 'Users'});

module.exports = userSchema;