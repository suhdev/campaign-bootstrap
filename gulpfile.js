var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	DEBUG = true,
	PATHS = {
		JS:{
			SRC:'./src/*.js',
			DIST:'./js/dist/'
		}
	}; 

gulp.task('compile', function() {
    return DEBUG?gulp.src(PATHS.JS.SRC)
    	.pipe(jshint())
    	.pipe(jshint.reporter(stylish))
    	.pipe(concat('main.min.js'))
    	.pipe(gulp.dest(PATHS.JS.DIST)):gulp.src(PATHS.JS.SRC)
    		.pipe(jshint())
    		.pipe(jshint.reporter(stylish))
    		.pipe(concat('main.min.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest(PATHS.JS.DIST));
});

gulp.task('default',['compile'], function() {
    return gulp.watch(PATHS.JS.SRC,['compile']);
});

gulp.task('build', function() {
    return gulp.src(PATHS.JS.SRC)
    		.pipe(jshint())
    		.pipe(jshint.reporter(stylish))
    		.pipe(concat('main.min.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest(PATHS.JS.DIST));
});