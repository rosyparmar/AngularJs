(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, $location, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams["uid"];
        vm.websiteId = $routeParams["wid"];
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

        function init() {
            WebsiteService.findAllWebsitesForUser(vm.userId)
                .success(function (editWebsites) {
                    vm.websites = editWebsites;
                    console.log(vm.websites);
                })
                .error(function (err) {
                    console.log(err);
                    vm.error = "OOps..!!!";
                })

            WebsiteService.findWebsiteById(vm.websiteId)
                .success(function (caughtWebsite) {
                    vm.currentwebsite = caughtWebsite;
                })
                .error(function () {
                    vm.error = "OOps..Not able to locate!!!";
                })
        }

        init();

        function updateWebsite() {
            if (vm.currentwebsite.name != ''){
            WebsiteService.updateWebsite(vm.websiteId, vm.currentwebsite)
                .success(function (s) {
                    $location.url("/user/" + vm.userId + "/website");
                })
                .error(function (error) {
                    vm.error = "No update possible";
                })
        }
            else {
                vm.error = "Website name cannot be left empty";
            }
        }

        function deleteWebsite() {
            console.log(vm.websiteId);
            WebsiteService.deleteWebsite(vm.websiteId)
                .success(function (remove) {
                    $location.url("/user/" + vm.userId + "/website");
                })
                .error(function (error) {
                    vm.error = "No delete possible";
                })
        }

    }
})();

