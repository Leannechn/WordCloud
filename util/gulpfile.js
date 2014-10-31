/**
* author:chenhn
**/
var gulp = require('gulp'); 

var changed = require('gulp-changed');
var refresh = require('gulp-livereload');  
var lr = require('tiny-lr');  
var server = lr();


gulp.task('default', function () {
    var server = refresh();
    gulp.watch('E:/works/eclipse-workspace/lngaweb/src/main/webapp/**/*.*', function (file) {
        server.changed(file.path);
    });
});