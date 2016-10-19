/**
 * Created by rosyp on 10/19/2016.
 */
(function()
{
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService()
    {
        var websites =
        [
            {_id: 123, name: "Facebook", developerId: 456, description: "Lorem"},
            {_id: 234, name: "Twitter", developerId: 456, description: "Lorem"},
            {_id: 456, name: "Gizmodo", developerId: 456, description: "Lorem"},
            {_id: 567, name: "Tic Tac Toe", developerId: 123, description: "Lorem"},
            {_id: 678, name: "Checkers", developerId: 123, description: "Lorem"},
            {_id: 789, name: "Chess", developerId: 234, description: "Lorem"}
        ];

        var api =
        {
            createWebsite: createWebsite,
            findWebsiteByUser:findWebsiteByUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };
        return api;

        function createWebsite(userId, website)
        {
            for (var w in websites)
            {
                if (websites[w]._id === wid)
                {
                    return websites[w];
                }
            }
            return null;
        }

        function findWebsiteByUser(userId)
        {
            var result = [];
            for(var w in websites)
            {
                if(websites[w].uid === uid)
                {
                    result.push(websites[w]);
                }
            }
            return result;
        }

        function findWebsiteById(websiteId)
        {
            for (var w in websites)
            {
                if (websites[w]._id === wid)
                {
                    return websites[w];
                }
            }
            return null;
        }

        function updateWebsite(websiteId, website)
        {
            for (var w in websites)
            {
                if (websites[w]._id === wid)
                {
                    return websites[w];
                }
            }
            return null;
        }

        function deleteWebsite(websiteId, website)
        {
            for (var w in websites)
            {
                if (websites[w]._id === wid)
                {
                    return websites[w];
                }
            }
            return null;
        }

    }
})();