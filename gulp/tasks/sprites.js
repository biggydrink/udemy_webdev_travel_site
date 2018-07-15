let gulp = require('gulp');
let svgSprite = require('gulp-svg-sprite');

let config = {
    mode: {
        css: {
            render: {
                css: {
                    template: './gulp/templates/sprite-template.css'
                }
            }
        }
    }
}

gulp.task('createSprite', function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite'));
});