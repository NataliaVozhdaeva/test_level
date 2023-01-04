const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');

function browsersync() {
  browserSync.init({
    server: 'src/',
    notify: false,
  });
}

function buildSass() {
  return src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(dest('src/css'))
    .pipe(dest('dist/css'))
    .pipe(sourcemaps.write('.'))
    .pipe(browserSync.stream());
}

function buildJs() {
  return src('src/js/main.js')
    .pipe(dest('src/js'))
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}

function html() {
  return src('src/**/*.html').pipe(dest('dist/')).pipe(browserSync.stream());
}

function serve() {
  watch('src/scripts/**/*.js', buildJs);
  watch('src/scss/**/*.scss', buildSass);
  watch('src/**/*.html', html);
}

function copyimg() {
  return src('src/img/**/*.*').pipe(dest('dist/img/'));
}

function copyvideo() {
  return src('src/video/**/*.*').pipe(dest('dist/video/'));
}

function cleanDist() {
  return del('dist/**/*', { force: true });
}

exports.clean = series(cleanDist);
exports.build = series(cleanDist, buildSass, buildJs, html, copyimg, copyvideo);
exports.default = series([buildSass, buildJs], parallel(browsersync, serve));
