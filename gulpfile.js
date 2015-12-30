var gulp = require('gulp');
var watch=require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('webserver',function () {
  connect.server({
    port:8000,
    livereload:true,
  });
});

gulp.task('livereload',function () {
  watch(['d3js/*.html']).pipe(connect.reload());
});

gulp.task('default',['webserver','livereload']);
