let timeout = 48 * 10000;
const {join} = require('path');

let screendate = new Date();
let month = screendate.getMonth() + 1;
let dateString = screendate.getFullYear() + "_" + month + "_" + screendate.getDate();

exports.config = {
    reporters: [
        'spec',
        ['junit', {
            outputDir: './reports/',
            outputFileFormat: function() {
                return `testresult.xml`
            }
        }]
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

    // Gets executed before all workers get launched.
    onPrepare() {
    },
    // Gets executed before test execution begins. At this point you will have access to all global
    // variables like `browser`. It is the perfect place to define custom commands.
    before(capabilities, specs) {
        console.log(specs);
        require('dotenv').config();
        // Chai section
        const chai = require("chai");
        global.expect = chai.expect;
        global.assert = chai.assert;
        chai.Should();

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

        // declared globals
        global.country = "";
        global.formcountry = "";
        global.site = "";
        global.environment = "";
        global.envcol = "";
        global.emailaddress = "";
        global.customerData = "";
        global.customerDetails = [];
        global.giftcard_only = "";
        global.siteSuffix = "";
        global.sitePrefix = "";
        global.referenceNumber = "";
        global.skuslist = [];
        global.SHIPNODE_KEY = "";
        global.PRIME_LINE_NO = "";
        global.SHIP_ADVICE_NO = "";
        global.appliedHolds = false;
        global.shopperGroupID = 3;
        global.paymentMethod = "";
        global.OMSquantitiesRecorded = false;
        global.xmloutput;

        // set specname global
        let specname = String(specs);
        specname = specname.split("\\");
        let specnamelength = specname.length - 1;
        specname = specname[specnamelength];
        global.specname = specname;

        // set runStartTime global
        screendate = new Date();
        let hour = ("0" + screendate.getHours()).slice(-2);
        let minute = ("0" + screendate.getMinutes()).slice(-2);
        let seconds = ("0" + screendate.getSeconds()).slice(-2);
        runStartTime = hour + "_" + minute + "_" + seconds;

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
        //console.dir(capabilities, {depth: null, colors: true});
        //console.dir(specs, {depth: null, colors: true});
    },
    afterTest(test) {
        //console.dir(test, {depth: null, colors: true});
        if (!test.passed) {
            let screendate = new Date();
            browser.saveScreenshot('./reports/ErrorShots/' + test.fullTitle + screendate.getTime() + '.png');
        }
    },
    after() {
    },
    // Gets executed after all workers got shut down and the process is about to exit. It is not
    // possible to defer the end of the process using a promise.
    onComplete() {
    }
};
