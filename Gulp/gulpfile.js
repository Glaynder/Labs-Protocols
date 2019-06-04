var gulp = require('gulp');
var sass = require('gulp-sass');

function css_style(done){

  gulp.src('./scss/style.scss')
   .pipe(sass({errorLogToConsole: true}))
   .on('error', console.error.bind(console))
   .pipe( gulp.dest('./css/') );

  done();
}

gulp.task(css_style);

///
