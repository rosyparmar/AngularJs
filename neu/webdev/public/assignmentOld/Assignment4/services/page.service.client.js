(function() {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService($http) {

        var api = {
            "createPage"   : createPage,
            "findAllPagesForWebsite" : findAllPagesForWebsite,
            "findPageById" : findPageById,
            "updatePage" : updatePage,
            "deletePage" : deletePage
        };

        return api;

        function createPage(websiteId, page) {
            var newId = (new Date().getTime()).toString();
            var url = "/api/website/"+websiteId+"/page";
            var newPage = {
                _id: newId,
                name: page.name,
                websiteId: websiteId,
                description: page.description};
            return $http.post(url, newPage);
        }

        function findPageById(pageId) {
            var url = "/api/page/"+pageId;
            return $http.get(url);
        }

        function findAllPagesForWebsite(websiteId) {
            var url = "/api/website/"+websiteId+"/page";
            return $http.get(url);
        }

        function updatePage(pageId, page) {
            var url = "/api/page/"+pageId;
            return $http.put(url, page);
        }

        function deletePage(pageId) {
            var url = "/api/page/"+pageId;
            return $http.delete(url);
        }
    }
})();
