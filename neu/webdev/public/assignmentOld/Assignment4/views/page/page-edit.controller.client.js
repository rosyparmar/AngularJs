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

        function init() {
            PageService.findPageById(vm.pageId)
                .success(function (editPage) {
                    vm.currentpage = editPage;
                })
                .error(function (err) {
                    vm.error = "OOps..!!!";
                })
        }
            init();

            function updatePage() {
                PageService.updatePage(vm.pageId, vm.currentpage)
                .success(function (s) {
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
                })
                .error(function (error) {
                    vm.error = "No update possible";
                })
            }

            function deletePage() {
                PageService.deletePage(vm.pageId)
                    .success(function (remove) {
                      $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/");
                })
                    .error(function (error) {
                        vm.error = "No delete possible";
                    })
            }
    }

})();