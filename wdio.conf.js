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
        /*,
        ['junit', {
            outputDir: './reports/',
            outputFileFormat: function() {
                return `testresult.xml`
            }
        }]

         */
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

        //console.dir(capabilities, {depth: null, colors: true});
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
        global.yaml = require('js-yaml');

        // set specname global
        let specname = String(specs);
        specname = specname.split("\\");
        let specnamelength = specname.length - 1;
        specname = specname[specnamelength];
        global.specname = specname;

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
