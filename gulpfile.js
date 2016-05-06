var gulp = require('gulp');
var browserify = require('browserify');
var del = require('del');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var stylish = require('jshint-stylish');
var buffer = require('vinyl-buffer');
var _ = require('lodash');

var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var util = require('gulp-util');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var nano = require('gulp-cssnano');
var autoprefixer = require('autoprefixer');
var lost = require('lost');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

function onError (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}


var api = require('./api/api');

gulp.task('clean', function (cb) {
  return del(['dist/**'], cb);
});

gulp.task('html', function () {
  return gulp.src('./src/index.html')
    .pipe(plumber())
    .pipe(gulp.dest('./dist'));
});

gulp.task('images', function () {
  return gulp.src('./src/images/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('fonts', function () {
  return gulp.src('./src/fonts/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('styles', function () {
  var processors = [
    lost(),
    autoprefixer({
      browsers: [
        'last 2 versions',
        'safari 5',
        'ie 8',
        'ie 9',
        'opera 12.1',
        'ios 6',
        'android 4'
      ]
    })
  ];
  return gulp.src('./src/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(postcss(processors))
    .pipe(nano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});


var bundler = _.memoize(function (watch) {
  var options = {debug: true};

  if (watch) {
    _.extend(options, watchify.args);
  }

  var b = browserify('./src/main.js', options);

  if (watch) {
    b = watchify(b);
  }

  return b;
});

var handleErrors = function () {
  var args = Array.prototype.slice.call(arguments);
  delete args[0].stream;
  util.log.apply(null, args);
  this.emit('end');
};

function bundle(cb, watch) {
  return bundler(watch).bundle()
    .on('error', handleErrors)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
    .on('end', cb)
    .pipe(reload({stream: true}));
}

gulp.task('scripts', function (cb) {
  bundle(cb, true);
});

gulp.task('jshint', function () {
  return gulp.src(['./src/**/*.js', './test/**/*.js'])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

var reporter = 'spec';

gulp.task('mocha', ['jshint'], function () {
  return gulp.src([
      './test/setup/node.js',
      './test/setup/helpers.js',
      './test/unit/**/*.js'
    ], {read: false})
    .pipe(plumber())
    .pipe(mocha({reporter: reporter}));
});

gulp.task('build', [
  //'clean',
  'html',
  'images',
  'fonts',
  'styles',
  'scripts'
  //,
  //'test'
]);

gulp.task('test', [
  'jshint',
  'mocha'
]);

gulp.task('watch', ['build'], function () {
  browserSync.init({
    server: {
      baseDir: 'dist',
      middleware: function (req, res, next) {
        api(req, res, next);
      }
    }
  });

  reporter = 'dot';
  bundler(true).on('update', function () {
    gulp.start('scripts');
    gulp.start('test');
  });
  gulp.watch('./test/**/*.js', ['test']);
  gulp.watch(['./src/main.scss', './src/**/*.scss'], ['styles']);
  gulp.watch(['./src/*.html'], ['html']);
});

gulp.task('default', ['watch']);
