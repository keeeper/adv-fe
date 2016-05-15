var destDir = 'bin';
var gulp = require('gulp');
var bower = require('gulp-bower');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var less = require('gulp-less');
var argv = require('yargs').argv;
var debug = require( 'gulp-debug' );
var clean = require( 'gulp-clean' );
var livereload = require('gulp-livereload');
var csscomb = require('gulp-csscomb');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var runSequence = require('run-sequence');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');


gulp.task('default', ['libs', 'build', 'css', 'images', 'js']);


gulp.task('copy-static', function() {
    return gulp.src(['images/**/*.{png,jpg,svg}', '*.html', '**.*.js'])
        .pipe( gulp.dest(destDir) );
});

gulp.task('bower', function() {
    return bower('libs');
});


gulp.task('css', function() {
    return gulp.src('styles/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulpif(argv.prod, sourcemaps.write()))
        .pipe(gulp.dest(destDir + '/static'));
});

gulp.task('js', function() {
    return gulp.src('js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulpif(argv.prod, sourcemaps.write()))
        .pipe(gulp.dest(destDir));
});


gulp.task('build', ['copy-static', 'css']);


gulp.task('libs', function (){
    return gulp.src(['libs/**/*.min.js'])
        .pipe( gulp.dest(destDir + '/libs') );
});


gulp.task('images', function (){
    return gulp.src(['**/*.{png,jpg,svg}', '!node_modules/**', '!libs/**', '!bin/**'])
        .pipe( gulp.dest(destDir) );
});


gulp.task('html', function (){
    return gulp.src(['**/*.html', '!node_modules/**', '!libs/**', '!bin/**'])          
        .pipe(gulpif(argv.prod, htmlmin({collapseWhitespace: true})))
        .pipe( gulp.dest(destDir) );
});


gulp.task('clean', function () {
    return gulp.src(destDir)
        .pipe(clean({force: true}))
        .pipe(gulp.dest(destDir));
})



gulp.task('watch', function () {
    gulp.watch('images/**/*.{png,jpg,svg}', [ 'images' ] );
    gulp.watch('**/*.html', [ 'html' ] );
    gulp.watch('**/*.less', [ 'css' ] );
    gulp.watch('**/*.js', [ 'js' ] );
} );







gulp.task('reload-page', function () {
});

gulp.task('clean', function (cb) {
    return gulp.src( destDir + '/*', { read: false } )
        .pipe( clean( { force: true } ) );
});


gulp.task('watch', function () {
    gulp.watch('**/*.@(less)', [ 'css' ] );
} );


//CODESTYLE
gulp.task('csscomb', function () {
    return gulp.src('styles/*.less')
        .pipe(csscomb().on('error', handleError))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
});

gulp.task('htmlhint', function () {
});

gulp.task('jscs', function () {
});

gulp.task('jshint', function () {
});

gulp.task('style', function () {
});

//CODESTYLE//

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
    return this;
}

