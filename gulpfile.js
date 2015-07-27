var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var gzip = require('gulp-gzip');
var parker = require('gulp-parker');

// Compile SCSS
gulp.task('sass', function() {
  gulp.src('./{01-original,02-base,03-extend,04-placeholder,05-mixin}**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.'));
});

// Minify and gzip
gulp.task('compress', function() {
  return gulp.src('./{01-original,02-base,03-extend,04-placeholder,05-mixin}**/*.css')
    .pipe(minifyCss())
    .pipe(gzip())
    .pipe(gulp.dest('.'));
});

// Collect CSS stats
gulp.task('parker', function() {
  return gulp.src('./{01-original,02-base,03-extend,04-placeholder,05-mixin}**/*.css')
    .pipe(parker({
      file: 'stats.md',
      title: 'Compiled CSS stats',
      metrics: [
        "TotalSelectors",
        "TotalDeclarations"
      ]
    }));
});

// Single default task
gulp.task('default', ['sass', 'compress', 'parker']);
