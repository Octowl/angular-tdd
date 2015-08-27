/*global require, __dirname*/

(function () {
  'use strict';
  var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    karma = require('karma').server,
    server = require('gulp-live-server');

  gulp.task('server', function () {
    var live = new server('server.js');
    live.start();
  });

  gulp.task('serve', ['server'], function () {
    browserSync.init({
      notify: false,
      port: 8080,
      server: {
        baseDir: ["app"],
        routes: {
          '/bower_components': 'bower_components'
        }
      }
    });

    gulp.watch(['app/**/*.*'])
      .on('change', browserSync.reload);
  });

  gulp.task('test-browser', function () {
    karma.start({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true,
      reporters: ['mocha']
    });
  });

  gulp.task('serve-test', function () {
    browserSync.init({
      notify: false,
      port: 8081,
      server: {
        baseDir: ["test", "app"],
        routes: {
          '/bower_components': 'bower_components'
        }
      }
    });

    gulp.watch(['app/**/*.*'])
      .on('change', browserSync.reload);
  });
}());
