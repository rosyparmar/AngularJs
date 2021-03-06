/**
 * Created by rosyp on 10/20/2016.
 */

(function()
{
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, $location, WebsiteService)
    {
        var vm = this;
        vm.userId = $routeParams["uid"];
        vm.createWebsite = createWebsite;

        function init()
        {
            vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
        }
        init();

        function createWebsite(website)
        {
                WebsiteService.createWebsite(vm.userId, website);
                $location.url("/user/" + vm.userId + "/website");
        }
    }
})();