module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine_node: {
            options: {
                forceExit: false,
                matchall: true
            },
            all: './spec/'
        }
    });
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jasmine_node']);
	grunt.registerTask('test', ['jasmine_node']);
};