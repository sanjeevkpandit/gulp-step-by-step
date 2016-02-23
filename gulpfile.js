var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var minify = require('gulp-minify');
var concat = require('gulp-concat');

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css/'));
});

gulp.task('concat-css', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(concat('compiled.scss'))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('concat-js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('compiled.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('es6', function() {
    return gulp.src('src/js/es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('public/js/'));
});

gulp.task('minify-js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('compiled.js'))
        .pipe(minify())
        .pipe(gulp.dest('public/js/'));
});

// Default task
gulp.task('default', function() {

});
