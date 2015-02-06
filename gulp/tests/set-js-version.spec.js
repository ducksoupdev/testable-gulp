(function() {
    'use strict';

    var expect = require('chai').expect;
    var setJsVersion = require('../lib/set-js-version');
    var fs = require('fs');

    describe('When setting the js version', function() {
        var config, modifiedContents;
        beforeEach(function() {
            var fileContents = 'angular.module(\'app.modules.global\')\n' +
                '.constant(\'appGlobalVersion\', {\n' +
                '    APP_VERSION: \'0.5.5.51622\'\n' +
                '});\n' +
                '\';\n';

            fs.writeFileSync('/tmp/version.js', fileContents);

            config =  {
                paths: {
                    root_path: '/tmp',
                    web_version_path: '/version.js'
                },
                buildInfo: {
                    version: '0.26.1.51025'
                }
            };

            setJsVersion.run(config);

            modifiedContents = fs.readFileSync('/tmp/version.js', { encoding: 'utf8' });
        });

        afterEach(function() {
            fs.unlinkSync('/tmp/version.js');
        });

        it('should set the correct version', function() {
            expect(modifiedContents).to.contain('APP_VERSION: \'0.26.1.51025\'');
        });
    });
})();