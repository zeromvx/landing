const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

sass.compiler = require('node-sass');

// optimize images
function img() {
    let source = './src/images/*';

    return src(source)
        .pipe(changed(source))
        .pipe(imagemin())
        .pipe(dest('./build/images/'));
}

// add prexis`s and minify css
function css() {
    let source = './src/css/*';

    return src(source)
        .pipe(changed(source))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(dest('./build/css/'));
}

function js() {
    let source = './src/js/*';

    return src(source)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('./build/js'))
}

function html() {
    let source = './src/*.html';
    return src(source)
        .pipe(changed(source))
        .pipe(dest('./build/'))
}

function sassWatch() {
    let source = './src/sass/**/*.{sass, scss}';

    return src(source)
        .pipe(changed(source))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(dest('./src/css/'));
}

function watchFiles() {
    watch('./src/sass/*', sassWatch);
    watch('./src/*.html', html);
    watch('./src/js/*', js);
    watch('./src/images/*', img);
    watch('./src/css/*', css);
}

exports.watch = watchFiles;

// exports.default = sassWatch;