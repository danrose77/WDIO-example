let timeout = 48 * 10000;
const {join} = require('path');

let screenDate = new Date();
let month = screenDate.getMonth() + 1;
let dateString = screenDate.getFullYear() + "_" + month + "_" + screenDate.getDate();

function addValueInObject(object, key, value) {
    let res = {};
    let textObject = JSON.stringify(object);
    if (textObject === '{}') {
        res = JSON.parse('{"' + key + '":"' + value + '"}');
    } else {
        res = JSON.parse('{' + textObject.substring(1, textObject.length - 1) + ',"' + key + '":"' + value + '"}');
    }
    return res;
}

exports.config = {
    reporters: [
        'spec'

    ],
    updateJob: false,
    exclude: [],
    suites: {},
    coloredLogs: true,
    screenshotPath: "./reports/ErrorShots",
    waitforTimeout: 30000,
    deprecationWarnings: false,
    plugins: {
        "wdio-screenshot": {}
    },
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        compilers: ["js:babel-register"],
        timeout: timeout
    },
    services: ["selenium-standalone"],
    specs: ["Test/**/*.test.js"],
    logLevel: 'error',
    maxInstances: 1,
    baseUrl: "http://the-internet.herokuapp.com/",
    capabilities: [{"browserName": "chrome"}],
    // Gets executed before all workers get launched.
    onPrepare() {
    },
    // Gets executed before test execution begins. At this point you will have access to all global
    // variables like `browser`. It is the perfect place to define custom commands.
    before(capabilities, specs) {
        require('dotenv').config();


        // create reporting folders
        global.fs = require('fs');
        const mkdirSync = function (dirPath) {
            try {
                fs.mkdirSync(dirPath)
            } catch (err) {
                if (err.code !== 'EEXIST') throw err
            }
        };
        mkdirSync("./reports/");
        mkdirSync("./reports/ErrorShots/");
        mkdirSync("./reports/" + dateString + "/");

        // determine form factor
        let formFactor = 'desktop';
        if (('true' === capabilities["real_mobile"]) || ('false' === capabilities['real_mobile'])) {
            formFactor = 'mobile';
        }
        global.formFactor = formFactor;
        if (formFactor === "desktop") {
            browser.maximizeWindow();
           // browser.setWindowSize(1920, 1080)
        }
        let platform = capabilities.browserName;
        if (platform === undefined) {
            platform = capabilities.device;
        }
        global.platform = platform;
    },
    afterTest(test) {
        //console.dir(test, {depth: null, colors: true});
        if (!test.passed) {
            browser.saveScreenshot('./reports/ErrorShots/' + screenDate.getTime() + '.png');
        }
    },
    after() {
    },
    // Gets executed after all workers got shut down and the process is about to exit. It is not
    // possible to defer the end of the process using a promise.
    onComplete() {
    }
};
