(function() {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, $location, PageService) {
        var vm = this;
        vm.createPageNew = createPageNew;


        function init() {
            vm.page = {"name": "", "description": ""};
            vm.userId = $routeParams["uid"];
            vm.websiteId = $routeParams["wid"];
            var promise = PageService.findAllPagesForWebsite(vm.websiteId);
            promise
                .success(function(pages){
                    vm.pages = pages;
                })
                .error(function(msg){
                    console.log(msg);
                });
        }
        init();

        function createPageNew() {

            if (vm.page.name == "") {
                vm.error = "Please provide a page name";
            }
            else {
                PageService.createPage(vm.websiteId, vm.page)
                    .success(function (newCreatedPage) {
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                    })
                    .error(function (err) {
                        vm.error = "Failed to create new page";
                    });
            }
        }
    }
})();