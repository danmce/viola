/// <vs AfterBuild='staging, default' />
module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        ngconstant: {
            options: {
                name: 'config',
                wrap: '"use strict";\n\n{%= __ngModule %}',
                space: '  '
            },
            development: {
                options: {
                    dest: 'scripts/config.js',
                },
                constants: {
                    ENV: {
                        name: 'development',
                        apiEndpoint: 'staging'
                    }
                }
            },
            production: {
                options: {
                    dest: 'scripts/config.js',
                },
                constants: {
                    ENV: {
                        name: 'production',
                        apiEndpoint: 'live'
                    }
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['app.js', 'scripts/Controllers/*.js'],
                dest: 'scripts/build/app.js',
                stripBanners: true
            },
        },
        uglify: {
            js: {
                files: {
                    'scripts/build/app.min.js': 'scripts/build/app.js'
                }
            }
        },
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-constant');

    grunt.registerTask('staging', [
        'ngconstant:development'
    ]);

    grunt.registerTask('production', [
        'ngconstant:production'
    ]);

    // Default task
    grunt.registerTask('default', ['concat', 'uglify']);

};

