module.exports = function log(msg) {
  'use strict';

  var util = require('gulp-util');

  if (typeof msg === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        util.log(util.colors.yellow(msg[item]));
      }
    }
  } else {
    util.log(util.colors.yellow(msg));
  }
};
