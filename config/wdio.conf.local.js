const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  //baseUrl: "https://com-red.nonprod.sd.co.uk/",
  specs: ["Superdry_Website/**/*.js"],
  logLevel: 'error',
  reporters: ["spec"],
  maxInstances: 1,
  capabilities: [
    {
      "browserName": "chrome",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]
      }
    }
  ],
});
