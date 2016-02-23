var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var notify = require('gulp-notify');
var minify = require('gulp-minify');
var concat = require('gulp-concat');

var SCSS_FILES = 'src/sass/**/*.scss';
var JS_FILES = 'src/js/**/*.js';
var ES6_FILES = 'src/js/es6/**/*.js';

var errorHandler = function(error) {
    notify.onError({
        title: 'Task Failed [' + error.plugin + ']',
        message: 'Oops! Something went north!',
        sound: true
    })(error);

    // Prevent gulp watch from stopping
    this.emit('end');
};

gulp.task('sass', function() {
    return gulp.src(SCSS_FILES)
        .pipe(sass())
        .on('error', errorHandler)
        .pipe(gulp.dest('public/css/'))
        .pipe(notify({
            message: "SCSS completed"
        }));
});

gulp.task('concat-css', function() {
    return gulp.src(SCSS_FILES)
        .pipe(sass())
        .pipe(concat('compiled.scss'))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('concat-js', function() {
    return gulp.src(JS_FILES)
        .pipe(concat('compiled.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('es6', function() {
    return gulp.src(ES6_FILES)
        .pipe(babel())
        .on('error', errorHandler)
        .pipe(gulp.dest('public/js/'))
        .pipe(notify({
            message: "ES6 Compiled"
        }));
});

gulp.task('minify-js', function() {
    return gulp.src(JS_FILES)
        .pipe(concat('compiled.js'))
        .pipe(minify())
        .pipe(gulp.dest('public/js/'));
});

// Default task
gulp.task('default', ['sass', 'es6']);

// Watch files
gulp.task('watch', function() {
    gulp.watch(SCSS_FILES, ['sass']);
    gulp.watch(ES6_FILES, ['es6']);
});
