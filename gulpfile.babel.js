import gulp from 'gulp';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import browserSync from 'browser-sync';

const sassOptions = { outputStyle: 'expanded', errLogToConsole: true };

exports.sass = () =>
  gulp
    .src('./src/scss/styles.scss')
    .pipe(sass(sassOptions))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.reload({ stream: true }));

exports.images = () =>
  gulp
    .src('./src/images/**/*')
    .pipe(gulp.dest('./dist/images'))
    .pipe(browserSync.reload({ stream: true }));

exports.copy = () =>
  gulp
    .src('./src/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({ stream: true }));

exports.font = () =>
  gulp
    .src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(browserSync.reload({ stream: true }));

exports.javascript = () =>
  gulp
    .src('./src/js/**/*')
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.reload({ stream: true }));

exports.css = () =>
  gulp
    .src('./src/css/**/*')
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({ stream: true }));

exports.minifycss = () =>
  gulp
    .src('./dist/css/styles.css')
    .pipe(cleanCSS({ compatibility: 'ie8', level: 2 }))
    .pipe(gulp.dest('dist/css'));

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './dist',
      index: 'index.html',
    },
    notify: false,
    injectChanges: true,
  });
  gulp.watch('./src/scss/**/*', gulp.series('sass'));
  gulp.watch('./src/scss/**/*', gulp.series('minifycss'));
  gulp.watch('./src/images/**/*', gulp.series('images'));
  gulp.watch('./src/*.html', gulp.series('copy'));
  gulp.watch('./src/fonts/**/*', gulp.series('font'));
  gulp.watch('./src/js/**/*', gulp.series('javascript'));
  gulp.watch('./src/css/**/*', gulp.series('css'));
  gulp.watch('./dist/*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));
