(function()
{
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams["uid"];
        vm.createWebsite = createWebsite;

        function init() {
            var promise = WebsiteService.findAllWebsitesForUser(vm.userId);
                promise
                    .success(function (websites) {
                     vm.websites = websites;
                })
                .error(function (err) {
                    vm.error = "Sorryyy..!!!!";
                });
        }

        init();

        function createWebsite(website) {
            if (undefined !== website && undefined !== website.name) {
                var promise = WebsiteService.createWebsite(vm.userId, website);
                promise
                    .success(function (website) {
                        if ('1' === website) {
                            $location.url("/user/" + vm.userId + "/website");
                        } else {
                            vm.error = "Failed to create the new website";
                        }
                    })
                    .error(function (msg) {
                        console.log(msg);
                    });
            }
        }
    }
})();