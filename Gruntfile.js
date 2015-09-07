module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ts: {
      main: {
        options: {
          target: "es5",
          emitDecoratorMetadata: true,
          module: "commonjs"
        },
        src: ["**/*.ts", "!bower_components/**/*", "!node_modules/**/*"],
        dest: ["dist/"]
      }
    },
    less: {
      main: {
        src: "main.less",
        dest: "main.css"
      }
    },
    watch: {
      ts: {
        files: ["**/*.ts"],
        tasks: "ts"
      },
      less: {
        files: ["**/*.less"],
        tasks: "less"
      }
    }
  });

  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['ts', 'less']);

};