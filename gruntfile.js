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
                dest: 'temp/fonts',
                options: {
                    font: 'kidoju',
                    stylesheet: 'less',
                    engine: 'node',
                    //ie7: true, //otherwise Webstorm cannot generate css from less
                    fontHeight: 1024,
                    descent: 128,
                    ascent: 896,
                    startCodepoint: 0xF101, //default
                    codepoints: {
                        'home': 0x2604,
                        'star': 0x2605,
                        'star-o': 0x2606
                    },
                    templateOptions: {
                        baseClass: 'kf',
                        classPrefix: 'kf-',
                        mixinPrefix: 'kf-'
                    },
                    rename: function(fileName) {
                        var name;
                        switch(fileName) {
                            case 'svg/door_exit.svg':
                                name = 'signout';
                                break;
                            case 'svg/find_again.svg':
                                name = 'search-adv';
                                break;
                            case 'svg/log_in.svg':
                                name = 'signin';
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