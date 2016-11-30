module.exports = function(){
    var mongoose = require('mongoose');
    var WebsiteSchema = require('./website.schema.server')();
    var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);

    var api = {
        createWebsiteForUser: createWebsiteForUser,
        updateWebsite: updateWebsite,
        deleteWebsite: deleteWebsite,
        findWebsiteById: findWebsiteById,
        findAllWebsitesForUser: findAllWebsitesForUser,
        setModel: setModel,
        findAllPagesForWebsite: findAllPagesForWebsite
    };
    return api;

    function setModel(_model){
        model = _model;
    }

    function findAllWebsitesForUser(userId){
        return model.userModel.findAllWebsitesForUser(userId);
    }

    function createWebsiteForUser(userId, website) {
        return WebsiteModel
            .create(website)
            .then(function(websiteObj){
                model.userModel
                    .findUserById(userId)
                    .then(function(userObj){
                        websiteObj._user = userObj._id;
                        websiteObj.save();
                        userObj.websites.push(websiteObj);
                        return userObj.save();
                    }, function(error){
                        console.log(error);
                    });
            });
    }

    
    function updateWebsite(websiteId, website){
        return WebsiteModel
            .update({_id: websiteId}, {
                $set: website
            });
    }

    function deleteWebsite(websiteId){
        return WebsiteModel.remove({_id: websiteId});
    }

    function findWebsiteById(websiteId){
        return WebsiteModel.findById(websiteId);
    }

    function findAllPagesForWebsite(websiteId) {
        return WebsiteModel
            .findById(websiteId)
            .populate("pages", "name")
            .exec();
    }

};