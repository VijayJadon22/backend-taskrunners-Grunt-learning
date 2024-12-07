module.exports = function (grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Uglify task configuration for JavaScript files
        uglify: {
            target: {
                files: {
                    'destination/js/output.min.js': ['src/js/index.js'] // Source file and output destination for JS
                }
            }
        },

        // CSSMin task configuration for CSS files using the earlier mentioned syntax
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css', // Current working directory
                    src: ['*.css', '!*.min.css'], // Source files pattern
                    dest: 'destination/css', // Destination directory
                    ext: '.min.css' // Extension for minified files
                }]
            }
        }
    });

    // Load the plugins that provide the "uglify" and "cssmin" tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s)
    grunt.registerTask('default', ['uglify', 'cssmin']);
};


