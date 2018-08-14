let gulp = require('gulp');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let minifyCSS = require('gulp-minify-css');


gulp.task('sass', function(){
  return gulp.src('app/scss/style.scss')
 .pipe(sass())
 .pipe(gulp.dest('app/css'))
});

gulp.task('minify-css', function () {
    gulp.src('app/css/style.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', function () {
    gulp.src('app/js/main.js')
    .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
})

gulp.task('build', ['sass', 'minify-css', 'minify-js'], function (){
  console.log('Building files');
})