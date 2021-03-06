(function() {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService($http)
    {
        var api =
        {
            createWebsite: createWebsite,
            updateWebsite:updateWebsite,
            deleteWebsite: deleteWebsite,
            findWebsiteById: findWebsiteById,
            findAllWebsitesForUser: findAllWebsitesForUser
        };
        return api;

        function createWebsite(userId, website) {
            var newId = (new Date().getTime()).toString();
            var url = "/api/user/"+userId+"/website";
            var newWebsite = {
                _id: newId,
                name: website.name,
                developerId: userId,
                description: website.description};
            return $http.post(url, newWebsite);
        }

        function updateWebsite(websiteId, website) {
            var url = "/api/website/" + websiteId;
            return $http.put(url, website);
        }

        function deleteWebsite(websiteId) {
            var url = "/api/website/" + websiteId;
            return $http.delete(url);
        }

        function findWebsiteById(wid) {
            var url = '/api/website/' + wid;
            return $http.get(url);
            }

        function findAllWebsitesForUser(uid) {
            var url = "/api/user/"+uid+"/website";
            return $http.get(url);
        }
    }

})();