	module.exports = function  (grunt) {
	var config = {};


	//setup the configuration object
	var jshint;

	//all tasks that must be loaded.
	var tasks = [
			'grunt-contrib-jshint'
			,'grunt-contrib-watch'
			,'grunt-contrib-concat'
	];

		//concat ===============================

		var concat
		config.concat = concat = {};

		concat.dev = {
			files: {
				"public/myapp.development.js": [
					"with-bootstrap/public/js/vendor"
					,"with-bootstrap/public/js/**/*.js"
				]
			}
		};



	config.jshint = jshint ={};


	jshint.dist = {
	options: {jshintrc: ".jshintrc"},
	files: {all: ["with-bootstrap/public/js/main.js","with-bootstrap/public/js/test.js"]}
	};

	//Watch ===============================

	config.watch = {
		 scripts: {
		 	files: ["with-bootstrap/public/js/**/*.js"]
		 	,tasks: ["dev"]
		 }
	}

	jshint.dev = {
	options: {jshintrc: ".jshintrc.dev"},
	files: {all: ["with-bootstrap/public/js/main.js","with-bootstrap/public/js/test.js"]}
	};


	//Register custom tasks ===============================
	grunt.registerTask('default',['dev']);
	grunt.registerTask('dev',['jshint:dev', 'concat:dev']);


	//General setup ===============================
	grunt.initConfig(config);
	tasks.forEach(grunt.loadNpmTasks);

};


