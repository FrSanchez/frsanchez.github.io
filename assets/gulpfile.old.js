/*
 * Here are all of the gulp tasks you can use to help manage your blog
 * Use `npm install` to install all the dependencies located in package.json
 * Then `gulp default` to minimize css and images.
 */
import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import less from 'gulp-less';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import replace from 'gulp-replace';
import webp from 'gulp-webp';
import minify from 'gulp-minify';

gulp.task('js', function minijs() {
  return gulp.src(['js/partials/**.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .on('error', (err) => {
      console.log(err.toString());
    })
    .pipe(gulp.dest("js/"))
});

gulp.task('js2', function () {
  return gulp.src(['js-src/*.js'])
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        exclude: ['tasks'],
        mangle: true,
        noSource: true,
        ignoreFiles: ['.combo.js', '.min.js']
    }))
    .on('error', (err) => {
      console.log(err.toString());
    })
    .pipe(gulp.dest("js"))
})

gulp.task("img", function imging() {
  return gulp.src('img/**/*.{png,svg,jpg,webp,jpeg,gif}')
    .pipe(imagemin())
    .on('error', (err) => {
      console.log(err.toString());
    })
    .pipe(gulp.dest('img/'))
});

gulp.task('webp', () =>
  gulp.src('img/**/*.{png,svg,jpg,jpeg,gif}')
    .pipe(webp({
      quality: 60,
      preset: 'photo',
      method: 6
    }))
    .pipe(gulp.dest('img/'))
);

gulp.task('css', function minicss() {
  return gulp.src('css/vendor/bootstrap-iso.css')
    .pipe(cleanCSS())
    .on('error', (err) => {
      console.log(err.toString());
    })
    .pipe(concat('bootstrap-iso.min.css'))
    .pipe(gulp.dest('css/vendor/'));
});

gulp.task('isolate', function isolateBootstrap() {
  return gulp.src('css/bootstrap-iso.less')
    .pipe(less({strictMath: 'on'}))
    .pipe(replace('.bootstrap-iso html', ''))
    .pipe(replace('.bootstrap-iso body', ''))
    .pipe(gulp.dest('css/vendor/'));
});

gulp.task("isolate-bootstrap-css", gulp.series('isolate', 'css'));


// gulp.task("default", gulp.series(gulp.parallel('js', 'js2', 'css', 'img')));
gulp.task("default", gulp.series(gulp.parallel('js', 'js2','img')));
