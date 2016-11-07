module.exports = function (app){
    var websites =
        [
            {_id: "123", name: "Facebook", developerId: "123", description: "Lorem"},
            {_id: "234", name: "Twitter", developerId: "234", description: "Lorem"},
            {_id: "456", name: "Gizmodo", developerId: "456", description: "Lorem"},
            {_id: "567", name: "Tic Tac Toe", developerId: "456", description: "Lorem"},
            {_id: "678", name: "Checkers", developerId: "456", description: "Lorem"},
            {_id: "789", name: "Chess", developerId: "456", description: "Lorem"}
        ];

    app.post('/api/user/:uid/website',createWebsite);
    app.get('/api/user/:uid/website', findAllWebsitesForUser);
    app.get('/api/website/:websiteId', findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/website/:websiteId', deleteWebsite);

    function createWebsite(req, res) {
        var website = req.body;
        websites.push(website);
        res.send(websites);
    }

    function findAllWebsitesForUser(req, res) {
        var uid = req.params.uid;

        var result = [];
        for(var w in websites) {
            website = websites[w];
            console.log(website.developerId);
            if(website.developerId == uid) {
                result.push(website);
            }
        }
        res.send(result);
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params.websiteId;
        for(var w in websites) {
            website = websites[w];
            if(website._id == websiteId){
                res.send(websites[w]);
            }
        }
        res.send('0');
    }

    function updateWebsite(req, res) {
        var website = req.body;
        var websiteId = req.params.websiteId;
        for(var w in websites) {
            if(websites[w]._id == websiteId) {
                websites[w] = website;
                res.send(200);
            }
        }
        res.send(400);
    }
    function deleteWebsite(req, res) {
        var website = req.body;
        var websiteId = req.params.websiteId;
        for(var i = 0;i < websites.length; i++){
            if(websites[i]._id == websiteId){
                websites.splice(i,1);
                res.send(200);
            }
        }
        res.send(400);
    }
};