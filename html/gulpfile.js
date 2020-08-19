var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config');

gulp.task('default', function(done){
  webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest('./public/js'));
  done();
});
