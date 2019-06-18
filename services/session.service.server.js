module.exports = app => {
    setSession = (req, res) => {
        var name = req.params['name'];
        var value = req.params['value'];
        req.session[name] = value;
        res.send(req.session);
    }

    getSession = (req, res) => {
        var name = req.params['name'];
        var value = req.session[name];
        res.send(value);
    }

    getSessionAll = (req, res) => {
        res.send(req.session);
    }
    
    resetSession = (req, res) => {
        req.session.destroy();
        res.send(200);
    }

    app.get('/api/session/set/:name/:value', setSession);
    app.get('/api/session/get/:name', getSession);
    app.get('/api/session/get', getSessionAll);
    app.get('/api/session/reset', resetSession);
}