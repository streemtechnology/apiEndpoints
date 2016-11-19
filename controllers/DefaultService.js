'use strict';

exports.encodePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fps (String)
  * bitrate (String)
  * cubic (Boolean)
  * s3Upload (String)
  * codec (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.statusPollIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  // no response value expected for this operation
  res.end();
}

