const mongoose = require('mongoose');
const partySchema = mongoose.Schema({
    partyName: {type: String, required:true},
    usersCurrentlyIn: [],
    songVotes: {},
    partyLeader: User}, {collection: 'party'});

module.exports = partySchema;