(function()
{
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService()
    {
        var widgets = [
            {"_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
            {"_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"
            },
            {
                "_id": "456",
                "widgetType": "HTML",
                "pageId": "321",
                "text": '<p>Watchmaker <a href="http://gizmodo.com/tag/mbf" rel="nofollow">MB&amp;F</a> isn’t as well-known as  Rolex or Timex, but that’s because the company’s unique creations—like a <a href="http://gizmodo.com/listen-to-an-18-000-tie-fighter-music-box-play-the-sta-1717444112" rel="nofollow">TIE Fighter-shaped music box</a> that plays the <em>Star Wars</em> theme—are made for die-hard collectors. Its latest creation is a <a href="https://www.mbandf.com/en/machines/co-creations/astrograph" target="_blank" rel="noopener">rocket-shaped pen inspired by the moon landing</a>, and I’m desperately trying to justify…<span class="read-more-placeholder"></span><span class="readmore-core-decorated"></span></p>'
            },
            {"_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E"
            },
            {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        var api =
        {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget
        };

        return api;

        function createWidget(pageId, widget)
        {
            widget.pageId = pageId;
            var newWidgetId = getRandomInt(0, 10000).toString();
            if (null === findWidgetById(newWidgetId)) {
                widget._id = newWidgetId;
                widgets.push(widget);
                return widget;
            }
        }

        function getRandomInt(min, max)
        {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function findWidgetById(wid)
        {
            for (var w in widgets)
            {
                widget = widgets[w];
                if (widget._id === widgetId)
                {
                    return widget;
                }
            }
            return null;
        }

        function findWidgetsByPageId(pageId)
        {
            var widget_arr = [];
            for(var w in widgets)
            {
                if(widgets[w].pageId === pageId)
                {
                    widget_arr.push(widgets[w]);
                }
            }
            return widget_arr;

        }

        function updateWidget(widgetId, newWidget)
        {
            if (widget.widgetType == "HEADER") {
                for (var w in widgets) {
                    widIndex = widgets[w];
                    if (newWidget._id === widgetId) {
                        widgets[widIndex] = newWidget;
                        return widgets[userIndex];
                    }
                    else {
                        return null;
                    }
                }
                return false;
            }

            else if (widget.widgetType == "YOUTUBE") {
                for (var w in widgets) {
                    widIndex = widgets[w];
                    if (newWidget._id === widgetId) {
                        widgets[widIndex] = newWidget;
                        return widgets[userIndex];
                    }
                    else {
                        return null;
                    }
                }
                return false;
            }

            else if (widget.widgetType == "IMAGE") {
                for (var w in widgets) {
                    widIndex = widgets[w];
                    if (newWidget._id === widgetId) {
                        widgets[widIndex] = newWidget;
                        return widgets[userIndex];
                    }
                    else {
                        return null;
                    }
                }
                return false;
            }
        }


        function deleteWidget(widgetId)
        {
            var widIndex = findWidIndexById(widgetId);
            if (widIndex === null)
            {
                return false;
            }
            else
            {
                widgets.splice(widIndex, 1);
                return true;
            }
        }


        function findWidIndexById(widgetId)
        {
            for (var i = 0; i < widgets.length; ++i)
            {
                if (widgets[i]._id === widgetId)
                    return i;
            }
            return -1;
        }
    }
})();
