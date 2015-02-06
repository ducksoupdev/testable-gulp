(function () {
    'use strict';

    var gulp = require('gulp');
    var setJsVersion = require('../lib/set-js-version');
    var config = require('../../config');

    gulp.task('setjsversion', function() {
        return setJsVersion.run(config);
    });
})();
