/**
 * Created by rosyp on 10/20/2016.
 */
(function()
{
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);

    function EditPageController($routeParams,$location, PageService)
    {
        var vm = this;
        vm.userId = $routeParams["uid"];
        vm.websiteId = $routeParams["wid"];
        vm.pageId = $routeParams["pid"];
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        function init()
        {
            vm.pages = PageService.findPagesByWebsiteId(vm.websiteId);
            vm.page = Object.create(PageService.findPageById(vm.pageId));
        }
        init();

        function updatePage(page)
        {
                PageService.updatePage(vm.pageId, page);
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
        }

        function deletePage()
        {
            PageService.deletePage(vm.pageId);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
        }
    }

})();