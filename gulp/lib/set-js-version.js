(function () {
    'use strict';

    var fs = require('fs');

    module.exports.run = function(config) {
        var path = config.paths.root_path + config.paths.web_version_path;
        var fileContents = fs.readFileSync(path, { encoding: 'utf8' });
        fileContents = fileContents.replace(/APP_VERSION:\s?'[^']+'/, 'APP_VERSION: \'' + config.buildInfo.version + '\'');
        fs.writeFileSync(path, fileContents);
    };
})();
