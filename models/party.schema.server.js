const mongoose = require('mongoose');
const User = require('./user.schema.server');

const partySchema = mongoose.Schema({
    partyName: {
        type: String,
        required:true
    },
    attendees: {
        type: [User], 
        required:true
    },
    passwordReq: {
        type: Boolean, 
        required:true
    },
    password: {
        type: String, 
        required:false},
    bannedUsers: {
        type: [User],
        required: true
    }, 
    partyLeader: {
        type: User, 
        required:true
    },
    queue: {
        type: [{
            trackName: String,
            artistName: String,
            spotifyId: String,
            upvotes: [User],
            downvotes: [User]}]
    }
},
{collection: 'Parties'});

module.exports = partySchema;