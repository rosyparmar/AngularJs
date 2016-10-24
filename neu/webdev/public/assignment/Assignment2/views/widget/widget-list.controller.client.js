(function ()
{
    angular
        .module("WebAppMaker")
        .controller("WidgetListController",WidgetListController)

    function WidgetListController($sce,$routeParams,WidgetService)
    {
        var vm=this;
        vm.userId=$routeParams["uid"];
        vm.websiteId=$routeParams["wid"];
        vm.pageId=$routeParams["pid"];
        vm.widgetId = $routeParams["wgid"];
        vm.editWidgets = editWidgets;
        console.log(vm.pageId);

        function init()
        {
            vm.widgets=WidgetService.findWidgetsByPageId(vm.pageId)
            console.log(vm.widgets);
        }
        init();



        function editWidgets(w)
        {
            if(!w.widgetType == "HTML")
            {
                console.log(vm.widgetId);
                $location.url("/user/:" + vm.id + "/website/:" + vm.websiteId + "/page/:" + vm.pageId +"/widget/:" + vm.widgetId);
            }
        }
    }
})();