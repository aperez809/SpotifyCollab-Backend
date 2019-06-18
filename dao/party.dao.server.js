const partyModel = require('../models/party.model.server');
const userModel = require('../models/user.model.server');


createParty = (party) => {
    return partyModel.create(party)
}

findPartyById = (id) => {
    return partyModel.findById(id); 
}

findAllParties = () => {
    return partyModel.find();
}

deleteParty = (id) => {
    return partyModel.findByIdAndDelete(id);
}

updateParty = (id, party) => {
    return partyModel.updateOne({_id: id}, {$set: party});
}

addUserToParty = (userId, partyId) => {
    const userToAdd = userModel.findById(userId);
    return partyModel.updateOne({_id: partyId}, {$push: {attendees: userToAdd}});
}

module.exports = {
    createParty,
    findAllParties,
    findPartyById,
    deleteParty,
    updateParty,
    addUserToParty
}