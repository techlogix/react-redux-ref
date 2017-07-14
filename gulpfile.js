'use strict';
/**
 * Gulp recipes are available 

 * https://gulpjs.org/recipes/
 * https://www.npmjs.com/package/eslint-config-airbnb
 * (using latest packagesgi)
 */

var gulp = require ('gulp');
var connect = require ('gulp-connect');//runs a local dev server
var server = require ('http-server');
var open = require('gulp-open');//open url in a web-browser
var browserify= require('browserify');//Bundles JS
var reactify = require('reactify');// transforms React JSX to JS
var source = require ('vinyl-source-stream'); // use conventional text streams with Gulp
var concat = require ('gulp-concat');// concatenates files
var eslint = require('gulp-eslint');// Lint JS files, including JSX

var config={
	port:8080,
	devBaseUrl: 'http://localhost',
	paths:{
		html:'./src/*.html',
		js: './src/**/*.js',
		dist: './dist',
		mainJS: './src/main.js',
		css:[
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
		]

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

gulp.task('js', function(){
	 browserify(config.paths.mainJS)
	.transform(reactify)
	.bundle()
	.on('error', console.error.bind(console))
	.pipe(source('bundle.js'))
	.pipe(gulp.dest(config.paths.dist+'/scripts'))
	.pipe(connect.reload());
});

/**
 * Concatanate css
 */
gulp.task('css', function(){
	gulp.src(config.paths.css)
	.pipe(concat('bundle.css'))
	.pipe(gulp.dest(config.paths.dist+'/css'));
});

/**
 * Linting
 * Needs to return results so that the output of the linting can be seen
 */
gulp.task('lint',function(){
	return gulp.src([config.paths.js,'!node_modules/**'])
		.pipe(eslint({configFile:'eslint_config.json'}))
		.pipe(eslint.format());
});

/**
 * Watch paths, run ['tasks'] on changes
 */
gulp.task('watch',function(){
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js','lint']);
});

/**
 * Default
 */
gulp.task('default',['html','open','js','lint','css','watch']);