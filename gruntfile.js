/**
 * Copyright (c) 2013-2014 Memba Sarl. All rights reserved.
 * Sources at https://github.com/Memba
 */

/* jslint node: true */
/* jshint node: true */

'use strict';

module.exports = function(grunt){

    grunt.initConfig({

        //Referencing package.json might be useful to embed a copyright or version number
        //grunt-webfont does not seem to allow it at this stage
        //We might consider using http://www.microsoft.com/typography/PropertiesEditor.mspx
        pkg: grunt.file.readJSON('package.json'),

        //https://github.com/sapegin/grunt-webfont
webfont: {
    icons: {
        src: 'svg/*.svg',
        dest: 'dist/fonts',
        options: {
            font: 'kidoju',
            hashes: false, //do not add random string at the end of the font file names (used to avoid caching when changing version)
            stylesheet: 'less',
            engine: 'node',
            //ie7: true, //Commented otherwise Webstorm cannot generate css from less
            fontHeight: 1024,
            descent: 128,
            ascent: 896,
            startCodepoint: 0xF101, //http://www.fileformat.info/info/unicode/block/private_use_area/utf8test.htm
            codepoints: {
                //TODO: maybe we should specify codepoints for all icons otherwise adding new icons might change the correspondence
                'star': 0x2605, //http://www.fileformat.info/info/unicode/char/2605/index.htm
                'star-o': 0x2606 //http://www.fileformat.info/info/unicode/char/2606/index.htm
            },
            templateOptions: {
                baseClass: 'kf',
                classPrefix: 'kf-',
                mixinPrefix: 'kf-'
            },
            rename: function(fileName) {
                var name;
                switch(fileName) {
                    case 'svg/calendar_clock.svg':
                        name = 'datetime';
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
                    case 'svg/lifebelt.svg':
                        name = 'support';
                        break;
                    case 'svg/log_in.svg':
                        name = 'signin';
                        break;
                    case 'svg/megaphone.svg':
                        name = 'report';
                        break;
                    case 'svg/message.svg':
                        name = 'comment';
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