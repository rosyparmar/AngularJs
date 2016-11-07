(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetChoserController",WidgetChoserController)

    function WidgetChoserController($location,$routeParams,WidgetService) {
        var vm = this;

        vm.createNewWidget = createNewWidget;

        function init() {
            vm.userId = $routeParams["uid"];
            vm.websiteId = $routeParams["wid"];
            vm.pageId = $routeParams["pid"];
            vm.newWidgetHeader =
            {widgetType: "HEADER",
                pageId: vm.pageId,
                size: 2,
                text: "New Header Text"};
            vm.newWidgetImage = {
                widgetType: "IMAGE",
                pageId: vm.pageId,
                width: "100%",
                url: "http://lorempixel.com/400/200/"
            };
            vm.newWidgetYouTube = {
                widgetType: "YOUTUBE",
                pageId: vm.pageId,
                width: "100%",
                url: "https://youtu.be/AM2Ivdi9c4E"
            };
        }

        init();

        function createNewWidget(newWidget) {
            WidgetService.createWidget(vm.pageId, newWidget)
                .success(function (widgetFormed) {
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/"+widgetFormed._id);
                })
                .error(function (err) {
                    vm.error = "Failed to create new widget";
                });
        }
    }
})();