const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
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
