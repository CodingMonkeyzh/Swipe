/**
 * @file 用于发布之前compile
 * @author houyl@jingoal.com
 */
/* eslint-disable*/
const gulp = require('gulp');
const clean = require('gulp-clean');
const babel = require('gulp-babel');

gulp.task('clean', () =>
  gulp.src(['./lib'], {read: false})
    .pipe(clean())
)

gulp.task('babel', ['clean'], () =>
  gulp.src(['swipe.js'])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./lib'))
)

gulp.task('default', ['babel'])
