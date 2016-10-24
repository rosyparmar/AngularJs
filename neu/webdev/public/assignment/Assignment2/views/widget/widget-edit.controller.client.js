/**
 * Created by rosyp on 10/23/2016.
 */
(function ()
{
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController",WidgetEditController)

    function WidgetEditController($location,$routeParams,WidgetService)
    {
        var vm=this;
        vm.id=$routeParams["uid"];
        vm.websiteId=$routeParams["wid"];
        vm.pageId=$routeParams["pid"];
        vm.widgetId=$routeParams["wgid"];
        vm.widget=WidgetService.findWidgetById(vm.widgetId);

        vm.updateWidget=updateWidget;
        vm.deleteWidget=deleteWidget;

        function deleteWidget()
        {
            var res = WidgetService.deleteWidget(vm.widgetId);
            if(res)
            {
                $location.url("/user/" + vm.id + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
            }
            else
            {
                vm.error ="Wrong";
            }
        }

        function updateWidget(widget)
        {
            var res = WidgetService.updateWidget(vm.widgetId, widget);
            if(res) {
                $location.url("/user/" + vm.id + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
            }
            else
            {
                vm.error = "Wrong";
            }
        }

    }
})();