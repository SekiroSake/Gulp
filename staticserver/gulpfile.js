var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
//file path
var SCRIPT_PATH = 'public/scripts/**/*.js'

//Styles -> css
gulp.task('styles', function(){
  console.log('starting styles task');
});

//Scripts -> js
gulp.task('scripts', function(){
  console.log('starting scripts task');

  return gulp.src(SCRIPT_PATH)
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'))
    .pipe(livereload());
});

//images -> compress img

//default -> bootstrap other tasks
gulp.task('default', function(){
  console.log('starting default task');
});

gulp.task('watch', function(){
    console.log('starting watch task');
    require('./server.js');
    livereload.listen();
    gulp.watch(SCRIPT_PATH, ['scripts']);
});
