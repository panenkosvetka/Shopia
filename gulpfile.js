var gulp = require('gulp'),
 sass = require('gulp-sass'),
 watch = require('gulp-watch'),
 concat = require('gulp-concat'),
 autoprefixer = require('gulp-autoprefixer'),
 browserSync = require('browser-sync'),
 uglify = require('gulp-uglify'),
 imagemin = require('gulp-imagemin'),
 minifycss = require('gulp-minify-css');
 


var markup = './markup';
var dist = './dist';

var markupPaths = {
    html: [markup + '/**/*.html'],
    js: [markup + '/assets/js/**/*.js'],
    scss: [markup + '/assets/scss/**/*.scss']
}

gulp.task('html', function() {
    return gulp.src(markupPaths.html)
        .pipe(gulp.dest('./dist'))
         .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function() {
    return gulp.src(markupPaths.js)
        .pipe(uglify())
        .pipe(concat('assets.js'))
        .pipe(gulp.dest('./dist/assets/js'))
         .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('sass', function() {
    return gulp.src(markupPaths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifycss())
        .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
        }))
        .pipe(gulp.dest('./dist/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('images',  function () {
    return gulp.src('.markup/assets/images/**/*.+(png|jpg|svg)')
        .pipe(imagemin({
            multipass: true,
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}],
            optimizationLevel: 3
        }))
        .pipe(gulp.dest('./dist/assets/images'))
});

gulp.task('fonts', function() {
    return gulp.src('.markup/assets/fonts/**/*.*')
    .pipe(gulp.dest('./dist/assets/fonts'))
})


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './dist'
      },

    });
});
gulp.task('watch', function() {
    watch(markupPaths.html, function() {
        gulp.start('html');
    });
    watch(markupPaths.scss, function() {
        gulp.start('sass');
    });
    watch(markupPaths.js, function() {
        gulp.start('js');
    });
});


gulp.task('default', ['watch', 'browser-sync','html','sass','js']);

gulp.task('go',['fonts','images']);



