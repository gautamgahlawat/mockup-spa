module.exports = function(grunt) {

  //load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project confg tasks
  grunt.initConfig({

    //Read the package.json file
    pkg: grunt.file.readJSON('package.json'),


    // Minify the CSS files
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/style.css': ['src/css/style.css']
        }
      }
    },

    // Optimize the images in the img/ folder
    // already optimized
    // imagemin: {
    //   dist: {
    //     options: {
    //       optimizationLevel: 3
    //     },
    //     files: [{
    //       expand: true,                 //Enable dynamic expansion
    //       cwd: 'src/img',               // Src matches are relative to this path
    //       src: ['**/*.{png,jpg,gif}'],  // Actual patterns to match
    //       dest: 'dist/img'              // Destination path prefix
    //     }]
    //   }
    // },

    // Minify the javascript file
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/app.js': 'src/js/app.js'
        }
      }
    },

    // Minify html
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of file
          'dist/index.html': 'src/index.html'
        }
      },

      dev: {
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },                                       // Another target
        files: {
          'dist/index.html': 'src/index.html'
        }
      }
    },

    // // Inline the CSS into the index.html file
    // inlinecss: {
    //   main: {
    //     options: {},
    //     files: {
    //       'dist/index.html': 'src/index.html'
    //     }
    //   }
    // }

  });




  // Register the tasks as default actions for the 'grunt' command
  grunt.registerTask('default',['cssmin', 'htmlmin', 'uglify']);
};