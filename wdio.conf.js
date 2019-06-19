require("dotenv").config();
let timeout = 90 * 1000;

exports.config = {
  services: ["selenium-standalone"],
  capabilities: [
    {
      "browserName": "chrome",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]
      }
    }
  ],
  updateJob: false,
  specs: [],
  exclude: [],
  suites: {},
  logLevel: "silent",
  coloredLogs: true,
  screenshotPath: "./reports/ErrorShots",
  waitforTimeout: 30000,
  deprecationWarnings: false,
  plugins: {
    "wdio-screenshot": {}
  },
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    ui: "bdd",
    compilers: ["js:babel-register"],
    timeout: timeout
  },

  // Gets executed before all workers get launched.
  onPrepare() {},
  // Gets executed before test execution begins. At this point you will have access to all global
  // variables like `browser`. It is the perfect place to define custom commands.
  before(capabilities, specs) {
    // Chai section
    const chai = require("chai");
    global.expect = chai.expect;
    global.assert = chai.assert;
    chai.Should();

    // create reporting folders
    fs = require('fs');
    const mkdirSync = function (dirPath) {
      try {
        fs.mkdirSync(dirPath)
      } catch (err) {
        if (err.code !== 'EEXIST') throw err
      }
    };
    mkdirSync("./reports/");
    mkdirSync("./reports/ErrorShots/");
    var screendate = new Date();
    let month = screendate.getMonth();
    month = month + 1;
    mkdirSync("./reports/" + screendate.getFullYear() + "_" + month + "_" + screendate.getDate() + "/");


    // declared globals
    country = "";
    formcountry = "";
    siteSuffix = "";
    sitePrefix = "";
    referenceNumber = "";
    exchangeOrderNumber = "";
    site = "";
    environment = "";
    envcol = "";
    skuslist = [];
    OMScheckReleased = false;
    SHIPNODE_KEY = "";
    PRIME_LINE_NO = "";
    SHIP_ADVICE_NO = "";
    resolvedHolds = false;
    appliedHolds = false;
    OMSquantitiesRecorded = false;

    shopperGroupID = 3;
    cusSQLID = 0;
    cusSQLID2 = 0;
    emailaddress = "";
    newPassword = "Pineapple77";
    customerData = "";
    First_name = "";
    Last_name = "";
    Phone = "";
    Address_line1 = "";
    Address_line2 = "";
    City = "";
    Region = "";
    Postcode = "";
    del_YorN = "";
    del_address1 = "";
    del_city = "";
    del_region = "";
    del_postcode = "";
    del_country = "";

    promotionID1 = "";
    promotionID2 = "";
    creditAmount = "";
    staffPercent = "";
    creditTimes = "";
    giftcardCode1 = "";
    giftcardPIN1 = "";
    giftcardCode2 = "";
    giftcardPIN2 = "";
    giftcard_only = "";
    giftCardUsed = "";
    cusCredit = "";
    
    // set specname global
    specname = String(specs);
    specname = specname.split("\\");
    let specnamelength = specname.length - 1;
    specname = specname[specnamelength];

    // set runStartTime global
    var screendate = new Date();
    let hour = ("0" + screendate.getHours()).slice(-2);
    let minute = ("0" + screendate.getMinutes()).slice(-2);
    let seconds = ("0" + screendate.getSeconds()).slice(-2);
    runStartTime = hour + "_" + minute + "_" + seconds;

    // determine form factor
    formFactor = "";
    if (capabilities["real_mobile"] === 'true') {
      formFactor = "mobile";
    } else if (capabilities["platformName"] === 'Android') {
      formFactor = "mobile";
    } else {
      formFactor = "desktop";
    }
    if (formFactor === "desktop") {
      browser.maximizeWindow();
    }
  },
  after() {},
  // Gets executed after all workers got shut down and the process is about to exit. It is not
  // possible to defer the end of the process using a promise.
  onComplete() {}
};
