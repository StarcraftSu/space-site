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

<<<<<<< HEAD
	watch('./app/assets/script/**/*',function(){
=======
	watch('./app/assets/scripts/**/*',function(){
>>>>>>> 7620d92224108d6b9b593e33c64c9e6b2f72bb97
		gulp.start('jsInject');
	})
});


gulp.task('cssInject',['styles'],function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});

gulp.task('jsInject',['scripts'],function(){
	return gulp.src('./app/temp/scripts/app.js')
	.pipe(browserSync.stream());
<<<<<<< HEAD
});
=======
});
>>>>>>> 7620d92224108d6b9b593e33c64c9e6b2f72bb97
