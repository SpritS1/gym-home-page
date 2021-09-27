 const { src, dest, watch, series } = require('gulp');
 const concat = require('gulp-concat')
 const sass = require('gulp-sass')(require('sass'));

 function buildStyles() {
     return src('./styles/scss/**/*.scss')
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(dest('./styles/css'));
 }

 function watchTask() {
     watch(['./styles/scss/**/*.scss'], buildStyles);
 }

 exports.default = series(buildStyles, watchTask);