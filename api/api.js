var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var api = module.exports = express();

api.use(logger('dev'));
api.use(bodyParser.json());

require('./work/routes')(api);
require('./hero/routes')(api);

module.exports = api;
