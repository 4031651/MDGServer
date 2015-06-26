'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', [], function () {
  gulp.watch([
    paths.src + '/*.html',
    paths.src + '/{app,components}/**/*.scss',
    paths.src + '/{app,components}/**/*.js',
    'bower.json'
  ], []);
  gulp.watch(paths.src + '/{app,components}/**/*.jade', []);
});