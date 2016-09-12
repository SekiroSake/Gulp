var gulp = require('gulp');
var uglify = require('gulp-uglify');
//Styles -> css
gulp.task('styles', function(){
  console.log('starting styles task');
});

//Scripts -> js
gulp.task('scripts', function(){
  console.log('starting scripts task');
  return gulp.src('public/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'));
});

//images -> compress img

//default -> bootstrap other tasks
gulp.task('default', function(){
  console.log('starting default task');
});
