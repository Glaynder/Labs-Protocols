var gulp = require('gulp'),
	jade = require('gulp-jade');

//В командной строке набрать gulp mytask ля запуска задачи	
gulp.task('mytask', function() {
	
  var variable = {};
 
  return gulp.src('./src/*.jade')
    .pipe(jade({
      locals: variable
    }))
    .pipe(gulp.dest('./dist/'))
});