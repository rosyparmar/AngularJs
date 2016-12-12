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
            {_id: "123", name: "Facebook", developerId: "123", description: "Lorem"},
            {_id: "234", name: "Twitter", developerId: "234", description: "Lorem"},
            {_id: "456", name: "Gizmodo", developerId: "456", description: "Lorem"},
            {_id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
            {_id: "678", name: "Checkers", developerId: "123", description: "Lorem"},
            {_id: "789", name: "Chess", developerId: "234", description: "Lorem"}
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
            var newWebsiteId = getRandomWebsiteId(0, 10000).toString();

            if(!findWebsiteById(newWebsiteId))
            {
                website._id = newWebsiteId;
                websites.push(website);
                return website;
            }
        }


        function findWebsiteByUser(userId)
        {
            var result = [];
            for(var w in websites)
            {
                //console.log(userId);
               // console.log(websites[w].developerId );
                if(websites[w].developerId == userId)
                {
                  // console.log("helooooooo");
                    result.push(websites[w]);
                }
            }
            return result;
        }

        function findWebsiteById(websiteId)
        {
            for (var w in websites)
            {
                if (websites[w]._id === websiteId)
                {
                    return websites[w];
                }
            }
            return null;
        }

        function updateWebsite(websiteId, website)
        {
            for(var w in websites)
            {
                websiteIndex = websites[w];
                if(website._id === websiteId)
                {
                    websites[websiteIndex] = website;
                    return websites[websiteIndex];
                }
                else
                {
                    return null;
                }
            }
        }

        function deleteWebsite(websiteId)
        {
            var websiteIndex = findWebsiteIndexById(websiteId);
            if(websiteIndex === null)
            {
                return false;
            }
            else
            {
                websites.splice(websiteIndex, 1);
                return true;
            }
        }

        function findWebsiteIndexById(websiteId)
        {
            for(var i = 0; i < websites.length; ++i)
            {
                if( websites[i]._id === websiteId)
                    return i;
            }

            return -1;
        }

        function getRandomWebsiteId(min, max)
        {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

    }
})();