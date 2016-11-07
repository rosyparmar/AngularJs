(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService){
        var vm = this;
        vm.userId = $routeParams["uid"];
        vm.websiteId = $routeParams["wid"];

        function init() {
            PageService.findAllPagesForWebsite(vm.websiteId)
                .success(function (ifFound) {
                    vm.pages = ifFound;
                })
                .error(function (err) {
                    vm.error = "Error";
                });
        }
        init();
    }
})();