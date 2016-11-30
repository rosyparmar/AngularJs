module.exports = function (app, model){

    app.post('/api/user/:uid/website',createWebsite);
    app.get('/api/user/:uid/website', findAllWebsitesForUser);
    app.get('/api/website/:websiteId', findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/website/:websiteId', deleteWebsite);

    model.websiteModel.setModel(model);

    function createWebsite(req, res) {
        var userId = req.params.uid;
        var newWebsite = req.body;
        model
            .websiteModel
            .createWebsiteForUser(userId, newWebsite)
            .then(
                function (newWebsite) {
                    res.send(newWebsite);
                },
                function (err) {
                    res.sendStatus(400).send(err);
                });
    }



    function findAllWebsitesForUser(req, res) {
        var userId = req.params.uid;
        console.log(userId);
        model
            .websiteModel
            .findAllWebsitesForUser(userId)
            .then(
                function (user) {
                    console.log(user);
                    res.json(user.websites);
                    console.log("whats happening");
                },
                function (err) {
                    res.sendStatus(400).send(err);
                }
            );
    }



    function findWebsiteById(req, res) {
        var websiteId = req.params.websiteId;
        model
            .websiteModel
            .findWebsiteById(websiteId)
            .then(
                function (website) {
                    res.json(website);
                },
                function (err) {
                    res.sendStatus(400).send(err);
                });
    }



    function updateWebsite(req, res) {
        var websiteId = req.params.websiteId;
        var website = req.body;
        model
            .websiteModel
            .updateWebsite(websiteId, website)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }



    function deleteWebsite(req, res) {
        var websiteId = req.params.websiteId;
        model
            .websiteModel
            .deleteWebsite(websiteId)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );

    }
};