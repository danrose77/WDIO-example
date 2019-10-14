module.exports = function(grunt) {
    grunt.config("environment", (function() {
        return grunt.option("env");
    })());
    grunt.config("spec", (function() {
        let spec = "";
        let path = "";
        if (grunt.option("spec") !== undefined) {
            spec = grunt.option("spec");
            path = ["./Test/**/" + spec + ".js"];
        } else if (grunt.option("folder") !== undefined) {
            folder = grunt.option("folder");
            path = ["./Test/**/" + folder + "/**/*.js"];
        } else if (grunt.option("suite") !== undefined) {
            suite = grunt.option("suite");
            // Define scripts to run as part of suites below
            if ((suite === 'B2CSmoke')||(suite === 'B2Csmoke')||(suite === 'b2csmoke')) {
                path = [
                    './test/B2C/**/Debitcard1.js',
                    './test/B2C/**/Debitcard3.js',
                    './test/B2C/**/Delivery5.js',
                    './test/B2C/**/KlarnaUK1.js',
                    './test/B2C/**/Paypal1.js',
                    './test/B2C/**/Search1.js',
                    './test/B2C/**/Shopping_Bag1.js',
                    './test/B2C/**/Store_Finder1.js',
                    './test/B2C/**/Wishlist1.js'
                ]
            } else if ((suite === 'visual_regression')||(suite === 'VR')) {
                path = [
                    './test/Visual_regression/**/*.js'
                ]
            } else if (suite === 'B2BSmoke') {
                path = [
                    './test/B2B/basicE2E.js'
                ]
            } else if (suite === 'OMS') {
                path = [
                    './test/OMS/testpack/**/*.js'
                ]
            }
        } else {
            path = "./Test/**/*.js";
        }
        return path;
    })());

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        webdriver: {
            test: {
                configFile: "./config/wdio.conf.local.js",
                    specs: grunt.config("spec"),
                    baseUrl: grunt.config("environment"),
                    capabilities: [{"browserName": "chrome"}],
            },
            chromeheadless: {
                configFile: "./config/wdio.conf.local.js",
                    specs: grunt.config("spec"),
                    baseUrl: grunt.config("environment"),
                    capabilities: [{"browserName": "chrome",
                    'goog:chromeOptions': {
                        args: ['--headless','--window-size=1920,1080'],
                      }}],
            },
            browserstack: {
                configFile: "./config/wdio.conf.browserstack.js",
                    specs: grunt.config("spec"),
                    baseUrl: grunt.config("environment"),
            },
        },
    });

    grunt.loadNpmTasks("grunt-mocha");
    grunt.loadNpmTasks("grunt-webdriver");
    grunt.registerTask("default", ["webdriver:test"]);
    grunt.registerTask("local", ["webdriver:test"]);
    grunt.registerTask("test", ["webdriver:test"]);
    grunt.registerTask("headless", ["webdriver:chromeheadless"]);
    grunt.registerTask("ie", ["webdriver:ie"]);
    grunt.registerTask("browserstack", ["webdriver:browserstack"]);
    grunt.registerTask("BS", ["webdriver:browserstack"]);
};
