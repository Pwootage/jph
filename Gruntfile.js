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
    watch: {
      ts: {
        files: ["**/*.ts"],
        tasks: "ts"
      }
    }
  });

  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['ts']);

};