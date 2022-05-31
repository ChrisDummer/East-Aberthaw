// Important to use `grunt` as an argument in the function
module.exports = function (grunt) {

// Configure Concat task through config.merge as this task is used across multiple partials
  // Task to concatenate js files together separated by a line break
  grunt.config.merge({
    concat: {
        project: {
          src: ['<%= opts.build_dir %>/js/settings/**/*.js',
            'node_modules/jellyfish-ui/dist/js/jellyfish.min.js',
            '<%= opts.build_dir %>/js/project/**/*.js'],
          dest: '<%= opts.dist_dir %>/js/project.js'
        },
        vendor: {
          src: ['<%= opts.build_dir %>/js/vendor/**/*.js'],
          dest: '<%= opts.dist_dir %>/js/vendor.js'
        },
    }
  });

  // Configure Uglify task through config.merge as this task is used across multiple partials
  // Minifies javascript file(s)
  grunt.config.merge({
    uglify: {
      options: {
        mangle: false,
        banner: '<%= opts.banner %>'
      },
      project: {
        files: {
          '<%= opts.dist_dir %>/js/project.min.js': ['<%= opts.dist_dir %>/js/project.js']  // TODO: minifying JS doesn't work yet - throws console error
        }
      },
      vendor: {
        files: {
          '<%= opts.dist_dir %>/js/vendor.min.js': ['<%= opts.dist_dir %>/js/vendor.js']
        },
      },
      environment: {
        files: {
          '<%= opts.dist_dir %>/js/environment.min.js': ['<%= opts.build_dir %>/js/environment.js']
        }
      }
    }
  });

  // Configure String Replace task
  // Adds version control to tiles
  grunt.config('string-replace', {
    dist: {
      files: {
        '<%= opts.dist_dir %>/js/project.js': '<%= opts.dist_dir %>/js/project.js'
      },
      options: {
        replacements: [{
          pattern: /REPLACEWITHCURRENTBUILDVERSION/g,
          replacement: '<%= opts.vers %>' // Get Version from package.json
        }]
      }
    }
  });


  // Configure ESlint task through config.merge as this task is used across multiple partials
  // Validates Javascript files
  grunt.config.merge({
    eslint: {
      site: [
        '<%= opts.build_dir %>/js/project/**/*.js' // Validates javascript files in js/project only (doesn't validate vendor JS)
      ],
    }
  });

  // Configure Watch task through config.merge as this task is used across multiple partials
  // Watches javascript files for changes and then runs tasks accordingly
  grunt.config.merge({
    watch: {
      scripts: {
        options: {
          event: ['changed', 'added', 'deleted']
        },
        files: ['<%= opts.build_dir %>/js/**/*.js'],
        tasks: ['newer:eslint:site', 'concat', 'string-replace', 'uglify']
      }
    }
  });

};
