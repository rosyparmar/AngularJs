/**
 * Created by rosyp on 10/20/2016.
 */
(function()
{
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService)
    {
        var vm = this;
        vm.userId = $routeParams["uid"];
        vm.websiteId = $routeParams["wid"];

        function init()
        {
            vm.pages = PageService.findPagesByWebsiteId(vm.websiteId);
        }
        init();
    }
})();