'use strict';

import gulp from 'gulp';
import deploy from 'gulp-gh-pages';

gulp.task('deploy', () => gulp.src('./dist/**/*').pipe(deploy()));
