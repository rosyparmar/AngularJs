module.exports = function () {
    var mongoose = require('mongoose');
    var PageSchema = require('./page.schema.server')();
    var PageModel = mongoose.model("PageModel", PageSchema);

    var api = {
        createPage: createPage,
        findAllPagesForWebsite: findAllPagesForWebsite,
        findPageById: findPageById,
        updatePage: updatePage,
        deletePage: deletePage,
        setModel: setModel,
        findAllWidgetsForPage: findAllWidgetsForPage
    };
    return api;

    function setModel(_model){
        model = _model;
    }

    function createPage(websiteId, page) {
        return PageModel
            .create(page)
            .then(
                function(pageObj){
                model.websiteModel
                    .findWebsiteById(websiteId)
                    .then(function(websiteObj){
                        pageObj._website = websiteObj._id;
                        pageObj.save();
                        websiteObj.pages.push(pageObj);
                        return websiteObj.save();
                    }, function(error){
                        console.log(error);
                    });
            });
    }

    function findAllPagesForWebsite(websiteId) {
        return model.websiteModel.findAllPagesForWebsite(websiteId);
    }

    function findPageById(pageId) {
        return PageModel.findById(pageId);
    }

    function updatePage(pageId, page) {
        return PageModel
            .update({_id: pageId}, {
                $set: page
            });
    }

    function deletePage(pageId) {
        return PageModel.remove({_id: pageId});
    }

    function findAllWidgetsForPage(pageId) {
        return PageModel
            .findById(pageId)
            .populate("widgets")
            .exec();
    }

};