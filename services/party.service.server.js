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
        partyDao.updateParty(req.params['partyId'], req.body)
            .then(status => {
                console.log(status);
                res.send(status);
            });
    }

    addUserToParty = (req, res) => {
        partyDao.addUserToParty(req.params['userId'], req.params['partyId'])
            .then(status => {
                console.log(status);
                res.send(status);
        })
    }

    removeUserFromParty = (req, res) => {
        partyDao.removeUserFromParty(req.params["userId"], req.params['partyId'])
            .then(status => {
                console.log(status);
                res.send(status);
        })
    }

    addSong = (req, res) => {
        partyDao.addSong(req.params["partyId"],
                                req.body["spotifyId"],
                                req.body["trackName"],
                                req.body["artistName"])
            .then(status => {
                console.log(status);
                res.send(status);
        })
    }

    removeSong = (req, res) => {
        partyDao.removeSong(req.params["partyId"], req.params["spotifyId"])
            .then(status => {
                console.log(status);
                res.send(status);
        })
    }

    setPartyLeader = (req, res) => {
        partyDao.setPartyLeader(req.params["partyId"], req.params["userId"])
            .then(status => {
                console.log(status);
                res.send(status);
        })
    }

    app.get('/api/parties', findAllParties);
    app.get('/api/parties/:partyId', findPartyById);
    app.post('/api/parties', createParty);
    app.delete('/api/parties/:partyId', deleteParty);
    app.put('/api/parties/:partyId', updateParty);
    
    app.put('/api/parties/:partyId/addUser/:userId', addUserToParty);
    app.put('/api/parties/:partyId/removeUser/:userId', removeUserFromParty);
    
    app.put('/api/parties/:partyId/addSong', addSong);
    app.put('/api/parties/:partyId/removeSong/:spotifyId', removeSong);
    
    app.put('/api/parties/:partyId/setDJ/:userId', setPartyLeader);
    
}