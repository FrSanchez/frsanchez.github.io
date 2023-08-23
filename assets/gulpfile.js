const { src, dest, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');

function miniJs(cb) {
  cb();
  return src(['js/partials/**.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .on('error', (err) => {
      console.log(err.toString());
    })
    .pipe(dest('js/'));
}

function js2(cb) {
  cb();
  return src(['js-src/*.js'])
    .pipe(
      minify({
        ext: {
          min: '.min.js',
        },
        exclude: ['tasks'],
        mangle: true,
        noSource: true,
        ignoreFiles: ['.combo.js', '.min.js'],
      })
    )
    .on('error', (err) => {
      console.log(err.toString());
    })
    .pipe(dest('js'));
}

function minicss() {
  return src('css/vendor/bootstrap-iso.css')
    .pipe(cleanCSS())
    .on('error', (err) => {
      console.log(err.toString());
    })
    .pipe(concat('bootstrap-iso.min.css'))
    .pipe(dest('css/vendor/'));
}

exports.default = parallel(miniJs, js2, minicss);
