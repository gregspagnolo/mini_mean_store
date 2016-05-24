// Express
var express = require('express');
var app = express();

var moment = require('moment');

//Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//Static
app.use(express.static(__dirname + "/public"));

//Mongoose
require('./server/config/mongoose.js');

//Routes Config
require('./server/config/routes.js')(app);




app.listen(8888, function() {
	console.log('server is running on 8888');
});
