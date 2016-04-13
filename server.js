//var app = require('./server-config.js');
var db = require('database/db');
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public')); 

app.listen(process.env.PORT || 3000);