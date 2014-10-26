module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                src: ['src/events.js'],
                dest: 'dist/events.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('build', ['browserify']);
};