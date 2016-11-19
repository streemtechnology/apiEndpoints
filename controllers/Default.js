'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.encodePOST = function encodePOST (req, res, next) {
  Default.encodePOST(req.swagger.params, res, next);
};

module.exports.statusPollIdGET = function statusPollIdGET (req, res, next) {
  Default.statusPollIdGET(req.swagger.params, res, next);
};
