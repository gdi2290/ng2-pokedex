var gulp = require('gulp');

gulp.task('deps:copy' ,function(){
   return gulp.src([
       'node_modules/systemjs/dist/system.js',
       'node_modules/angular2/bundles/angular2-polyfills.min.js',
       'system.config.js',
       'src/worker-loader.js'
   ])
     .pipe(gulp.dest('dist/lib')) 
});

