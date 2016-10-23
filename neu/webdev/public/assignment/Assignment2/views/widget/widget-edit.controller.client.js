/**
 * Created by rosyp on 10/23/2016.
 */
(function ()
{
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController",WidgetEditController)

    function WidgetEditController($location,$routeParams,WidgetService) {
        var vm=this;
        vm.id=$routeParams["uid"];
        vm.websiteId=$routeParams["wid"];
        vm.pageId=$routeParams["pid"];
        vm.widgetId=$routeParams["wgid"]
        vm.updateWidget=updateWidget;
        vm.deleteWidget=deleteWidget;

        function init()
        {
            vm.widget=WidgetService.findWidgetById(vm.widgetId);
        }
        init();

        function deleteWidget()
        {
            WidgetService.deleteWidget(vm.widgetId);
            $location.url("/user/" + vm.id + "/website/" + vm.websiteId + "/page");
        }

        function updateWidget(widget)
        {
            WidgetService.updateWidget(vm.widgetId, widget);
            $location.url("/user/"+vm.id+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");
        }

    }
})();