module.exports = function (grunt) {

	//Configure main project
	grunt.initConfig({
		//settings about plugins
		pkg: grunt.file.readJSON('package.json'),

		//name of plugin 
		cssmin: {
			combine: {
				files:{
					'fast-one/public/stylesheets/style-min.css':['fast-one/public/stylesheets/style.css']
				}
			}
		}
	});

	//load the plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	//do the task
	grunt.registerTask('default',['cssmin']);

};