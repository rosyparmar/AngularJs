module.exports = function (app) {

    var pages = [
            { "_id": "123", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    function createPage(req, res) {
        var newpage = req.body;
        pages.push(newpage);
        res.send(newpage);
    }

    function findAllPagesForWebsite(req, res) {
        var wid = req.params.websiteId;
        var result = [];
        for(var p in pages) {
            page = pages[p];
            if(page.websiteId == wid) {
                result.push(page);
            }
        }
        res.send(result);
    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        for(var p in pages) {
            page = pages[p];
            if(page._id == pageId){
                res.send(pages[p]);
                return;
            }
        }
        res.send('0');
    }

    function updatePage(req, res) {
        var page = req.body;
        var pageId = req.params.pageId;
        var response = 400;
        for(var p in pages) {
            if(pages[p]._id == pageId) {
                pages[p] = page;
                response = 200;
                console.log("Update Successful");
                break;
            }
        }
        res.sendStatus(response);
    }
    function deletePage(req, res) {
        var page = req.body;
        var pageId = req.params.pageId;
        for(var i = 0;i < pages.length; i++){
            if(pages[i]._id == pageId){
                pages.splice(i,1);
                res.send(200);
            }
        }
        res.send(400);
    }
}