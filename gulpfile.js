var gulp = require('gulp');
var sass = require('gulp-sass');
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

// Default task
gulp.task('default', function() {

});
