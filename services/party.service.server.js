const partyDao = require('../dao/party.dao.server');

module.exports = app => {
    createParty = (req, res) => {
        partyDao.createParty(req.body)
            .then(parties => {
                res.send(parties);
            })
    }

    findPartyById = (req, res) => {
        partyDao.findPartyById(req.params['partyId'])
            .then(party => {
                res.send(party);
            });
    }

    findAllParties = (req, res) => {
        partyDao.findAllParties()
            .then(parties => {
                res.send(parties);
            });
    }

    deleteParty = (req, res) => {
        partyDao.deleteParty(req.params['partyId'])
            .then(status => res.send(status));
    }

    updateParty = (req, res) => {
        console.log(req.body);
        partyDao.updateParty(req.params['partyId'], req.body)
            .then(status => {
                console.log(status);
                res.send(status);
            });
    }

    app.get('/api/parties', findAllParties);
    app.get('/api/parties/:partyId', findPartyById);
    app.post('/api/parties', createParty);
    app.delete('/api/parties/:partyId', deleteParty);
    app.put('/api/parties/:partyId', updateParty);
}