const {src, task}= require('gulp');
const ghPages = require('gulp-gh-pages');
import gulp from "gulp";

gulp.task('deploy', () => src('./dist/**/*').pipe(ghPages()));