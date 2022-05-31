// Important to use `grunt` as an argument in the function
module.exports = function (grunt) {

  // Configure Clean task through config.merge as this task is used across multiple partials
  // Removes all existing images from dist directory
  grunt.config.merge({
    clean: {
      pdf: ['<%= opts.dist_dir %>/pdf/*']
    }
  });

  // Configure Copy task through config.merge as this task may be used across multiple partials
  // Copies required libraries from node_modules
  grunt.config.merge({
    copy: {
      pdf: {
        files: [{expand: true,
          cwd: '<%= opts.build_dir %>/pdf',
          src: '*.pdf',
          dest: '<%= opts.dist_dir %>/pdf',
        }
        ],
      }
    }
  });

  // Configure Watch task through config.merge as this task is used across multiple partials
  // Watches image files for changes and then runs tasks accordingly
  grunt.config.merge({
    watch: {
      pdf: {
        options: {
          event: ['changed', 'added', 'deleted']
        },
        files: ['<%= opts.build_dir %>/pdf/**/*.pdf'],
        tasks: ['clean:pdf', 'copy:pdf']
      }
    }
  });

};
