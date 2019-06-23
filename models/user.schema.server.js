const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {type: String, required:true},
    password: String,
    firstName: String,
    lastName: String,
    currentPartyId: String,
    userType: {type: String, enum: ['DJ', 'LISTENER', 'ADMIN']},
    dob: String,
    profilePicturePath: String,
    spotifyUser: Boolean,
    spotifyUsername: String,
    spotifyUrl: String,
    recentTracks: {type: [{
        trackName: String,
        artistName: String,
        spotifyId: String}
        ]}

}, {collection: 'Users'});

module.exports = userSchema;