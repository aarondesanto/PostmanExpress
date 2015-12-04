var gulp = require("gulp"),
		browserSync = require('browser-sync').create(),
		stylus = require('gulp-stylus');

gulp.task('stylus', function() { // Compiles styles.styl into css/styles.css
  gulp.src('css/demostyles.styl')
    .pipe(stylus())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
 });

gulp.task('default', ['stylus'],function(){ // Watch for changes and reload
	browserSync.init({
		server: "."
	});
	gulp.watch("css/demostyles.styl", ['stylus']);
	gulp.watch("index.html").on('change', browserSync.reload);
});
