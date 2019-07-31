module.exports = function(grunt) {
    grunt.config("environment", (function() {
        let env = grunt.option("env");
        console.log('env = '+ env);
        return env;
    })());
    grunt.config("feature", (function() {
        let feature = "";
        let path = "";
        if (grunt.option("feature") !== undefined) {
            feature = grunt.option("feature");
            path = "./Test/**/" + feature + ".js";
        } else if (grunt.option("folder") !== undefined) {
            folder = grunt.option("folder");
            path = "./Test/**/" + folder + "/*.js";
        } else {
            path = "./Test/**/*.js";
        }
        console.log('feature = '+ path);
        return path;
    })());
    grunt.config("platform", (function() {
        let platform = "";
        if (grunt.option("platform") !== undefined) {
            if (grunt.option("platform") === 'chrome') {
                platform = [{'os' : 'Windows','os_version' : '10','browserName' : 'chrome','resolution' : '1920x1200','browserstack.local' : 'false','browserstack.debug' : 'true','browserstack.timezone' : 'UK','browserstack.geoLocation' : 'GB',"goog:chromeOptns": {"args": ["disable-infobars"]}}]
            } else if (grunt.option("platform") === 'ios') {
                platform = [{'os_version' : '10','device' : 'iPhone 7','real_mobile' : 'true','browserstack.timezone' : 'UK','browserstack.local' : 'false','browserstack.debug' : 'true','browserstack.geoLocation' : 'GB','browserstack.appiumVersion': '1.9.1',}]
            } else if (grunt.option("platform") === 'android') {
                platform = [{'os_version' : '8.0','device' : 'Samsung Galaxy S9','real_mobile' : 'true','browserstack.timezone' : 'UK','browserstack.local' : 'false','browserstack.debug' : 'true','browserstack.geoLocation' : 'GB','browserstack.networkLogs' : 'true','browserstack.appiumVersion': '1.9.1',}]
            } else {
                console.log("No recognised platform specified, using chrome")
                platform = [{'os' : 'Windows','os_version' : '10','browserName' : 'chrome','resolution' : '1920x1200','browserstack.timezone' : 'UK','browserstack.local' : 'false','browserstack.debug' : 'true','browserstack.geoLocation' : 'GB',"goog:chromeOptns": {"args": ["disable-infobars"]}}]
            }
        } else {
            console.log("No platform specified, using chrome")
            platform = [{'os' : 'Windows','os_version' : '10','browserName' : 'chrome','resolution' : '1920x1200','browserstack.timezone' : 'UK','browserstack.local' : 'false','browserstack.debug' : 'true','browserstack.geoLocation' : 'GB',"goog:chromeOptns": {"args": ["disable-infobars"]}}]
        }
        console.log('platform = '+ platform);
        return platform;
    })());
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        webdriver: {
            test: {
                configFile: "./config/wdio.conf.local.js",
                    specs: [
                        grunt.config("feature"),
                    ],
                    baseUrl: grunt.config("environment"),
            },
            browserstack: {
                configFile: "./config/wdio.conf.browserstack.js",
                    specs: [
                        grunt.config("feature"),
                    ],
                    baseUrl: grunt.config("environment"),
                    capabilities: grunt.config("platform"),
            },
        },
    });

    grunt.loadNpmTasks("grunt-mocha");
    grunt.loadNpmTasks("grunt-webdriver");
    grunt.registerTask("default", ["webdriver:test"]);
    grunt.registerTask("test", ["webdriver:test"]);
    grunt.registerTask("browserstack", ["webdriver:browserstack"]);
};
