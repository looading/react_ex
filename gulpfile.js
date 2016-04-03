var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');

var source = require("vinyl-source-stream");
var buffer = require('vinyl-buffer');

var reactify = require('reactify') ;

var config = require('./gulp/config.js');
var reload = browserSync.reload;

gulp.task('server', function() {
	browserSync.init({
		server : {
			baseDir : config.baseDir
		},
		port : 3000
	});
});


gulp.task('browserify', function(){
	var b = browserify({
	    entries: './src/main.js',
	    debug: true,
	    // defining transforms here will avoid crashing your stream
	    transform: [reactify]
	  });
  return b.bundle()
         .pipe(source('bundle.js'))
         .pipe(buffer())
         .pipe(gulp.dest('./dist/'));
});

gulp.task('watch' ,function() {
	gulp.watch(config.js.src, ['browserify']).on('change', function(e) {
		console.log(e.name + ' has changed')
	});
	gulp.watch(config.watch, reload);
});

gulp.task('default', ['server', 'watch']);


