var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directives to host static content
app.use(express.static(__dirname + '/public'));

// require("C:/Users/Navya/Desktop/parmar-rosy-webdev-assignment5/parmar-rosy-webdev-assignment5/neu/webdev/assignment/app.js")(app);
require("C:/Users/Navya/Desktop/parmar-rosy-webdev-assignment5/parmar-rosy-webdev-assignment5/neu/webdev/project/app.js")(app);
//require("./project/app.js")(app);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);