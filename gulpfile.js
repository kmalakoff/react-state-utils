var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');

gulp.task('dist', function () {
  gulp.src('index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({extname: '.min.js' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['dist']);