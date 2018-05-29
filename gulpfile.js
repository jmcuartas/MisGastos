(function () {
  'use strict';

  var args = require('yargs').argv;
  var config = require('./gulp.config')();
  var gulp = require('gulp');
  var plugins = require('gulp-load-plugins')({ lazy: true });
  var gulpsync = require('gulp-sync')(gulp);

  function getTask(task) {
    return require('./gulp-task/' + task)(gulp, plugins, config, args);
  }

  gulp
  .task('default', ['help'])
  .task('help', plugins.taskListing)
  .task('build',
    gulpsync.sync(['clean', 'copy', 'build-styles']))
  .task('clean',        getTask('clean'))
  .task('copy',         getTask('copy'))
  .task('build-styles', getTask('build-styles'));
})();
