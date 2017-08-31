var gulp = require("gulp");
var watch = require("gulp-watch");
var postcss=require("gulp-postcss");
var autoprefixer=require("autoprefixer");
var cssvars=require("postcss-simple-vars");
var nested=require('postcss-nested');
var cssImport=require('postcss-import');

gulp.task('default',function(){
	console.log('gulp task created');
});

gulp.task('html',function(){
	console.log('Silent watcher is starring at you!');
});

//gulp.src()
//gulp.dest()
//pipe()
//PostCSS filter

gulp.task('styles',function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, cssvars, autoprefixer, nested]))
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function(){
	watch("./app/index.html",function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*',function(){
		gulp.start('styles');
	});
});




