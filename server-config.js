var express = require('express');
var bodyParser  = require('body-parser');


module.exports = function (app, express) {
  app = express();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static('app'));

};

