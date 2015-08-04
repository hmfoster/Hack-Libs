var express = require('express');
var bodyParser  = require('body-parser');


module.exports = function (app, express) {
  // Express 4 allows us to use multiple routers with their own configurations

  app = express();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static('app'));

};

