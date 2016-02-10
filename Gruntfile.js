	module.exports = function  (grunt) {
	var config = {};


	//setup the configuration object
	var jshint;

	//all tasks that must be loaded.
	var tasks = [
			'grunt-contrib-jshint'
			,'grunt-contrib-watch'
			,'grunt-contrib-concat'
			,'grunt-contrib-uglify'
			,'grunt-contrib-sass'
			,'grunt-contrib-imagemin'
			,'grunt-spritesmith'
	];

				//Concat ===============================

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


				//Uglify ===============================
				config.uglify = {dist: {
					options: {sourceMap:"public/myapp.production.js.map"}
					,files: {
						"public/myapp.production.js": ["public/myapp.development.js"]
					}
				}}


	//config.jshint = jshint ={};
	//jshint.dist = {
	//options: {jshintrc: ".jshintrc"},
	//files: {all: ["with-bootstrap/public/js/main.js","with-bootstrap/public/js/test.js"]}
	//};

				//Watch ===============================

				config.watch = {
					 scripts: {
					 	files: ["with-bootstrap/public/js/**/*.js"]
					 	,tasks: ["dev"]
					 },
					 
					 css: {
				        files: ['sass/*.scss'],
				        tasks: ['sass'],
				        options: {
				                spawn: false
				            }
        				} 
				}

	//jshint.dev = {
	//options: {jshintrc: ".jshintrc.dev"},
	//files: {all: ["with-bootstrap/public/js/main.js","with-bootstrap/public/js/test.js"]}
	//};

				//Sass ===============================
				var sass;
				config.sass = sass = {};

					//production
						sass.dist = {
							options: { style: "compressed"}
							, files: {
								"public/stylesheets/lovelycss.dist.css" : "sass/main.scss"
							}
						};

					//development env.
						sass.dev = {
						options: { style: "expanded", lineNumber: true}
						, files: {
							"public/stylesheets/lovelycss.development.css" : "sass/main.scss"
						}
					};


				//Image min ===============================
				var imagemin;
				config.imagemin = imagemin = {};

					imagemin.dist = {
								  options: {
						          optimizationLevel: 5,
						          progressive: true,
						      },
						
					        files: [{
					            expand: true,
					            cwd: 'public/images/',
					            src: ['**/*.{png,jpg,gif}'],
					            dest: 'public/images/min'
					        }]
					 };	

				//Sprite ===============================
				var sprite;
				config.sprite = sprite = {};
				
				 
				  sprite.dist ={
				        src: 'public/images/min/*.{png,jpg,gif}',
						dest: 'public/images/sprite/spritesheet.png',
						destCss: 'sass/helpers/_sprite.scss'
				    
				  };		


	//Register custom tasks ===============================
	grunt.registerTask('default',['dev']);
	grunt.registerTask('dev', ['concat:dev','sass:dev']);
	grunt.registerTask('dist',['htmlmin','imagemin','sprite','concat:dev', 'uglify' , 'sass:dist']);


	//General setup ===============================
	grunt.initConfig(config);
	tasks.forEach(grunt.loadNpmTasks);

};


