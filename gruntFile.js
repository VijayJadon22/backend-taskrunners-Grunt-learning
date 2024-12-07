module.exports = function (grunt) {

    // Project configuration
    grunt.initConfig({
        // Read the package metadata from package.json
        pkg: grunt.file.readJSON('package.json'),

        // Uglify task configuration
        uglify: {
            target: {
                files: {
                    "destination/js/output.min.js": ["src/js/index.js"] // Specify source file and output destination
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register default task(s)
    grunt.registerTask('default', ['uglify']);
};
