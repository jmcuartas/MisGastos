module.exports = function (config) {
  'use strict';

  var build = './www/';
  var client = './src/';

  var allFiles = [
    './src/**/*',
  ];

  config.path = {
    index: '.',
    alljs: './src/**/*.js',
    allhtml: './src/**/*.html',
    build: build,
    client: client,
    allFiles: allFiles,
    css: build + 'css/',
    sass: './scss/**/*.scss',
    sassMainFile: './scss/ionic.app.scss',
  };

  return config;
};
