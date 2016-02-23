var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require("gulp-uglify");
var ngAnnotate = require("gulp-ng-annotate");
var coffee = require("gulp-coffee");
var gutil = require("gulp-util");
var less = require("gulp-less");

gulp.task('less', function() {
    gulp.src('app/styles/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('app/styles/'))
});


gulp.task('coffee', function() {
    gulp.src('app/scripts/**/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('app/scripts'))
});

gulp.task('js', function () {
    gulp.src(['app/scripts/router.js', 'app/scripts/**/*.js'])
        .pipe(concat('app/app.js'))
        .pipe(ngAnnotate())
//        .pipe(uglify())
        .pipe(gulp.dest('.'))
});

gulp.task('default', ['coffee', 'js', 'less'], function () {
    gulp.watch('app/scripts/**/*.coffee', ['coffee'])
    gulp.watch('app/scripts/**/*.js', ['js'])
    gulp.watch('app/styles/*.less', ['less'])
});