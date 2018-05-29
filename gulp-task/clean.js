module.exports = function (gulp, plugins, config, args) {
  'use strict';

  var del = require('del');
  var log = require('./util/log');
  var vinylPaths = require('vinyl-paths');

  return function () {
    log('Cleaning: ' + plugins.util.colors.yellow(config.path.build));
    return gulp.src('./www')
            .pipe(vinylPaths(del));
  };
};
