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

            vm.newWidgetHeader = {name:" ", type: "HEADER", size: 2, text: "New Header Text"};
            vm.newWidgetImage = {name:" ", type: "IMAGE", width: "100%", url: "http://lorempixel.com/400/200/"};
            vm.newWidgetYouTube = {name:" ", type: "YOUTUBE", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E"};
            vm.newWidgetHTML = {name:" ", type: "HTML",text:""};
            vm.newWidgetTEXT = {name:" ", type: "INPUT",formatted: false,rows: 1,placeholder:"",text:""};
        }

        init();

        function createNewWidget(newWidget) {
            WidgetService.createWidget(vm.pageId, newWidget)
                .success(function (widgetCreated) {
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/"+widgetCreated._id);
                })
                .error(function (err) {
                    vm.error = "Failed to create new widget";
                });
        }
    }
})();