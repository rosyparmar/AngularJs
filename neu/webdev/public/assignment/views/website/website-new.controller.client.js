(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, $location, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams["uid"];
        vm.createNewWebsite = createNewWebsite;

        function init() {
            vm.website = {"name":"","description":""};
            var promise = WebsiteService.findAllWebsitesForUser(vm.userId);
            promise
                .success(function (websites) {
                    vm.websites = websites;
                })
                .error(function (error) {
                    vm.error = "Error in getting websites";
                })
        }
        init();

        function createNewWebsite(newwebsite) {
            if (newwebsite.name == "") {
                vm.error = "Website name not provided";
            }
            else {
                var promise = WebsiteService.createWebsite(vm.userId, newwebsite);
                promise
                    .success(function (newwebsite) {
                            $location.url("/user/" + vm.userId + "/website");
                        }
                    )
                    .error(function (err) {
                        console.log(err);
                    })
            }
        }
    }
})();