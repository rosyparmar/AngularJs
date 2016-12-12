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
                    vm.widget = presentWid;
            })
                .error(function (err) {
                    vm.error = "Error";
                });
        }
        init();

        function validateWidgetType(widgetToTest){
            var validationFailed = false;

            switch(widgetToTest.type){
                case "HEADING":
                    if(widgetToTest.text == '' || widgetToTest.text == null){
                        validationFailed = true;
                    }
                    break;
                case "IMAGE":
                    if(widgetToTest.url == '' || widgetToTest.url == null){
                        validationFailed = true;
                    }
                    break;
                case "YOUTUBE":
                    if(widgetToTest.url == '' || widgetToTest.url == null){
                        validationFailed = true;
                    }
                    break;
            }

            return validationFailed;
        }

        function updateWidget(){
            if(validateWidgetType(vm.widget)){
                switch(vm.widget.type) {
                    case "HEADING":
                        vm.error = "Header Text cannot be blank";
                        break;
                    case "IMAGE":
                        vm.error = "Image Url cannot be blank";
                        break;
                    case "YOUTUBE":
                        vm.error = "Video Url cannot be blank";
                        break;
                    default:
                        vm.error = "There is something wrong. Please check whether form fields are correctly filled."
                        break;
                }
            }
            else {
                WidgetService.updateWidget(vm.widgetId, vm.widget)
                    .then(function (response) {
                        $location.url("/user/" + vm.id + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
                    }, function (err) {
                        vm.error = "Failed to update widget";
                    });
            }
        }

        function deleteWidget(){
            WidgetService.deleteWidget(vm.widgetId)
                .success(function(res){
                    $location.url("/user/" + vm.id + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
                })
                .error(function(err){
                    vm.error = "Failed to delete widget";
                });
        }
    }
})();