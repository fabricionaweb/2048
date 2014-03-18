// Plugins
var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    gutil  = require('gulp-util'),
    lr     = require('gulp-livereload');

// Compile SASS files
gulp.task('sass', function() {
    gulp.src(['style/main.scss'])
        .pipe(sass({outputStyle: 'compressed'})
            .on('error', gutil.log)
            .on('error', gutil.beep)
        )
        .pipe(gulp.dest('style/'));
});

// Minify JS
gulp.task('uglify', function() {
    gulp.src([
                'js/animframe_polyfill.js',
                'js/keyboard_input_manager.js',
                'js/html_actuator.js',
                'js/grid.js',
                'js/tile.js',
                'js/local_score_manager.js',
                'js/game_manager.js',
                'js/application.js'
            ])
        .pipe(concat('all.min.js')
            .on('error', gutil.log)
            .on('error', gutil.beep)
        )
        .pipe(uglify()
            .on('error', gutil.log)
            .on('error', gutil.beep)
        )
        .pipe(gulp.dest('js/'));
});

// Watch Our Files
gulp.task('watch', function() {
    gulp.watch(['style/main.scss'], ['sass']);
    gulp.watch(['js/*.js', '!js/all.min.js'], ['uglify']);

    var server = lr();

    gulp.watch(['style/main.css', 'js/all.min.js']).on('change', function(file) {
        server.changed(file.path);
    });
});

// Default gulp task to run
gulp.task('default', ['sass', 'uglify', 'watch']);