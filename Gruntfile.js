module.exports = function(grunt) {
    grunt.config("environment", (function() {
        let env = grunt.option("env");
        return env;
    })());
    grunt.config("feature", (function() {
        let feature = "";
        let path = "";
        if (grunt.option("feature") !== undefined) {
            feature = grunt.option("feature");
            path = "./Superdry_Website/**/" + feature + ".js";
        } else if (grunt.option("folder") !== undefined) {
            folder = grunt.option("folder");
            path = "./Superdry_Website/**/" + folder + "/*.js";
        } else {
            path = "./Superdry_Website/**/*.js";
        }
        return path;
    })());
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        webdriver: {
            test: {
                configFile: "./config/wdio.conf.local.js",
                    specs: [
                        grunt.config("feature"),
                    ],
                baseUrl: grunt.config("environment")
            },
        },
    });

    grunt.loadNpmTasks("grunt-mocha");
    grunt.loadNpmTasks("grunt-webdriver");
    grunt.registerTask("default", ["webdriver:test"]);
    //grunt.registerTask('default', ['webdriver:test-mobile']);
};
