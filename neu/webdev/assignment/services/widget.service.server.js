module.exports = function (app) {

    var widgets = [
        {_id: "123", widgetType: "HEADER", pageId: "123", size: 2, text: "GIZMODO"},
        {_id: "234", widgetType: "HEADER", pageId: "123", size: 4, text: "Lorem ipsum"},
        {_id: "345", widgetType: "IMAGE", pageId: "123", width: "100%", url: "http://lorempixel.com/400/200/"},
        {_id: "456", widgetType: "HEADER", pageId: "123", text: "Lorem ipsum", size: 5 },
        {_id: "567", widgetType: "HEADER", pageId: "123", size: 4, text: "Lorem Ipsum"},
        {_id: "678", widgetType: "YOUTUBE", pageId: "123", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E"},
        {_id: "789", widgetType: "HEADER", pageId: "123", text: "<p>Lorem ipsum</p>"}
    ];

    var multer = require('multer'); // npm install multer --save
    var upload = multer({dest: __dirname + '/../../public/uploads'});

    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);
    app.put("/page/:pageId/widget", sortWidgetOrder);
    app.post("/api/upload", upload.single('myFile'), uploadImage);

    function uploadImage(req, res) {
        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;
        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;

        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        var path = myFile.path;         // full path of uploaded file
        var destination = myFile.destination;  // folder where file is saved to
        var size = myFile.size;
        var mimetype = myFile.mimetype;

        for (var i in widgets) {
            if (widgets[i]._id === widgetId) {
                widgets[i].url = "/uploads/" + filename;
            }
        }
        res.redirect("/assignment/#/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
    }

    function sortWidgetOrder(req, res) {
        var start = req.query.initial;
        var end = req.query.final;
        widgets.splice(end, 0, widgets.splice(start, 1)[0]);
    }

    function createWidget(req, res) {
        var newWidget = req.body;
        widgets.push(newWidget);
        res.send(newWidget);
    }

    function findAllWidgetsForPage(req, res) {
        var pageId = req.params.pageId;
        var result = [];
        for(var w in widgets) {
            var widget = widgets[w];
            if(widget.pageId === pageId) {
                result.push(widget);
            }
        }
        res.send(result);
    }

    function findWidgetById(req, res) {
        console.log("called in server");
        var widgetId = req.params.widgetId;
        for(var w in widgets) {
            var widget = widgets[w];
            if(widget._id == widgetId){
                console.log("cfound in server "+widget.widgetType);
                widgetFound = widget;
                res.send(widgetFound);
                return;

            }
        }
        res.send('0');
    }
    function updateWidget(req, res) {
        var widgetId = req.params.widgetId;
        var widget = req.body;
        for(var w in widgets) {
            if(widgets[w]._id == widgetId) {
                widgets[w] = widget;
                console.log("found in server");
                res.send(200);
                return;
            }
        }
        res.send('0');
    }

    function deleteWidget(req, res) {
        console.log("server delete");
        var widget = req.body;
        var widgetId = req.params.widgetId;

        for(var i = 0;i < widgets.length; i++){
            if (widgets[i]._id === widgetId) {
                widgets.splice(i, 1);
                res.send(200);
            }
        }
        res.send(400);
    }
}