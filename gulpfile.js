var gulp = require('gulp');
var sass = require('gulp-sass');
var parker = require('gulp-parker');

// Compile SCSS
gulp.task('sass', function() {
  gulp.src('./{01-original,02-base,03-extend,04-placeholder}**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.'));
});

// Collect CSS stats
gulp.task('parker', function() {
  return gulp.src('./{01-original,02-base,03-extend,04-placeholder}**/*.css')
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
gulp.task('default', ['sass', 'parker']);
