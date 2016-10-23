(function()
{
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService)
    {
        var vm = this;
        vm.userId = $routeParams["uid"];

        function init()
        {
            console.log("inside"); 
            vm.websites = WebsiteService.findWebsiteByUser(vm.userId);
        }

        init();
    }
})();