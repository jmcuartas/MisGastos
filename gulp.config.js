'use strict';

module.exports = function () {
  var config = {};

  function getConfig(file) {
    config = require('./gulp-task/config/' + file)(config);
  }

  getConfig('path.config');

  return config;
};
