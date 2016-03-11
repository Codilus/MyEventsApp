var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var jade = require('gulp-jade');
var include = require("gulp-include");

var paths = {
  sass: ['./src/scss/**/*.scss'],
  js: ['./src/js/**/*.js'],
  img: ['./src/img/**/*'],
  lib: ['./src/lib/**/*/js'],
  html: ['./src/**/*.jade']
};

gulp.task('default', ['build']);

gulp.task('build', ['build:sass', 'build:js', 'build:img', 'build:lib', 'build:html']);

gulp.task('build:sass', function(done) {
  gulp.src('./src/scss/app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task("build:js", function() {
  gulp.src("src/js/app.js")
    .pipe(include())
    .on('error', console.log)
    .pipe(gulp.dest("www/js"));
});

gulp.task("build:img", function() {
  return gulp.src("src/img/*")
    .pipe(gulp.dest("www/img"));
});

gulp.task("build:lib", function() {
  return gulp.src("src/lib/**/*")
    .pipe(gulp.dest("www/lib"));
});

gulp.task('build:html', function() {
  // var YOUR_LOCALS = {};

  return gulp.src('./src/**/*.jade')
    .pipe(jade({
      // locals: YOUR_LOCALS
      pretty: true
    }))
    .pipe(gulp.dest('./www/'))
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['build:sass']);
  gulp.watch(paths.js, ['build:js']);
  gulp.watch(paths.img, ['build:img']);
  gulp.watch(paths.img, ['build:img']);
  gulp.watch(paths.html, ['build:html']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
