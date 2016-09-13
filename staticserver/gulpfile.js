var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
//file path
var DISCT_PATH = 'public/dist';
var SCRIPT_PATH = 'public/scripts/**/*.js'
var CSS_PATH = 'public/css/**/*.css';
//Styles -> css
/*gulp.task('styles', function() {
    console.log('starting styles task');
    //return gulp.src(CSS_PATH)
      return gulp.src(['public/css/reset.css',CSS_PATH])//use array to specify which css load first
      .pipe(plumber(function(err){
        console.log("styles task error");
        console.log(err);
        this.emit('end');
      }))
      .pipe(sourcemaps.init())
      .pipe(autoprefixer())
      .pipe(concat('styles.css'))
      .pipe(minifyCss())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(DISCT_PATH))
      .pipe(livereload());
});*/

//style for sass
gulp.task('styles', function() {
    console.log('starting styles task');
    //return gulp.src(CSS_PATH)
      return gulp.src('public/scss/styles.scss')//use array to specify which css load first
      .pipe(plumber(function(err){
        console.log("styles task error");
        console.log(err);
        this.emit('end');
      }))
      .pipe(sourcemaps.init())
      .pipe(autoprefixer())
      /*.pipe(concat('styles.css'))
      .pipe(minifyCss())*/
      .pipe(sass({
        outputStyle: 'compressed'
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(DISCT_PATH))
      .pipe(livereload());
});

//Scripts -> js
gulp.task('scripts', function() {
    console.log('starting scripts task');

    return gulp.src(SCRIPT_PATH)
        .pipe(uglify())
        .pipe(gulp.dest(DISCT_PATH))
        .pipe(livereload());
});

//images -> compress img

//default -> bootstrap other tasks
gulp.task('default', function() {
    console.log('starting default task');
});

gulp.task('watch', function() {
    console.log('starting watch task');
    require('./server.js');
    livereload.listen();
    gulp.watch(SCRIPT_PATH, ['scripts']);
    gulp.watch(CSS_PATH, ['styles']);
});
