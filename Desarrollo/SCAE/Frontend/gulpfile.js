'use strict';

var gulp        = require('gulp');
var browserify  = require('browserify');
var uglify      = require('gulp-uglify');
var source      = require('vinyl-source-stream');
var streamify   = require('gulp-streamify');
var flatten     = require('gulp-flatten');
var gls         = require('gulp-live-server');
var stringify   = require('stringify');
var sass        = require('gulp-sass');
var rename      = require('gulp-rename');

var config = {
    client : {
        js : {
            src : './src/app/app.js',
            dest : './build/'
        },
        sass : {
            src : './src/assets/sass/main.scss',
            dest : './build/'
        },
        images : {

        }
    }
};

var vendors = {
    styles : {
        src: [
        './node_modules/angular-material/angular-material.scss'
        ],
        dest : './src/assets/sass/vendors/'
    }
}

gulp.task('build-scripts',function(){
    browserify(config.client.js.src)
    .transform('babelify',{ presets : ['es2015']})
    .transform('stringify',{ appliesTo : { includeExtensions : ['.html'] } })
    .bundle()
    .pipe(source(config.client.js.src))
    //.pipe(streamify(uglify()))
    .pipe(rename('bundle.js'))
    .pipe(flatten())
    .pipe(gulp.dest(config.client.js.dest));
});

gulp.task('copy-vendors-styles',function(){
    return gulp.src(vendors.styles.src)
    .pipe(flatten())
    .pipe(gulp.dest(vendors.styles.dest));
})

gulp.task('build-styles',['copy-vendors-styles'],function(){
    gulp.src(config.client.sass.src)
    //.pipe(streamify(uglify()))
    .pipe(sass().on('error',sass.logError))
    .pipe(rename('styles.css'))
    .pipe(flatten())
    .pipe(gulp.dest(config.client.sass.dest));
});

gulp.task('build',['build-styles','build-scripts']);

gulp.task('watch',['build'],function(){    
    var server = gls.static('./',4000);

    server.start();

    gulp.watch('./src/app/**/*.js',['build-scripts']);

    gulp.watch('./src/assets/sass/**/*.scss',['build-styles']);

    gulp.watch('./src/app/**/*.html',['build-scripts']);
    
    gulp.watch('./build/bundle.js',function(file){
        server.notify.apply(server,[file]);
    })

    gulp.watch('./build/styles.css',function(file){
        server.notify.apply(server,[file]);
    })

});