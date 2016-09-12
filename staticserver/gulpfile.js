var gulp = require('gulp');
var uglify = require('gulp-uglify');

//file path
var SCRIPT_PATH = 'public/scripts/**/*.js'

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

gulp.task('watch', function(){
    console.log('starting watch task');
    require('./server.js');
    gulp.watch(SCRIPT_PATH, ['scripts']);
});
