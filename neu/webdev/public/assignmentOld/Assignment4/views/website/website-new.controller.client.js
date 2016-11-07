(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, $location, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams["uid"];
        vm.createNewWebsite = createNewWebsite;

        function init() {
            var promise = WebsiteService.findAllWebsitesForUser(vm.userId);
            promise
                .success(function (listwebsites) {
                    vm.websites = listwebsites;
                })
                .error(function (error) {
                    vm.error = "Error in getting websites";
                    console.log(error);
                })
        }
        init();

        function createNewWebsite(newwebsite) {
             var promise = WebsiteService.createWebsite(vm.userId, newwebsite);
                 promise
                     .success(function (newwebsite){
                         $location.url("/user/" + vm.userId + "/website");
                     })
                     .error(function (err) {
                         vm.error = "Sorry, can't create this website";
                     })
        }
    }
})();