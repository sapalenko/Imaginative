
var gulp = require('gulp');
	sass = require('gulp-sass');

// Styles
/*	gulp.task ('styles', function(){
		return gulp.src('SASS/*.scss')
		.pipe (sass({ style: 'expanded',}))
		.pipe (gulp.dest('CSS'))
		.pipe (notify({massage: 'styles task comlete'}));
	});
	gulp.task('build', ['styles']);
	gulp.task('watch', ['styles']);
	gulp.task('default', ['watch']);*/
	function defaultTask(cb){
		cb();
	}
	exports.default = defaultTask