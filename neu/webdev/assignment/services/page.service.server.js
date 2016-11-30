module.exports = function (app, model) {

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    model.pageModel.setModel(model);

    function createPage(req, res) {
        var newPage = req.body;
        var websiteId =  req.params["websiteId"];
        model
            .pageModel
            .createPage(websiteId, newPage)
            .then(
                function (newPage) {
                    res.send(newPage);
                },
                function (err) {
                    res.sendStatus(400).send(err);
                });
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        model
            .pageModel
            .findAllPagesForWebsite(websiteId)
            .then(
                function (website) {
                    res.json(website.pages);
                },
                function (err) {
                    res.sendStatus(400).send(err);
                }
            );
    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        model
            .pageModel
            .findPageById(pageId)
            .then(
                function(page){
                    if(page){
                        res.json(page);
                    }else{
                        res.send('-1');
                    }
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var page = req.body;
        model
            .pageModel
            .updatePage(pageId, page)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }


    function deletePage(req, res) {
        var pageId = req.params.pageId;
        model
            .pageModel
            .deletePage(pageId)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }
}