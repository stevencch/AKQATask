/// <binding  AfterBuild='default' />
var gulp = require('gulp');
var del = require('del');
var tslint = require('gulp-tslint');

var paths = {
    scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map', 'scripts/**/*.html', 'scripts/**/*.css'],
    libs: [
        'node_modules/@angular/**/*.umd.js',

        // other libraries
        'node_modules/rxjs/**/*.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
        'node_modules/plugin-typescript/lib/plugin.js',
        'node_modules/typescript/lib/typescript.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/underscore/underscore.js',

    ]
};

gulp.task('clean', function () {
    return del(['wwwroot/js/**/*']);
});

gulp.task('lib', ['clean'], function () {

    gulp.src(paths.libs).pipe(gulp.dest(function (file) {
        //process.stdout.write(file.base.replace('node_modules','wwwroot/js/lib'));
        return file.base.replace('node_modules', 'wwwroot/js/lib');
    }));
});

gulp.task('default', ['tslint'], function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/js'))
});


gulp.task('watch', function () {
    return gulp.watch(paths.scripts, ['default']);
});

gulp.task('tslint', function () {
    return gulp.src('scripts/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report());
});


