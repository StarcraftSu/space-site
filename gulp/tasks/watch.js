var gulp = require("gulp");                
var watch = require("gulp-watch");                  //gulp监听 
var browserSync=require('browser-sync').create();   //网页同步

gulp.task('watch',function(){
	notify:false,
	browserSync.init({
		server:{
			baseDir:"app"
		}
	});

	watch("./app/index.html",function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*',function(){
		gulp.start('cssInject');
	});
});


gulp.task('cssInject',['styles'],function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});

