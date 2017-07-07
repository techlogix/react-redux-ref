'use strict';

var gulp = require ('gulp');
var connect = require ('gulp-connect');//runs a local dev server
var server = require ('http-server');
var open = require('gulp-open');//open url in a web-browser

var config={
	port:8080,
	devBaseUrl: 'http://localhost',
	paths:{
		html:'./src/*.html',
		dist: './dist'

	}
}
//start a local develpoment server

gulp.task('connect', function(){
	connect.server({
		root:['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

/**
 * Open Task: get index.html, open it in the browser.
 * Invokes Connect task first (dependencies)
 */
gulp.task('open',['connect'],function(){
	gulp.src('dist/index.html')
		.pipe(open({uri:config.devBaseUrl+':'+config.port+'/'}));
});

/**
 * Get any html files, put them in the destination path
 * Reload using connectll
 */
gulp.task('html',function(){
	gulp.src(config.paths.html)
	.pipe(gulp.dest(config.paths.dist))
	.pipe(connect.reload());
	
});
/**
 * Default
 */
gulp.task('default',['html','open']);