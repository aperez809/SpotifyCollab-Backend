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
    const listOfAttendees = partyModel.find({_id: partyId}, {attendees: 1});
    listOfAttendees.push(userToAdd);
    return partyModel.findOneAndUpdate({_id: partyId}, {$set: {attendees: listOfAttendees}});
}

removeUserFromParty = (userId, partyId) => {
    return partyModel.update({_id: partyId}, {$pull: {attendees: {_id: userId}}});
}

module.exports = {
    createParty,
    findAllParties,
    findPartyById,
    deleteParty,
    updateParty,
    addUserToParty,
    removeUserFromParty
}