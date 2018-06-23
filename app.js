//imports:
let express = require('express');
let bodyParser = require('body-parser');

//create server:
let app = express();

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//ejs for file serving:
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

module.exports = app;