// var gulp  = require('gulp');
// var styleguide = require('devbridge-styleguide');

// gulp.task('start-styleguide', function () {
//   styleguide.startServer();
// });

var gulp        = require('gulp');
var exec        = require('child_process').exec;

gulp.task('start', function () {
    exec('live-server --open=styleguide');
    exec('styleguide start');
    console.log('Style guide server listening on port 8889')
});