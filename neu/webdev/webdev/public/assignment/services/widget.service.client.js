(function() {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http) {
        var api =
        {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
            "sort": sort
        };
        return api;
        
        function createWidget(pageId, widget){
            var url = "/api/page/"+pageId+"/widget";
            var newWidget = widget;
            return $http.post(url, newWidget);
        }

        function findWidgetById(widgetId) {
            console.log("wid id:"+widgetId);
            var url = "/api/widget/"+widgetId;
            return $http.get(url);
        }

        function findWidgetsByPageId(pageId){
            var url = "/api/page/"+pageId+"/widget";
            return $http.get(url);
        }

        function updateWidget(widgetId, widget){
            var url = "/api/widget/"+widgetId;
            return $http.put(url, widget);
        }

        function deleteWidget(widgetId){
            var url = "/api/widget/"+widgetId;
            return $http.delete(url);
        }

        function sort(pageId,i1,i2){
            var url = "/page/"+pageId+"/widget?initial="+i1+"&final="+i2;
            return $http.put(url);
        }
    }
})();
