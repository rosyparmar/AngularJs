(function ()
{
    angular
        .module("WebAppMaker")
        .controller("WidgetListController",WidgetListController);

    function WidgetListController($sce, $routeParams, WidgetService, $location)
    {
        var vm=this;
        vm.userId=$routeParams["uid"];
        vm.websiteId=$routeParams["wid"];
        vm.pageId=$routeParams["pid"];
        vm.widgetId = $routeParams["wgid"];
        vm.editWidget = editWidget;
        vm.getSafeHtml = getSafeHtml;
        vm.checkSafeURL = checkSafeURL;

        function getSafeHtml(text) {
            return $sce.trustAsHtml(text);
        }

        function checkSafeURL(widgetURL) {
            var parts = widgetURL.split('/');
            var id = parts[parts.length - 1];
            url = "https://www.youtube.com/embed/"+id;
            return $sce.trustAsResourceUrl(url);
        }

        function editWidget(widget){
            if (widget.widgetType === "YOUTUBE" || widget.widgetType === "IMAGE" || widget.widgetType === "HEADER") {
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+ vm.pageId+"/widget/"+ widget._id);
                console.log("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+ vm.pageId+"/widget/"+ widget._id);
            }
            else{
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");
            }

        }

        function init() {
            WidgetService.findWidgetsByPageId(vm.pageId)
                .success(function (widgets) {
                    console.log(widgets);
                    vm.widgets = widgets;
                })
                .error(function (err) {
                    vm.error = "OOps..Not able to locate!!!";
                })
        }
        init();
    }
})();