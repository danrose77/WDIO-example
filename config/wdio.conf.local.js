const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  specs: ["Test/**/*.js"],
  logLevel: 'error',
  reporters: ["spec"],
  maxInstances: 5,
  capabilities: [
    {
      "browserName": "chrome",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]
      }
    }
  ],
});
