module.exports = function(grunt) {
  grunt.initConfig({
    exec: {
      clean: {
        cmd: "./script.sh ",
        callback: function (error, stdout, stderr) {
          grunt.log.write('stdout: ' + stdout);
          grunt.log.write('stderr: ' + stderr);
          if (error !== null) {
            grunt.log.error('exec error: ' + error);
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.registerTask('default', ['exec']);
};  
