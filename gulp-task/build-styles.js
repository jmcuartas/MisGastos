module.exports = function (gulp, plugins, config, args) {
  'use strict';

  var log = require('./util/log');
  var errorHandler = require('./util/error-handler');

  return function () {
    log('Compiling Sass --> CSS');

    var sassOptions = {
       style: 'expanded',
       sourceComments: 'normal',
       errLogToConsole: true
     };

    var sassMinify = {
      keepSpecialComments: 0,
    };

    return gulp.src(config.path.sassMainFile)
    .pipe(plugins.sass(sassOptions)).on('error', errorHandler('Sass'))
    .pipe(plugins.minifyCss(sassMinify)).on('error', errorHandler('Autoprefixer'))
    .pipe(plugins.rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.path.css));
  };
};
