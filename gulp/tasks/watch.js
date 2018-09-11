let gulp = require('gulp');
let watch = require('gulp-watch');
let browserSyncCreate = require('browser-sync').create();

gulp.task('watch', function() {

    browserSyncCreate.init({
        //notify: false, // uncomment to take away upper-right corner notification box
        server: {
            baseDir: "app"
        }
    });

    // when done this way, watch starts, then html runs when index.html is saved.
    watch('./app/index.html', function() {
       browserSyncCreate.reload();
    });

    /*
    when done this way, watch starts, then html starts and finishes, then watch finishes setting up. watch does nothing when index.html is saved
    watch('./app/index.html', gulp.start('html'));
    */
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');

    });

    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSyncCreate.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSyncCreate.reload();
})
