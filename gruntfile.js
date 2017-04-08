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
                    startCodepoint: 0xf101, // http://www.fileformat.info/info/unicode/block/private_use_area/utf8test.htm
                    codepoints: {
                        // The following are Arial and other font icons (especially for Rating widget)
                        'star': 0x2605, // http://www.fileformat.info/info/unicode/char/2605/index.htm
                        'star-o': 0x2606, // http://www.fileformat.info/info/unicode/char/2606/index.htm
                        // The following are Kendo UI mobile icons - see http://docs.telerik.com/kendo-ui/controls/hybrid/styles/icons
                        'home': 0xe0dd,
                        'search': 0xe0e9,
                        'settings': 0xe0da,
                        'scan': 0xe0db,
                        // The following are other icons we use in kidoju.mobile.less
                        'drawer': 0xe300,
                        'summary': 0xe303,
                        'history': 0xe305,
                        'play': 0xe309,
                        'first': 0xe310,
                        'previous': 0xe311,
                        'next': 0xe312,
                        'last': 0xe313,
                        'submit': 0xe320,
                        'score': 0xe330,
                        'sync': 0xe340,
                        'ear': 0xe360,
                        // The following are social icons
                        // android
                        // apple
                        // blog/blogger
                        'facebook': 0xe510,
                        // feed
                        'google': 0xe515,
                        'linkedin': 0xe520,
                        'live': 0xe525,
                        // pinterest
                        // stumbleupon
                        'twitter': 0xe550,
                        // uservoice
                        // youtube
                        // The following are math input icons
                        // We use unicode where possible - http://xahlee.info/comp/unicode_math_operators.html
                        'sqrt': 0x221a,
                        'cubert': 0x221b,
                        'nthroot': 0x221c,
                        // Otherwise we use custom unicode ranges
                        'frac': 0xe700,
                        'pow': 0xe701,
                        'pow2': 0xe702,
                        'pow3': 0xe703,
                        'subscript': 0xe704,
                        //...
                        'sin': 0xe710,
                        'cos': 0xe711,
                        'tan': 0xe712
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
                            case 'svg/beaker2.svg':
                                name = 'chemistry';
                                break;
                            case 'svg/calendar_clock.svg':
                                name = 'datetime';
                                break;
                            case 'svg/calculator.svg':
                                name = 'basic';
                                break;
                            case 'svg/cloud_refresh.svg':
                                name = 'sync';
                                break;
                            case 'svg/dice.svg':
                                name = 'statistics';
                                break;
                            case 'svg/document_notebook.svg':
                                name = 'summary';
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
                            case 'svg/keyboard_key_0.svg':
                                name = 'keypad';
                                break;
                            case 'svg/lifebelt.svg':
                                name = 'support';
                                break;
                            case 'svg/log_in.svg':
                                name = 'signin';
                                break;
                            case 'svg/logic_and.svg':
                                name = 'logic';
                                break;
                            case 'svg/magnifying_glass.svg':
                                name = 'search';
                                break;
                            case 'svg/media_play.svg':
                                name = 'play';
                                break;
                            case 'svg/megaphone.svg':
                                name = 'report';
                                break;
                            case 'svg/message.svg':
                                name = 'comment';
                                break;
                            case 'svg/navigate_beginning.svg':
                                name = 'first';
                                break;
                            case 'svg/navigate_end.svg':
                                name = 'last';
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
                            case 'svg/portable_barcode_scanner.svg':
                                name = 'scan';
                                break;
                            case 'svg/question.svg':
                                name = 'help';
                                break;
                            case 'svg/star2.svg':
                                name = 'star-o';
                                break;
                            case 'svg/text_field.svg':
                                name = 'textbox';
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