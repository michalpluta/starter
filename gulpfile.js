var outputPath = './build';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
// var minify = require('gulp-minify');

function compile(watch) {
    var bundler = watchify(browserify('./source/js/app.js', { debug: true }).transform(babel));

    function rebundle() {
        bundler.bundle()
            .on('error', function(err) { console.error(err); this.emit('end'); })
            .pipe(source('js/app.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write('./'))
            // .pipe(minify())
            .pipe(gulp.dest(outputPath));
    }

    if (watch) {
        bundler.on('update', function() {
            console.log('-> bundling...');
            rebundle();
        });
    }

    rebundle();
}

function watch() {
    return compile(true);
}

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch', 'copy', 'copy:watch', 'sass', 'sass:watch']);

gulp.task('copy', function() {
    gulp.src('./source/*.html')
        .pipe(gulp.dest(outputPath));

    gulp.src('./source/extra/**/*.*')
        .pipe(gulp.dest(outputPath + '/extra'));

    gulp.src('./source/js/**/*.html')
        .pipe(gulp.dest(outputPath + '/js'));
});

gulp.task('copy:watch', function() {
    gulp.watch('./source/*.html', ['copy']);
    gulp.watch('./source/extra/**/*.*', ['copy']);
    gulp.watch('./source/js/**/*.html', ['copy']);
});


gulp.task('sass', function () {
  gulp.src('./source/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: 'scss'
    }).on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 2 version', 'safari 5', 'ie 9', 'ff 17', 'opera 12.1', 'ios 6', 'android 4'],
          cascade: false
      }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(outputPath + '/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./source/css/**/*.scss', ['sass']);
});