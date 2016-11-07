(function() {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, $location, PageService) {
        var vm = this;
        vm.createPageNew = createPageNew;


        function init() {
            vm.userId = $routeParams["uid"];
            vm.websiteId = $routeParams["wid"];
        }

        function createPageNew(pageNew) {
                PageService.createPage(vm.websiteId, pageNew)
                    .success(function (newCreatedPage) {
                        alert(vm.userId);
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                    })
                    .error(function (err) {
                        vm.error = "Failed to create new page";
                    });
            }
        init();
    }
})();