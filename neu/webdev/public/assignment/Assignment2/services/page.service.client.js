/**
 * Created by rosyp on 10/19/2016.
 */
(function() {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService()
    {
        var pages =
            [
                { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
                { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
                { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
            ]

        var api =
        {
            "createPage"   : createPage,
            "findPagesByWebsiteId" : findPagesByWebsiteId,
            "findPageById" : findPageById,
            "updatePage" : updatePage,
            "deletePage" : deletePage
        };

        return api;

        function createPage(websiteId, page)
        {
            page.websiteId = websiteId;
            var newId = getRandomPageId(0, 10000).toString()
            if(!findPageById(newId))
            {
                page._id = newId;
                pages.push(page);
                return page;
            }
        }

        function findPageById(pageId)
        {
            for(var p in pages)
            {
                page = pages[p];
                if(page._id === pageId)
                {
                    return page;
                }
            }
            return null;
        }

        function findPagesByWebsiteId(wId)
        {
            result = []

            for(var p in pages)
            {
                page = pages[p];
                if(page.websiteId === wId)
                {
                    result.push(page);
                }
            }
            return result;
        }

        function updatePage(pageId, page)
        {
            var pageIndex = findPageIndexById(pageId);
            if( -1 === pageIndex)
            {
                return null;
            }
            else
            {
                pages[pageIndex] = page;
                return pages[pageIndex];
            }
        }

        function deletePage(pageId)
        {
            var pageIndex = findPageIndexById(pageId);
            if(-1 === pageIndex)
            {
                return false;
            }
            else
            {
                pages.splice(pageIndex, 1);
                return true;
            }
        }


        function findPageIndexById(pageId)
        {
            for(var i = 0; i < pages.length; ++i)
            {
                if( pages[i]._id === pageId)
                    return i;
            }

            return -1;
        }

        function getRandomPageId(min, max)
        {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }
})();
