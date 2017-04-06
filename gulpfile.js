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
    gulp.src(['./components/**/*.jsx',
            './components/**/*.js'])
        .pipe(babel({
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['transform-runtime', 'transform-decorators-legacy']
        }))
        .pipe(gulp.dest('./lib'))
)

gulp.task('move', ['clean'], () =>
    gulp.src(['./components/**/*.scss',
            './components/**/*.css',
            './components/**/*.png',
            './components/**/*.eot',
            './components/**/*.svg',
            './components/**/*.ttf',
            './components/**/*.woff',
            './components/**/*.json'])
        .pipe(gulp.dest('./lib'))
)

gulp.task('default', ['babel', 'move'])
