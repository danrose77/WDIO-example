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
            if (suite === 'B2CSmoke') {
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
    grunt.config("platform", (function() {
        let platform = "";
        if (grunt.option("platform") !== undefined) {
            if (grunt.option("platform") === 'chrome') {
                platform = [{'os' : 'Windows','os_version' : '10','browserName' : 'Chrome','resolution' : '1920x1200','browserstack.local' : 'false','browserstack.debug' : 'true','browserstack.timezone' : 'UK','browserstack.geoLocation' : 'GB',"goog:chromeOptns": {"args": ["disable-infobars"]}}]
            } else if (grunt.option("platform") === 'ie') {
                platform = [{'os' : 'Windows','os_version' : '7','browserName' : 'IE','browserstack.ie.driver' : '2.31','browser_version' : '8.0','browserstackLocal' : 'true','resolution' : '1920x1200','browserstack.debug' : 'true','browserstack.timezone' : 'UK','browserstack.geoLocation' : 'GB',}]
            } else if (grunt.option("platform") === 'ios') {
                platform = [{'os_version' : '10','device' : 'iPhone 7','real_mobile' : 'true','browserstack.timezone' : 'UK','browserstack.local' : 'false','browserstack.debug' : 'true','browserstack.geoLocation' : 'GB','browserstack.appiumVersion': '1.9.1',}]
            } else if (grunt.option("platform") === 'android') {
                platform = [{'os_version' : '8.0','device' : 'Samsung Galaxy S9','real_mobile' : 'true','browserstack.timezone' : 'UK','browserstack.local' : 'false','browserstack.debug' : 'true','browserstack.geoLocation' : 'GB','browserstack.networkLogs' : 'true','browserstack.appiumVersion': '1.9.1',}]
            } else if (grunt.option("platform") === 'mac') {
                platform = [{'os' : 'OS X','os_version' : 'Mojave','browserName' : 'safari','browserstack.selenium_version' : '3.141.59','resolution' : '1920x1080','browserstack.local' : 'false','browserstack.debug' : 'true','browserstack.timezone' : 'UK','browserstack.geoLocation' : 'GB'}]
            } else {
                console.log("No recognised platform specified, using chrome");
                platform = [{'os' : 'Windows','os_version' : '10','browserName' : 'chrome','resolution' : '1920x1200','browserstack.timezone' : 'UK','browserstack.local' : 'false','browserstack.debug' : 'true','browserstack.geoLocation' : 'GB',"goog:chromeOptns": {"args": ["disable-infobars"]}}]
            }
        } else {
            console.log("No platform specified, using chrome");
            platform = [{'os' : 'Windows','os_version' : '10','browserName' : 'chrome','resolution' : '1920x1200','browserstack.timezone' : 'UK','browserstack.local' : 'false','browserstack.debug' : 'true','browserstack.geoLocation' : 'GB',"goog:chromeOptns": {"args": ["disable-infobars"]}}]
        }
        return platform;
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
            ie: {
                configFile: "./config/wdio.conf.local.ie.js",
                specs: grunt.config("spec"),
                baseUrl: grunt.config("environment"),
            },
            devtools: {
                configFile: "./config/wdio.conf.devtools.js",
                specs: grunt.config("spec"),
                baseUrl: grunt.config("environment"),
                capabilities: [{"browserName": "chrome"}],
            },
            VizReg: {
                configFile: "./config/wdio.conf.VizReg.js",
                specs: grunt.config("spec"),
                baseUrl: grunt.config("environment"),
                capabilities: [{"browserName": "chrome"}],
            },
            browserstack: {
                configFile: "./config/wdio.conf.browserstack.js",
                    specs: grunt.config("spec"),
                    baseUrl: grunt.config("environment"),
                    capabilities: grunt.config("platform"),
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
    grunt.registerTask("devtools", ["webdriver:devtools"]);
    grunt.registerTask("VizReg", ["webdriver:VizReg"]);
    grunt.registerTask("browserstack", ["webdriver:browserstack"]);
};
