const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const groupMedia = require('gulp-group-css-media-queries');
const del = require('del');

const srcPath = 'src/';
const distPath = 'dist/';

const path = {
    build: {
        html: distPath,
        css: distPath + 'css/',
        js: distPath + 'js/',
        img: distPath + 'img/',
        fonts: distPath + 'fonts/'
    },
    src: {
        html: srcPath + 'html/pages/*.html',
        css: srcPath + 'scss/main.scss',
        js: srcPath + 'js/main.js',
        img: srcPath + 'img/**/*.{jpg,png,svg,gif,ico,webp}',
        fonts: srcPath + 'fonts/**/*.{woff,woff2,ttf,otf,eot}'
    },
    watch: {
        html: srcPath + 'html/**/*.html',
        css: srcPath + 'scss/**/*.scss',
        js: srcPath + 'js/**/*.js',
        img: srcPath + 'img/**/*.{jpg,png,svg,gif,ico,webp}',
        fonts: srcPath + 'fonts/**/*.{woff,woff2,ttf,otf,eot}'
    },
    clean: './' + distPath
};

function serve() {
    browserSync.init({
        server: {
            baseDir: './' + distPath
        }
    });
}

function html() {
    return gulp.src(path.src.html)
        .pipe(fileinclude())
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.stream());
}

function css() {
    return gulp.src(path.src.css)
        .pipe(sass())
        .pipe(groupMedia())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: true
        }))
        .pipe(gulp.dest(path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.stream());
}

function js() {
    return gulp.src(path.src.js)
        .pipe(fileinclude())
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.stream());
}

function images() {
    return gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.stream());
}

function fonts() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(browserSync.stream());
}

function clean() {
    return del(path.clean);
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
    gulp.watch([path.watch.fonts], fonts);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts));
const watch = gulp.series(build, gulp.parallel(watchFiles, serve));

exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.clean = clean;
exports.build = build;
exports.default = watch;
