module.exports = function (grunt) {
  // Loads all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Grunt watch task setup
    watch: {
      less: {
        files: [
          'less/*.less'
        ],
        tasks: [
          'less'
        ]
      }
    },
    // Grunt LESS task setup
    less: {
      src: {
        files: {
          'css/styles.css': ['less/styles.less']
        }
      }
    },
    // Grunt web server
    connect: {
      server: {
        options: {
          port: 9000,
          base: ''
        }
      }
    }
  });

  // Behavior of the 'grunt' command when run without parameters
  grunt.registerTask('default', [
    'less',
    'connect:server',
    'watch'
  ]);
};