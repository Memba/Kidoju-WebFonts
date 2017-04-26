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
                        /**********************************************
                         * UNICODE match
                         **********************************************/
                        // MathInput - http://xahlee.info/comp/unicode_math_operators.html
                        'left-par': 0x0028,
                        'right-par': 0x0029,
                        'left-sb': 0x005b,
                        'right-sb': 0x005d,
                        'left-cb': 0x007b,
                        'right-cb': 0x007d,
                        'left-vl': 0x009b, // <-- wrong
                        'right-vl': 0x009d,
                        'pm': 0x00b1, // plusminus
                        'alpha': 0x03b1,
                        'omega-mag': 0x03a9,
                        'sqrt': 0x221a,
                        'cbrt': 0x221b,
                        'nthroot': 0x221c,
                        'keypad': 0x2328,
                        'backspace': 0x232b,
                        'dice': 0x2680,
                        'logic': 0x26ad,
                        // Rating
                        'star': 0x2605, // http://www.fileformat.info/info/unicode/char/2605/index.htm
                        'star-o': 0x2606, // http://www.fileformat.info/info/unicode/char/2606/index.htm
                        /**********************************************
                         * UNICODE custom
                         **********************************************/
                        // Kidoju-WebApp and Kidoju-Mobile
                        'home': 0xe0dd,
                        'search': 0xe0e9,
                        'settings': 0xe0da,
                        'scan': 0xe0db,
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
                        // Social
                        'facebook': 0xe510,
                        'google': 0xe515,
                        'linkedin': 0xe520,
                        'live': 0xe525,
                        'twitter': 0xe550,
                        // MathInput
                        'field': 0xe700,
                        'calculator': 0xe701,
                        'fx': 0xe702,
                        'chemistry': 0xe703,
                        // ...
                        'frac': 0xe710,
                        'subscript': 0xe711,
                        // ...
                        'pow': 0xe721,
                        'pow2': 0xe722,
                        'pow3': 0xe723,
                        'log': 0xe726,
                        'log10': 0xe727,
                        'ln': 0xe728,
                        // ...
                        'sin': 0xe730,
                        'cos': 0xe731,
                        'tan': 0xe732,
                        'arcsin': 0xe733,
                        'arccos': 0xe734,
                        'arctan': 0xe735,
                        // ...
                        'derivative': 0xe740,
                        'partial': 0xe741,
                        'int': 0xe742, // TODO standard unicode
                        'sum': 0xe743, // TODO standard unicode
                        'prod': 0xe744, // TODO standard unicode
                        'lim': 0xe745,
                        // ...
                        'matrix2x2': 0xe750,
                        // Vector drawing
                        cursor: 0xe800,
                        width: 0xe801,
                        dashes: 0xe802
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
                            case 'svg/cloud_refresh.svg':
                                name = 'sync';
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
                                name = 'field';
                                break;
                            case 'svg/trophy.svg':
                                name = 'score';
                                break;
                            default: //home, star
                                name = fileName.replace(/^svg\/([\w\-]+).svg$/, '$1');
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