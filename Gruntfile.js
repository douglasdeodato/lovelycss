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
		},

		//uglify

		uglify: {
			dist: {
				files:{
					'with-bootstrap/public/js/plugins-min.js':['with-bootstrap/public/js/plugins.js']
				}
			}
		}


	});

	//load the plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//do the task
	grunt.registerTask('default',['cssmin', 'uglify']);

};