let gulp = require('gulp');
let watch = require('gulp-watch');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssvars = require('postcss-simple-vars');
let nested = require('postcss-nested');
let cssImport = require('postcss-import');

gulp.task('default', function() {
    console.log("Hooray, you created a Gulp task.");
});

gulp.task('html', function() {
    console.log('Imagine something useful being done to HTML...');
});

gulp.task('styles', function() { 
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
})

gulp.task('watch', function() {

    // when done this way, watch starts, then html runs when index.html is saved.
    watch('./app/index.html', function() {
       gulp.start('html');
    });

    /*
    when done this way, watch starts, then html starts and finishes, then watch finishes setting up. watch does nothing when index.html is saved
    watch('./app/index.html', gulp.start('html'));
    */

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});