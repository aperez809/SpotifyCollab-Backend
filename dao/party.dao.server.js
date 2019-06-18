const partyModel = require('../models/party.model.server');


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

module.exports = {
    createParty,
    findAllParties,
    findPartyById,
    deleteParty,
    updateParty
}