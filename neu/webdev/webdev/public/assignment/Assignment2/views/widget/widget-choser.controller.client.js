/**
 * Created by rosyp on 10/23/2016.
 */
(function ()
{
    angular
        .module("WebAppMaker")
        .controller("WidgetChoserController",WidgetChoserController)

    function WidgetChoserController($location,$routeParams,WidgetService)
    {
        var vm=this;
        vm.userId=$routeParams["uid"];
        vm.websiteId=$routeParams["wid"];
        vm.pageId=$routeParams["pid"];
        vm.createWidget=createWidget;


        function createWidget(type)
        {
            if(type==="HEADER")
            {
                var  newWidget=
                {
                    _id : getRandomInt(0, 10000).toString(),
                    widgetType:"HEADER",
                    pageId:vm.pageId,
                    size:2,
                    text:"Default"
                }
            }
            else if(type==="IMAGE")
            {
                var  newWidget=
                {
                    _id : getRandomInt(0, 10000).toString(),
                    widgetType:"IMAGE",
                    pageId:vm.pageId,
                    width:"100%",
                    url:"http://lorempixel.com/400/200/"
                }
            }
            else if(type==="YOUTUBE")
            {
                var  newWidget=
                {
                    _id : getRandomInt(0, 10000).toString(),
                    widgetType:"YOUTUBE",
                    pageId:vm.pageId,
                    width:"100%",
                    url:"http://lorempixel.com/400/200/"
                }
            }

            var newWidgetFormed =WidgetService.createWidget(vm.pageId,newWidget);
            if(newWidgetFormed)
            {
                var widgetId=newWidget._id;
                $location.url("/user/"+vm.id+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/"+widgetId);
            }
            else{
                vm.error="Update not possible";
            }
        }
    }
})();