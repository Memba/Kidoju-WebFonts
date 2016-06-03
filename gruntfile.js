/**
 * Copyright (c) 2013-2014 Memba Sarl. All rights reserved.
 * Sources at https://github.com/Memba
 */

/* jslint node: true */
/* jshint node: true */

'use strict';

module.exports = function(grunt){

    grunt.initConfig({

        // Referencing package.json might be useful to embed a copyright or version number
        // grunt-webfont does not seem to allow it at this stage
        // We might consider using http://www.microsoft.com/typography/PropertiesEditor.mspx
        pkg: grunt.file.readJSON('package.json'),

        // https://github.com/sapegin/grunt-webfont
webfont: {
    icons: {
        src: 'svg/*.svg',
        dest: 'dist/fonts',
        options: {
            font: 'kidoju',
            autoHint: false, // https://github.com/sapegin/grunt-webfont/issues/329#issuecomment-215626139
            hashes: false, // Do not add random string at the end of the font file names (used to avoid caching when changing version)
            stylesheet: 'less',
            engine: 'node',
            // ie7: true, // Commented otherwise Webstorm cannot generate css from less
            fontHeight: 1024,
            descent: 128,
            ascent: 896,
            startCodepoint: 0xF101, // http://www.fileformat.info/info/unicode/block/private_use_area/utf8test.htm
            codepoints: {
                // The following are Arial and other font icons (especially for Rating widget)
                'star': 0x2605, // http://www.fileformat.info/info/unicode/char/2605/index.htm
                'star-o': 0x2606, // http://www.fileformat.info/info/unicode/char/2606/index.htm
                // The following are Kendo UI mobile icons - see http://docs.telerik.com/kendo-ui/controls/hybrid/styles/icons
                'home': 0xe212,
                'search': 0xe21e,
                'settings': 0xe20f,
                // The following are other icons we use in kidoju.mobile.less
                'drawer': 0xe300,
                'history': 0xe305,
                'previous': 0xe30a,
                'next': 0xe310,
                'submit': 0xe315,
                'sync': 0xe31a
            },
            // relativeFontPath: '',
            templateOptions: {
                baseClass: 'kf',
                classPrefix: 'kf-',
                mixinPrefix: 'kf-'
            },
            rename: function(fileName) {
                var name;
                switch(fileName) {
                    case 'svg/auction_hammer.svg':
                        name = 'submit';
                        break;
                    case 'svg/calendar_clock.svg':
                        name = 'datetime';
                        break;
                    case 'svg/cloud_refresh.svg':
                        name = 'sync';
                        break;
                    case 'svg/door_exit.svg':
                        name = 'signout';
                        break;
                    case 'svg/eye.svg':
                        name = 'view';
                        break;
                    case 'svg/find_again.svg':
                        name = 'search-adv';
                        break;
                    case 'svg/gearwheel.svg':
                        name = 'settings';
                        break;
                    case 'svg/history2.svg':
                        name = 'history';
                        break;
                    case 'svg/lifebelt.svg':
                        name = 'support';
                        break;
                    case 'svg/log_in.svg':
                        name = 'signin';
                        break;
                    case 'svg/magnifying_glass.svg':
                        name = 'search';
                        break;
                    case 'svg/megaphone.svg':
                        name = 'report';
                        break;
                    case 'svg/message.svg':
                        name = 'comment';
                        break;
                    case 'svg/navigate_left.svg':
                        name = 'previous';
                        break;
                    case 'svg/navigate_right.svg':
                        name = 'next';
                        break;
                    case 'svg/plus.svg':
                        name = 'create';
                        break;
                    case 'svg/question.svg':
                        name = 'help';
                        break;
                    case 'svg/star2.svg':
                        name = 'star-o';
                        break;
                    case 'svg/trophy.svg':
                        name = 'score';
                        break;
                    default: //home, star
                        name = fileName.replace(/^svg\/(\w+).svg$/, '$1');
                }
                console.log(fileName + '-->' + name);
                return name;
            }
        }
    }
}

    });

    grunt.loadNpmTasks('grunt-webfont');

    grunt.registerTask('default', ['webfont']);

};