(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController)

    function WidgetEditController($location, $routeParams, WidgetService) {
        var vm = this;
        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;

        function init() {
            vm.id = $routeParams["uid"];
            vm.websiteId = $routeParams["wid"];
            vm.pageId = $routeParams["pid"];
            vm.widgetId = $routeParams["wgid"];
            WidgetService.findWidgetById(vm.widgetId)
                .success(function (presentWid) {
                    console.log(presentWid);
                    vm.widget = presentWid;
            })
                .error(function (err) {
                    vm.error = "Error";
                });
        }
        init();

        function updateWidget(widget) {
            WidgetService.updateWidget(vm.widgetId, widget)
                .success(function (s) {
                    $location.url("/user/" + vm.id + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
                })
                .error(function (err) {
                    vm.error = "Failed to update widget";
                });
        }

        function deleteWidget() {
            WidgetService.deleteWidget(vm.widgetId)
                .success(function (res) {
                    $location.url("/user/"+vm.id+"/website/"+vm.websiteId+ "/page/" + vm.pageId + "/widget/");
                })
                .error(function (err) {
                    vm.error = "Failed to delete widget";
                });
        }
    }
})();