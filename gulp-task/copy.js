module.exports = function (gulp, plugins, config, args) {
  'use strict';

  var log = require('./util/log');
  var errorHandler = require('./util/error-handler');

  return function () {
    log('Copying --> Files');

    return gulp.src(config.path.allFiles)
      .pipe(gulp.dest(config.path.build));
  };
};
