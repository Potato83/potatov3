module.exports = function(grunt) {
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      css: {
        // triggers a soft CSS only refresh
        files: 'assets/css/*.css',
        spawn: false,
        options: { livereload: true }
      },
      js_output: {
        // triggers a soft JS only refresh
        files: '**/*.js',
        spawn: false,
        options: { livereload: true }
      },
      html: {
        files: ['*.html'],
        spawn: false,
        options: { livereload: true }
      },
      php:  {
        files: ['**/*.php'],
        options: { livereload: true }
      }
    }
    });

// Where we tell Grunt we plan to use this plug-in.
grunt.loadNpmTasks('grunt-contrib-watch');

// Where we tell Grunt what to do when we type "grunt" into the terminal.
grunt.registerTask('default', ['watch']);
};

