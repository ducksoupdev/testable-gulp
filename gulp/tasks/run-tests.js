(function () {
    'use strict';

    var gulp = require('gulp'),
        mocha = require('gulp-mocha');

    gulp.task("test", function() {
        return gulp.src("./gulp/tests/*.spec.js", { read: false })
            .pipe(mocha());
    });
})();
