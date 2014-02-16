var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	bytediff = require('gulp-bytediff'),
	concat = require('gulp-concat'),
	csscomb = require('gulp-csscomb'),
	csslint = require('gulp-csslint'),
	csso = require('gulp-csso'),
	jscs = require('gulp-jscs'),
	jshint = require('gulp-jshint'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	util = require('gulp-util'),
	watch = require('gulp-watch');

var conf = require('./conf/gulp.json');

gulp.task('css', function () {
	gulp.src(conf.sassPath + conf.sassMainFileName)
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', 'ie 9'))
		.pipe(rename(conf.cssMainMinFileName))
		.pipe(bytediff.start())
		.pipe(csso())
		.pipe(bytediff.stop())
		.pipe(gulp.dest(conf.cssPath));
});

gulp.task('js', function () {
	gulp.src([conf.jsPath + '*.js', '!' + conf.jsPath + 'main.min.js'])
		.pipe(concat(conf.jsMainMinFileName))
		.pipe(bytediff.start())
		.pipe(uglify())
		.pipe(bytediff.stop())
		.pipe(gulp.dest(conf.jsPath));
});

gulp.task('csslint', function () {
	gulp.src(conf.cssPath + conf.cssMainFileName)
		.pipe(csslint(conf.cssLintConfigPath))
		.pipe(csslint.reporter());
});

gulp.task('jslint', function () {
	gulp.src(conf.jsPath + '**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'));
});

gulp.task('default', ['css', 'js']);