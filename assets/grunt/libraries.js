// Important to use `grunt` as an argument in the function
module.exports = function (grunt) {

  // Configure Copy task through config.merge as this task may be used across multiple partials
  // Copies required libraries from node_modules
  grunt.config.merge({
    copy: {
      npm: {
        files: [
          {
            src: ['node_modules/magnific-popup/dist/jquery.magnific-popup.js'],
            dest: '<%= opts.build_dir %>/js/vendor/jquery.magnific-popup.js'
          },
          {
            src: ['node_modules/magnific-popup/dist/magnific-popup.css'],
            dest: '<%= opts.build_dir %>/scss/05-vendor/_magnific-popup.scss'
          },
          {
            src: ['node_modules/zurb-twentytwenty/scss/twentytwenty-no-compass.scss'],
            dest: '<%= opts.build_dir %>/scss/05-vendor/_twentytwenty-lib.scss'
          },
          {
            src: ['node_modules/jquery-images-compare/build/images-compare.css'],
            dest: '<%= opts.build_dir %>/scss/05-vendor/_images-compare.scss'
          },
          {
            src: ['node_modules/@splidejs/splide/dist/js/splide.min.js'],
            dest: '<%= opts.dist_dir %>/inc/splide.min.js'
          },
          {
            src: ['node_modules/@splidejs/splide/dist/css/splide-core.min.css'],
            dest: '<%= opts.build_dir %>/scss/05-vendor/_1_splide-core.scss'
          },
          {
            src: ['node_modules/hammerjs/hammer.js'],
            dest: '<%= opts.build_dir %>/js/vendor/hammerjs.js'
          },
          {
            src: ['node_modules/a11y_accordions/assets/js/aria.accordion.min.js'],
            dest: '<%= opts.dist_dir %>/inc/accordion.min.js'
          },
          {
            src: ['node_modules/stickybits/dist/stickybits.min.js'],
            dest: '<%= opts.dist_dir %>/inc/stickybits.min.js'
          },
          {
            src: ['node_modules/klaro/dist/klaro-no-css.js'],
            dest: '<%= opts.dist_dir %>/inc/klaro.js'
          },
        ],
      }
    }
  });

  // Configure Concat task through config.merge as this task is used across multiple partials
  // Task to concatenate related lib files together to prevent enqueuing multiple js files for the same functionality
  grunt.config.merge({
    concat: {
      twentytwenty: {
        options: {
          sourceMap: false,
          separator: ';\r\n'
        },
        src: ['node_modules/zurb-twentytwenty/js/jquery.event.move.js', 'node_modules/zurb-twentytwenty/js/jquery.twentytwenty.js'],
        dest: '<%= opts.dist_dir %>/inc/twentytwenty.min.js',
      },
    }
  });

  // Configure Uglify task through config.merge as this task is used across multiple partials
  // Minifies javascript file(s)
  grunt.config.merge({
    uglify: {
      twentytwenty: {
        options: {
          mangle: false,
        },
        src: '<%= opts.dist_dir %>/inc/twentytwenty.min.js',
        dest: '<%= opts.dist_dir %>/inc/twentytwenty.min.js',
      }
    }
  });
};
