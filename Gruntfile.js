module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
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
    less: {
      src: {
        files: {
          'css/styles.css': ['less/styles.less']
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: ''
        }
      }
    }
  });

  grunt.registerTask('default', [
    'less',
    'connect:server',
    'watch'
  ]);
};