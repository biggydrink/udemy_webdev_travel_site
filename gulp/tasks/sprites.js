/*
Sets up sprite-related gulp tasks with svgSprite
svgSprite uses mustache template for its config

svgSprite github: https://github.com/jkphl/svg-sprite
mustache.js github: https://github.com/janl/mustache.js
mustache.js man page: http://mustache.github.io/mustache.5.html
*/

let gulp = require('gulp');
let svgSprite = require('gulp-svg-sprite');
let rename = require('gulp-rename');
let del = require('del');

// this config says we're working on a css file, and we'll render it with a css template located in the given path
let config = {
    mode: {
        css: {
            sprite: 'sprite.svg'
            , render: {
                css: {
                    template: './gulp/templates/sprite-template.css'
                }
            }
        }
    }
}

/*
This task uses the config created above to take our sprite icons, lump them together into one .svg file, 
and create a css file with class rules we can use to separate back out the individual icons
*/
gulp.task('createSprite', ['beginClean'], function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite'));
});

/*
This task deletes the app/temp/sprite folder
It is (re)created in the createSprite task
*/
gulp.task('beginClean', function() {
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

/*
This task takes our auto-generated css file and copies it to the modules folder, with an extra underscore
createSprite is a dependency
*/
gulp.task('copySpriteCSS', ['createSprite'], function() {
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename({
            prefix: "_"
        }))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

/*
This task takes our auto-generated sprite svg file and copies it to the images/sprites folder
*/
gulp.task('copySpriteSVG', ['createSprite'], function() {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('endClean', ['copySpriteSVG', 'copySpriteCSS'], function() {
    return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteSVG', 'copySpriteCSS', 'endClean']);