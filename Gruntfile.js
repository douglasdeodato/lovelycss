	module.exports = function  (grunt) {
	var config = {};

	//setup the configuration object
	var jshint;

    			//src ===============================
    			var src;
				config.src = src = {
					 sassMain     	 : 'scss/main.scss',
					 distFolder		 : 'public/stylesheets/lovelycss.dist.css',
					 devFolder		 : 'public/stylesheets/lovelycss.dev.css',
					 libFolder       : 'lib/**/*.js',
					 sassFolder		 : 'scss/**/*.scss',
					 spriteCssFolder : 'scss/helpers/_sprite.scss',
					 spriteDestImg	 : 'public/images/sprite/spritesheet.png',
					 spriteSrc		 : 'public/images/min/*.{png,jpg,gif}',
					 imageminCwd	 : 'public/images/',
					 imageminDest    : 'public/images/min'  
				};

			/*	var ngdocs
				config.ngdocs = ngdocs ={
					  ngdocs: {
				      	  all: ['/scss'],

					      options: {
					      title: 'lovelycss Documentation',
					      dest: 'docs',
					      startPage: '/scss'
					  	  }
			    	  }
    			}; */

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
					 	files: ["<%= src.libFolder %>", "<%= src.sassFolder %>"]
					 	,tasks: ["dev", "sass:dist"]
					 	//,tasks: ["dev",'sass:dist']
					 }
				}

	//jshint.dev = {
	//options: {jshintrc: ".jshintrc.dev"},
	//files: {all: ["with-bootstrap/public/js/main.js","with-bootstrap/public/js/test.js"]}
	//};

				//Sass ===============================
				var sass;
				config.sass = sass = {};

					//distribution
						sass.dist = {
							options: { 
								style: "compressed",
								noCache: true, 
						        sourcemap: 'none', 
						        update:true
							}
							, files: {
								"<%= src.distFolder %>" : "<%= src.sassMain %>"
							}
						};

					//development env.
						sass.dev = {
							options: { 
								style: "expanded", 
								lineNumber: true,
							}
							, files: {
								"<%= src.devFolder %>" : "<%= src.sassMain %>"
							}
						};

					//ScssLint ===============================
						var scsslint;
						config.scsslint = scsslint = {
					        allFiles: [
					          'scss/core/_base.scss',
					        ],
					        options: {
					          config: 'scss/.scss-lint.yml',
					          reporterOutput: '.tmp/scss-lint-report.xml',
					          colorizeOutput: true,
					          compact:false
					        }  
					  	};

				//Sass Doc

				//var sassdoc
				//config.sassdoc = sassdoc ={
				//	  sassdoc: {
				    //  default: {
				   //   src: 'scss/**/*.scss',
				 //   },
 				//  },
    			//};

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
					            cwd : '<%= src.imageminCwd %>',
					            src : ['**/*.{png,jpg,gif}'],
					            dest: '<%= src.imageminDest %>'
					        }]
					 };	

				//Sprite ===============================
				var sprite;
				config.sprite = sprite = {};
				
				  sprite.dist ={
				        src    : '<%= src.spriteSrc %>',
						dest   : '<%= src.spriteDestImg %>',
						destCss: '<%= src.spriteCssFolder %>'
				    
				  };		

				//connect ===============================
				/*var connect;
				config.connect = connect = {};
				 connect: {
				    main: {
				      options: {
				        port: 8000,
				        hostname: '0.0.0.0'
				      }
				    }
				  };*/

	//Register custom tasks ===============================
	grunt.registerTask('default',['dev']);
	grunt.registerTask('dev', ['concat:dev','sass:dev']);
	grunt.registerTask('dist',['sprite','imagemin','concat:dev', 'uglify' , 'sass:dist']);
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt, {
    	scope: 'devDependencies'
  	});

	/*grunt.registerTask('serve', 'start web server for jasmine tests in browser', function() {
   		grunt.task.run('connect:main:keepalive');
	});*/


	//General setup ===============================
	grunt.initConfig(config);

};


