const {
    src,
    dest,
    parallel,
    series,
    watch,
    task
} = require('gulp')
const browserSync = require('browser-sync');
const server = browserSync.create();
const sass = require('gulp-sass')(require('sass'));

const paths = {
    scss: {src: './css/*.scss', dest: './css'},
    data: {src: './data/', dest: './data/'},
    js: {src: './*.js', dest: '.'},
    html: {src: './*.html', dest: '.'}
};

task('sass', function() {
    return src(paths.scss.src)
        .pipe(sass({
            includePaths: [paths.scss],
            outputStyle: 'compressed'
        }).on('error', function(err) {
            console.log(err.message);
            this.emit('end');
        }))
        .pipe(dest(paths.scss.dest))
        .pipe(browserSync.stream());
});

task('browserSync', function() {
    browserSync.init({
        server: './',
        notify: false
    });
})

task('watchFiles', function() {
    watch(paths.scss.src, parallel('sass')).on('change', browserSync.reload);
    watch(paths.html.src).on('change', browserSync.reload);
    watch(paths.js.src).on('change', browserSync.reload);
});

const watching = parallel('watchFiles', 'browserSync')

exports.default = watching